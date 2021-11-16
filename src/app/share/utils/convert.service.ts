import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class ConvertService {
  /**
   * Auto Query
   *
   */

  public getOp(opchar) {
    if (!opchar) {
      return '';
    }
    switch (opchar) {
      case '=': {
        return '';
      }
      case 'StartsWith': {
        return 'StartsWith';
      }
      case 'EndsWith': {
        return 'EndsWith';
      }
      case '!': {
        return '!';
      }
      case 'GreaterThan': {
        return 'GreaterThan';
      }
      case 'GreaterThanOrEqualTo': {
        return 'GreaterThanOrEqualTo';
      }
      case 'LessThan': {
        return 'LessThan';
      }
      case 'LessThanOrEqualTo': {
        return 'LessThanOrEqualTo';
      }
      case 'In': {
        return 'In';
      }
      case 'Contains': {
        return 'Contains';
      }
      case 'IsNull': {
        return 'IsNull';
      }
      case 'IsNotNull': {
        return 'IsNotNull';
      }
      default:
        return '';
    }
  }

  public buildPostQueryModel(queryModel, name) {
    if (queryModel) {
      const prefix = 'Operator';
      const Operator = queryModel[prefix];
      if (Operator) {
        const field = queryModel[name];
        const newFieldName = field + this.getOp(Operator);
        if (queryModel[name]) {
          queryModel[name] = newFieldName;
        }
      }
    }
    return queryModel;
  }

  public removeOp(fieldWithOp) {
    const opList = [
      'StartsWith',
      'EndsWith',
      '!',
      'GreaterThanOrEqualTo',
      'GreaterThan',
      'LessThanOrEqualTo',
      'LessThan',
      'In',
      'Contains',
      'IsNotNull',
      'IsNull',
    ];
    // const opList = str.replace(/(.*)【空】/,'$1测试');
    let f = '';
    if (fieldWithOp) {
      for (let index = 0; index < opList.length; index++) {
        const op = opList[index];
        const lastIndex = fieldWithOp.lastIndexOf(op);
        if (lastIndex > -1) {
          f = fieldWithOp.substring(0, lastIndex);
        }
      }
    }
    const fieldName = f ? f : fieldWithOp;
    return fieldName;
  }

  getParams(option, obj) {
    if (!obj) {
      obj = {};
    }
    if (option instanceof Array) {
      // [filed, op , value]
      if (option.length === 3 && typeof option[0] === 'string') {
        let op = this.getOp(option[1]);
        op = option[0] + op;
        obj[op] = option[2];
      } else {
        option.forEach(item => this.getParams(item, obj));
      }
    }
    return obj;
  }
  public convertAutoOption(gridOptions) {
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
  /**
   * convert .Net Json Date /Date(1507625658000-0000)/
   */
  public convertNetJsonToDate(value): Date {
    if (!value) {
      return null;
    }
    const date = moment(value);
    return date.toDate();
    // return new Date( +(value.replace('/Date(', '')));
  }

  public convertStringToDate(value, format = 'YYYYMMDD'): Date {
    if (!value) {
      return null;
    }
    const date = moment(value, format);
    return date.toDate();
  }

  public convertStringToDateTime(value, format = 'YYYYMMDDHHmmss'): Date {
    if (!value) {
      return null;
    }
    const date = moment(value, format);
    return date.toDate();
  }

  public formatDate(value: Date, format = 'YYYYMMDD'): string {
    if (!value) {
      return null;
    }
    return moment(value).format(format);
  }

  public formatDateTime(value: Date, format = 'YYYYMMDDHHmmss'): string {
    if (!value) {
      return null;
    }
    return moment(value).format(format);
  }
  // End

  /**
   *  filled a special field to conver Date format
   * */
  public convertDateField(
    model: any,
    dataField: string,
    format = 'YYYYMMDD',
    isGet: boolean = true,
    prefix = 'm_',
  ) {
    const nField = prefix + dataField;
    if (isGet) {
      model[nField] = this.convertStringToDate(model[dataField], format);
    } else {
      model[dataField] = this.formatDate(model[nField], format);
    }
  }

  public getDateField(model: any, dataField: string, format = 'YYYYMMDD') {
    this.convertDateField(model, dataField, format);
  }

  public setDateField(model: any, dataField: string, format = 'YYYYMMDD') {
    this.convertDateField(model, dataField, format, false);
  }
  // End
}
