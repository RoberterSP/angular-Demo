import { Injectable } from '@angular/core';
import { bytesToBase64 } from '@servicestack/client';
import * as _ from 'lodash';
import { NotifyService } from 'src/app/shared/message/notify.service';

@Injectable({ providedIn: 'root' })
export class AutoQueryService {
  constructor(public message: NotifyService) {}
  public async responsePipe(res, showSuccessMsg = false, showErrorMsg = true) {
    const msg = _.get(res, 'ResponseStatus.Message');
    if (res.IsSuccess === undefined || res.IsSuccess === true) {
      if (showSuccessMsg && msg) this.message.showSuccess(msg);
      return res;
    } else {
      if (showErrorMsg && msg) this.message.showError(msg);
      return Promise.reject(res);
    }
  }
  public appendQueryString(url, options) {
    const params = new URLSearchParams();
    // tslint:disable-next-line:forin
    for (const key in options) {
      if (options[key] !== undefined && options[key] !== '' && options[key] !== null) {
        params.set(key, options[key]);
      }
    }
    url += url.indexOf('?') >= 0 ? '&' : '?';
    return url + params.toString();
  }
  public urlQueryStringToObject(url) {
    let hash;
    const params = {};
    const hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (let i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      if (hash[0]) params[hash[0]] = hash[1];
    }
    return params;
  }

  public getOp(opchar) {
    if (!opchar) {
      return 'Contains';
    }
    switch (opchar) {
      case '=': {
        return '';
      }
      case 'startswith': {
        return 'StartsWith';
      }
      case 'endswith': {
        return 'EndsWith';
      }
      case '<>': {
        return '!';
      }
      case 'or': {
        return '!';
      }
      case '>': {
        return 'GreaterThan';
      }
      case '>=': {
        return 'GreaterThanOrEqualTo';
      }
      case '<': {
        return 'LessThan';
      }
      case '<=': {
        return 'LessThanOrEqualTo';
      }
      case 'notcontains': {
        return 'NotContains';
      }
      default:
        return 'Contains';
    }
  }

  public appendSort(options, loadoptions) {
    options.OrderByDesc = '';
    options.OrderBy = '';
    if (loadoptions.sort) {
      for (const item of loadoptions.sort) {
        if (item.desc) {
          options.OrderByDesc += item.selector + ',';
        } else {
          options.OrderBy += item.selector + ',';
        }
      }
    }
    if (loadoptions.filter) {
      options = this.getParams(loadoptions.filter, options);
    }
    return options;
  }

  getParams(option, obj) {
    if (!obj) {
      obj = {};
    }
    if (option instanceof Array) {
      // [filed, op , value]
      if (option.length === 3) {
        // 对 data 的 格式进行特殊处理 -- CC4-618
        if (option[1] === 'or') {
          let op = this.getOp(option[1]);
          op = option[0][0] + op;
          obj[op] = option[0][2];
        } else if (typeof option[0] === 'string') {
          let op = this.getOp(option[1]);
          op = option[0] + op;
          obj[op] = option[2];
        } else {
          option.forEach(item => this.getParams(item, obj));
        }
      } else {
        option.forEach(item => this.getParams(item, obj));
      }
    }
    return obj;
  }
  public convertAutoOption(gridOptions) {
    if (!gridOptions) {
      return '';
    }
    let options: any = {
      Skip: gridOptions.skip,
      Take: gridOptions.take,
      OrderBy: '',
      OrderByDesc: '',
      Fields: '',
      Include: '',
    };
    if (gridOptions.dataField) {
      options.Fields = 'DISTINCT ' + gridOptions.dataField;
      options.OrderBy = gridOptions.dataField;
      options.Include = 'Count ( DISTINCT ' + gridOptions.dataField + ' ) as Total';
    }
    if (options.Include == '' && gridOptions.take && gridOptions.take > 0) {
      options.Include = 'Total';
    }
    if (gridOptions.sort) {
      for (const item of gridOptions.sort) {
        if (item.desc) {
          options.OrderByDesc += item.selector + ',';
        } else {
          options.OrderBy += item.selector + ',';
        }
      }
    }
    if (gridOptions.filter) {
      options = this.getParams(gridOptions.filter, options);
    }
    const params = new URLSearchParams();
    // tslint:disable-next-line:forin
    for (const key in options) {
      if (options[key] !== undefined && options[key] !== '') {
        params.set(key, options[key]);
      }
    }
    return params.toString();
  }

  private qsValue(arg) {
    if (arg == null) {
      return '';
    }
    if (typeof Uint8Array != 'undefined' && arg instanceof Uint8Array) {
      return bytesToBase64(arg);
    }
    return encodeURIComponent(arg) || '';
  }
}
