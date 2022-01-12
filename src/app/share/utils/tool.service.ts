import { APP_BASE_HREF } from '@angular/common';
import * as moment from 'moment';
import * as _ from 'lodash';
import { loadMessages } from 'devextreme/localization';
import { v4 as uuid } from 'uuid';

/*
Common method class for called everywhere
*/
export class ToolService {
  public static delay(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // 自定义 select 的 displayExpr
  public static getDisplayTemplate(template, data, acceptCustomValue?: boolean) {
    if ((_.isString(template) && !template.includes('${')) || !template) {
      return data;
    }
    if (_.isArray(data)) {
      const complied = _.template(template);
      _.forEach(data, item => {
        item[template] = complied(item);
      });
    } else {
      const complied = _.template(template);
      data[template] = complied(data);
    }
    if (acceptCustomValue) {
      data = _.map(data, item => item[template]);
    }
    return data;
  }
  public static getBaseHref() {
    // @ts-ignore
    let baseHref = '/';
    const baseDom = document.querySelector('base');
    if (baseDom) {
      baseHref = baseDom.getAttribute('href') || baseHref;
    }
    return baseHref;
  }
  public static getTemplate(template, item) {
    // @ts-ignore
    let str = _.template(template)({ item });
    // fixed cellDisplay window open url bug
    const baseHref = this.getBaseHref();
    if (str.indexOf(window.location.origin) > -1) {
      // 当以 hostname(http://www.xx.com/dir/) 打开新窗口而不包含 baseHref 时则自动加入 baseHref
      const hostBaseHref = `${window.location.origin}${baseHref}`;
      if (str.indexOf(hostBaseHref) <= -1) {
        str = str.replace(new RegExp(window.location.origin, 'g'), hostBaseHref.replace(/\/$/, ''));
      }
    } else if (str.indexOf('href') > -1) {
      // 当以绝对路径(/dir/otherDir/)打开新窗口而不包含 baseHref 时则自动加入 baseHref
      const linkReg = new RegExp(`(href=\\s['"]\\s)(?!${baseHref})`);
      if (linkReg.test(str)) {
        str = str.replace(linkReg, `$1${baseHref.replace(/\/$/, '')}`);
      }
    }
    return str;
  }
 

  public static setAddress(event, formData, type?: string) {
    if (event.component) {
      type = _.isUndefined(type) ? '' : type;
      const address = ['Zip', 'State', 'City', 'County', 'Address', 'Unit'];
      const SameAsHomeAddress = 'SameAddress';
      const indexOf = address.includes(event.dataField);
      if (indexOf) {
        if (formData.SameAddress) {
          this.setValue(
            `Mail${event.dataField}`,
            formData[event.dataField],
            event.component,
            formData,
          );
          this.setDisable(`${type}Mail${event.dataField}`, true, event.component);
        } else {
          this.setDisable(`${type}Mail${event.dataField}`, false, event.component);
        }
      }
      if (event.dataField === SameAsHomeAddress) {
        if (event.value) {
          for (const key in address) {
            if (Object.prototype.hasOwnProperty.call(address, key)) {
              const element = address[key];
              this.setValue(`Mail${element}`, formData[element], event.component, formData);
              this.setDisable(`${type}Mail${element}`, true, event.component);
            }
          }
        } else {
          for (const key in address) {
            if (Object.prototype.hasOwnProperty.call(address, key)) {
              const element = address[key];
              this.setDisable(`${type}Mail${element}`, false, event.component);
            }
          }
        }
      }
    }
  }

  public static setDisbaleAddress(event, formData, type?: string) {
    if (event.component) {
      type = _.isUndefined(type) ? '' : type;
      const address = ['Zip', 'State', 'City', 'County', 'Address', 'Unit'];
      const SameAsHomeAddress = 'SameAddress';
      if (formData[SameAsHomeAddress]) {
        for (const key in address) {
          if (Object.prototype.hasOwnProperty.call(address, key)) {
            const element = address[key];
            this.setValue(`Mail${element}`, formData[element], event.component, formData);
            this.setDisable(`${type}Mail${element}`, true, event.component);
          }
        }
      } else {
        for (const key in address) {
          if (Object.prototype.hasOwnProperty.call(address, key)) {
            const element = address[key];
            this.setDisable(`${type}Mail${element}`, false, event.component);
          }
        }
      }
    }
  }

  public static stringToArray(str: any): string[] {
    str = str || '';
    return str
      .split(',')
      .map(k => k.trim())
      .filter(Boolean);
  }
  public static formatSelectArrayToString = e => {
    if (Array.isArray(e)) {
      return e[0];
    } else {
      return e;
    }
  };
  public static formatArrayToString = e => {
    if (Array.isArray(e)) {
      return e.join(',');
    } else {
      return e;
    }
  };
  public static formatStringToArray = e => {
    if (!Array.isArray(e)) {
      if (e && typeof e === 'string') {
        return e.split(',');
      } else {
        return null;
      }
    } else {
      return e;
    }
  };
  public static arrayToString(arr: any): string {
    if (Array.isArray(arr)) {
      return arr.join(',');
    } else {
      return '';
    }
  }
  public static html2Text(html): string {
    const re1 = new RegExp('<.+?>', 'g'); // 匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
    const msg = html.replace(re1, ''); // 执行替换成空字符
    return msg;
  }
  public static isGUID(str): boolean {
    var reg = new RegExp(
      /^[0-9a-zA-Z]{8}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{12}$/,
    );

    if (reg.test(str)) {
      return true;
    }
    return false;
  }

  public static isFunction(fn: any): boolean {
    if (fn instanceof Function) {
      return true;
    }
    return false;
  }

  public static isArray(fn: any): boolean {
    if (fn instanceof Array) {
      return true;
    }
    return false;
  }

  public static getfilename(filename: any): string {
    return filename + moment().format('YYYYMMDDHHmmss');
  }

  public static isString(fn: any): boolean {
    if (fn instanceof String) {
      return true;
    }
    return false;
  }

  public static getGuid(): string {
    return Guid.newGuid().toString();
  }
  public static trimAll(str, symbol = ''): string {
    symbol = symbol ? symbol : '';
    return str ? str.replace(/\s+/g, symbol) : '';
  }
  public static trimBoth(str, symbol = ''): string {
    symbol = symbol ? symbol : '';
    return str ? str.replace(/^\s+|\s+$/g, symbol) : '';
  }

  public static trimLeft(str, symbol = ''): string {
    symbol = symbol ? symbol : '';
    return str ? str.replace(/^\s*/, symbol) : '';
  }

  public static trimRight(str, symbol = ''): string {
    symbol = symbol ? symbol : '';
    return str ? str.replace(/(\s*$)/g, symbol) : '';
  }

  public static getValidateConfig(): any {
    const config = {
      extensionphone: {
        mask: '(000) 000-0000',
        pattern: /(^\s*$)|(^\(\d{3}\)\s*\d{3}\s*-\s*\d{4}(\s*x\s*\d{0,15})*$)/,
        maskInvalidMessage: 'PHONE_NUMBER_IS_INVALID',
        useMaskedValue: true,
        showMaskMode: 'onFocus',
        validationMessageMode: 'always',
        maskChar: '0',
      },
      phone: {
        mask: '(000) 000-0000 x 999',
        pattern: /(^\s*$)|(^\(\d{3}\)\s*\d{3}\s*-\s*\d{4}(\s*x\s*\d{0,3})*$)/,
        maskInvalidMessage: 'Phone number is invalid.',
        useMaskedValue: true,
        showMaskMode: 'onFocus',
        validationMessageMode: 'always',
        maskChar: '0',
      },
      email: {
        mask: '',
        pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
        maskInvalidMessage: 'Email address is invalid.',
        useMaskedValue: true,
        showMaskMode: 'onFocus',
        validationMessageMode: 'always',
        maskChar: '0',
      },
      fax: {
        mask: '(000) 000-0000',
        pattern: /(^\s*$)|(^\(\d{3}\)\s*\d{3}\s*-\s*\d{4}\s?$)/,
        maskInvalidMessage: 'FAX_NUMBER_IS_INVALID',
        useMaskedValue: true,
        showMaskMode: 'onFocus',
        validationMessageMode: 'always',
        maskChar: '0',
      },
      zip: {
        mask: '00000-9999',
        pattern: /(^\s-*$)|(^\d{5}(-\d{0,4})*$)/,
        maskInvalidMessage: 'Zip Code is invalid.',
        // this.translater.transform('ZIP_CODE_IS_INVALID'), // 'Zip Code is invalid.',
        useMaskedValue: true,
        showMaskMode: 'onFocus',
        validationMessageMode: 'always',
        maskChar: '0',
      },
      cell: {
        mask: '(000) 000-0000',
        pattern: /(^\s*$)|(^\(\d{3}\)\s*\d{3}\s*-\s*\d{4}$)/,
        maskInvalidMessage: 'Number format is invalid.',
        // this.translater.transform('NUMBER_FORMAT_IS_INVALID'), // 'Number format is invalid.',
        useMaskedValue: true,
        showMaskMode: 'onFocus',
        validationMessageMode: 'always',
        maskChar: '0',
      },
      hhmm: {
        mask: '00:00 CC',
        pattern: /(^\s*$)|(^(?:[0][0-9]|[1][0-2]):[0-5][0-9]\ (?:AM|PM)$)/,
        maskInvalidMessage: 'TIME_IS_INVALID',
        useMaskedValue: true,
        showMaskMode: 'onFocus',
        validationMessageMode: 'always',
        maskChar: '0',
      },
      inOut: {
        mask: '00:00 CC - 00:00 CC',
        pattern: /(^\s*$)|(^((?:[0][1-9]|[1][0-2]):[0-5][0-9]\ (?:AM|PM)\ -)\ (?:[0][1-9]|[1][0-2]):[0-5][0-9]\ (?:AM|PM)$)/,
        maskInvalidMessage: 'TIME_IS_INVALID',
        useMaskedValue: true,
        showMaskMode: 'onFocus',
        validationMessageMode: 'always',
        maskChar: '0',
      },
    };
    return config;
  }

  public static isIE() {
    const userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
    const isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1; // 判断是否IE<11浏览器
    const isEdge = userAgent.indexOf('Edge') > -1 && !isIE; // 判断是否IE的Edge浏览器
    const isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
    if (isIE) {
      const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
      reIE.test(userAgent);
      const fIEVersion = parseFloat(RegExp['$1']);
      if (fIEVersion === 7) {
        return 7;
      } else if (fIEVersion === 8) {
        return 8;
      } else if (fIEVersion === 9) {
        return 9;
      } else if (fIEVersion === 10) {
        return 10;
      } else {
        return 6; // IE版本<=7
      }
    } else if (isEdge) {
      return 'edge'; // edge
    } else if (isIE11) {
      return 11; // IE11
    } else {
      return -1; // 不是ie浏览器
    }
  }
  public static isArrayRepeate(arr: any[]): boolean {
    // tslint:disable-next-line:prefer-const
    let hash = {};
    if (arr && arr.length > 0) {
      // tslint:disable-next-line:forin
      for (let i in arr) {
        if (hash[arr[i]]) {
          return true;
        }
        hash[arr[i]] = true;
      }
    }
    return false;
  }

  public static uniqArray(arr: any[]) {
    if (!this.isArray(arr)) {
      return [];
    }
    // tslint:disable-next-line:prefer-const
    let temp = {},
      len = arr.length;
    for (let i = 0; i < len; i++) {
      if (typeof temp[arr[i]] === 'undefined') {
        temp[arr[i]] = 1;
      }
    }
    arr.length = 0;
    len = 0;
    // tslint:disable-next-line:forin
    for (let i in temp) {
      arr[len++] = i;
    }
    return arr;
  }
  /*
  target: 原始的对象
  inc: 需要过滤的数组（移除两侧空格）
  deepCopy: 深copy函数
  */
  public static deepCopy(target: any, inc: any[]) {
    const arr = ['Password', 'password'];
    if (inc && inc.length > 0) {
      inc.forEach(item => {
        if (arr.indexOf(item) === -1) {
          arr.push(item);
        }
      });
    }
    const copyedObjs = [];
    // tslint:disable-next-line:no-shadowed-variable
    function _deepCopy(target: any) {
      if (typeof target !== 'object' || !target) {
        return target;
      }
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < copyedObjs.length; i++) {
        if (copyedObjs[i].target === target) {
          return copyedObjs[i].copyTarget;
        }
      }
      let obj = {};
      if (Array.isArray(target)) {
        obj = [];
      }
      copyedObjs.push({ target, copyTarget: obj });
      Object.keys(target).forEach(key => {
        if (obj[key]) {
          return;
        }
        if (typeof _deepCopy(target[key]) === 'string' && arr.indexOf(key) === -1) {
          target[key] = target[key].trim();
          obj[key] = _deepCopy(target[key]).trim();
        } else {
          obj[key] = _deepCopy(target[key]);
        }
      });
      // return obj;
      return target;
    }
    return _deepCopy(target);
  }

  public static clearLocalStorage(clearkey?: any[]) {
    if (clearkey && clearkey.length === 0) {
      clearkey = ['view_list_of_'];
    }
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const length = clearkey.filter(f => key.indexOf(f) > -1).length;
      if (length > 0 && key) {
        localStorage.removeItem(key);
      }
    }
  }
  /*
    isEmpty: Check data is empty
    */
  public static isEmpty(a: any) {
    if (a === '') {
      return true;
    }
    if (a === 'null') {
      return true;
    }
    if (a === 'undefined') {
      return true;
    }
    if (!a && a !== 0 && a !== '') {
      return true;
    }
    if (Array.prototype.isPrototypeOf(a) && a.length === 0) {
      return true;
    }
    if (Object.prototype.isPrototypeOf(a) && Object.keys(a).length === 0) {
      return true;
    }
    return false;
  }

  public static fieldSorter(fields: any[]) {
    return function (a, b) {
      return fields
        .map(function (o) {
          let dir = 1;
          if (o[0] === '-') {
            dir = -1;
            o = o.substring(1);
          }
          if (typeof a[o] === 'string' && typeof b[o] === 'string') {
            // for igornal string lower/upper case
            // if (a[o] === '') {
            //   a[o] = '-';
            // }
            // if (b[o] === '') {
            //   b[o] = '-';
            // }
            if (a[o].toLowerCase() > b[o].toLowerCase()) {
              return dir;
            }
            if (a[o].toLowerCase() < b[o].toLowerCase()) {
              return -dir;
            }
          }
          if (a[o] > b[o]) {
            return dir;
          }
          if (a[o] < b[o]) {
            return -dir;
          }
          return 0;
        })
        .reduce(function firstNonZeroValue(p, n) {
          return p ? p : n;
        }, 0);
    };
  }

  public static getEnvironment(): string {
    let env = 'live';
    const url = location.host;
    if (url.indexOf('localhost:') > -1) {
      env = 'dev';
    } else if (url.indexOf('shtest-careportal.mcttechnology.cn') > -1) {
      env = 'shtest';
    } else if (
      url.indexOf('ustest-careportal.carecloud.io') > -1 ||
      url.indexOf('ustest-careconnect.carecloud.io') > -1 ||
      url.indexOf('test-careportal.carecloud.io') > -1
    ) {
      env = 'ustest';
    } else {
      env = 'live';
    }
    return env;
  }

  public static isMobile(): Boolean {
    const exg = /(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i;
    // const isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i);
    const isMobile = exg.test(navigator.userAgent) || window.innerWidth <= 500;
    return isMobile;
  }

  public static transformStr(oldStr, start, end, replaceStr) {
    if (!oldStr) {
      return '';
    }
    return oldStr.substring(0, start - 1) + replaceStr + oldStr.substring(end, oldStr.length);
  }

  public static openWin(pageUrl, name, WinWidth, WinHeight, scrollbars, resizable) {
    if (pageUrl) {
      if (resizable == null) {
        resizable = 'yes';
      }
      if (WinWidth == null) {
        WinWidth = 650;
      }
      if (WinHeight == null) {
        WinHeight = 600;
      }
      var pageParamter =
        'scrollbars=' +
        scrollbars +
        ',toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=' +
        resizable +
        ',width=' +
        WinWidth +
        ',height=' +
        WinHeight +
        ',left=' +
        (screen.width - WinWidth) / 2 +
        ',top=' +
        (screen.height - WinHeight - 100) / 2;
      var popwin = null;
      var tem = new Date();
      var v = '_' + tem.getTime();
      name = name + v;
      try {
        popwin = window.open('', name, pageParamter);
        setTimeout(() => {
          popwin.location = pageUrl;
          popwin.focus();
        }, 100);
      } catch (e) {
        popwin = window.open();
        setTimeout(() => {
          popwin.location = pageUrl;
          popwin.focus();
        }, 100);
      }
      return false;
    } else {
      alert('Page address is invalid');
    }
  }
  public static openWinPost(url, data, name, title, WinWidth, WinHeight, scrollbars, resizable) {
    const tempForm = document.createElement('form');
    tempForm.id = 'tempForm1';
    tempForm.method = 'post';
    tempForm.action = url;
    const t = new Date().getTime();
    if (!name) {
      name = 'myForm_' + t;
    }
    tempForm.target = name;
    if (data && data.length > 0) {
      data.forEach(element => {
        if (element['value'] === 0) {
          element['value'] = 0;
        } else {
          element['value'] = element['value'] ? element['value'] : '';
        }
      });
    }
    this._openWinPostBulidInputs(tempForm, data);
    if (tempForm.attachEvent) {
      tempForm.attachEvent('onsubmit', function () {
        this.openWin.open('about:blank', name, WinWidth, WinHeight, scrollbars, resizable);
        // window.open('about:blank', name, 'height=400, width=400, top=0,
        // left=0, toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes,location=yes, status=yes');
      });
    } else {
      tempForm.addEventListener('onsubmit', function () {
        this.openWin.open('about:blank', name, WinWidth, WinHeight, scrollbars, resizable);
      });
    }

    document.body.appendChild(tempForm);

    if (tempForm.fireEvent) {
      tempForm.fireEvent('onsubmit');
      tempForm.submit();
      // DOM2 fire event
    } else if (document.createEvent) {
      const ev = document.createEvent('HTMLEvents');
      ev.initEvent('submit', false, true);
      tempForm.dispatchEvent(ev);
      tempForm.submit();
    }
    document.body.removeChild(tempForm);
  }
  public static _openWinPostBulidInputs(form, data) {
    if (data && data.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < data.length; i++) {
        const d = data[i];
        let hideInput: any = '';
        if (d.type && d.type === 'textarea') {
          hideInput = document.createElement('textarea');
        } else {
          hideInput = document.createElement('input');
          hideInput.type = 'hidden';
        }
        hideInput.name = d.name;
        hideInput.value = d.value;
        form.appendChild(hideInput);
      }
    }
  }
  public static getToken(): string {
    const queryparams = window.location.search.split('&');
    let token = '';
    queryparams.forEach(value => {
      if (value.indexOf('token') !== -1) {
        token = value.split('token=')[1];
      } else if (value.indexOf('Token') !== -1) {
        token = value.split('Token=')[1];
      }
    });
    return token;
  }

  public static getMutilpleValue(values) {
    var rtn = 0;
    if (values && values.length > 0) {
      for (var i = 0; i < values.length; i++) {
        var v = parseInt(values[i]);
        rtn += v;
      }
    }
    return rtn;
  }

  public static paraseMutilpleValue(number, source) {
    // var weekSchedule = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    var length = source ? source.length : 9;
    var values = [];

    if (number) {
      for (var j = 0; j < length; j++) {
        var v = Math.pow(2, j);
        if ((number & v) == v) {
          values.push(v);
        }
      }
    } else {
      return [];
    }
    return values;
  }

  public static toDecimal(number) {
    let f = parseFloat(number);
    if (isNaN(f)) {
      return 0.0;
    }
    f = Math.round(number * 100) / 100;
    return f;
  }

  public static titleCase(str) {
    //把字符串根据空格转换成字符数组
    let arr = str.split(' ');
    //遍历字符数组
    for (let i = 0; i < arr.length; i++) {
      //把第一个字符变为大写,其余字符变为小写
      arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    //加上空格，返回原模式的字符串
    return arr.join(' ');
  }

  public static stringToGuid(val: string) {
    if (val) {
      if (this.isGUID(val)) {
        return val;
      }
      let guidVal = '';
      const val1 = val.slice(0, 8) + '-';
      const val2 = val.slice(8, 12) + '-';
      const val3 = val.slice(12, 16) + '-';
      const val4 = val.slice(16, 20) + '-';
      const val5 = val.slice(20);
      guidVal = val1 + val2 + val3 + val4 + val5;
      return guidVal;
    } else {
      return '';
    }
  }

  // tslint:disable-next-line:member-ordering
  private static op = [
    { name: '=', code: '=', type: 2 },
    { name: '!=', code: '!=', type: 2 },
    { name: '>=', code: '>=', type: 3 },
    { name: '>', code: '>', type: 3 },
    { name: '<=', code: '<=', type: 3 },
    { name: '<', code: '<', type: 3 },
    { name: 'In', code: 'In', type: 1 },
    { name: 'Contains', code: 'Contains', type: 4 },
    { name: 'Start With', code: 'StartsWith', type: 4 },
    { name: 'End With', code: 'EndsWith', type: 4 },
    { name: 'Blank', code: 'IsNull', type: 0 },
    { name: 'Not Blank', code: 'IsNotNull', type: 0 },
  ];

  // tslint:disable-next-line:member-ordering
  private static opReport = [
    { name: '=', code: '=', type: 2 },
    { name: '!=', code: '!', type: 2 },
    { name: '>=', code: 'GreaterThanOrEqualTo', type: 3 },
    { name: '>', code: 'GreaterThan', type: 3 },
    { name: '<=', code: 'LessThanOrEqualTo', type: 3 },
    { name: '<', code: 'LessThan', type: 3 },
    { name: 'In', code: 'In', type: 1 },
    { name: 'Contains', code: 'Contains', type: 4 },
    { name: 'Start With', code: 'StartsWith', type: 4 },
    { name: 'End With', code: 'EndsWith', type: 4 },
    { name: 'Blank', code: 'IsNull', type: 0 },
    { name: 'Not Blank', code: 'IsNotNull', type: 0 },
  ];

  /*
    type: 根据type获取,要列出的操作符；
    expect: 特意排除某些不需要的操作符；
  */
  private static getOpItems(type = [0, 1, 2, 3], expect = [], isReport: boolean = false) {
    const items = [];
    // this.op = ['=', '>=', '>', '<=', '<', '!=', 'In', 'IsNull', 'IsNotNull', 'Contains', 'StartsWith', 'EndsWith'];
    const op = isReport ? this.opReport : this.op;
    op.forEach(x => {
      if (type.indexOf(x.type) > -1) {
        if (expect && expect.length > 0 && expect.indexOf(x.code) > -1) {
        } else {
          items.push({ Name: x.name, Code: x.code });
        }
      }
    });
    return items;
  }

  // 将option.name 转换为 optionName
  public static camelize(str) {
    return str.replace(/[._\s]+(.)?/g, function (match, c) {
      return c ? c.toUpperCase() : '';
    });
  }

  public static getOpByComponent(value, isReport: boolean = false) {
    let items = [];
    let type = [];
    let excpt = [];
    if (value) {
      value = value.toUpperCase();
      if (value.indexOf('DX') === 0) {
        value = value.replace('DX', ''); // 合并dxDateBox, DateBox 2种不同类型表示
      }
      if (value === 'TEXTBOX') {
        type = [0, 2, 4];
      } else if (value === 'DATEBOX') {
        type = [0, 2, 3];
      } else if (value === 'NUMBERBOX') {
        type = [2, 3];
      } else if (value === 'SELECTBOX') {
        type = [0, 1];
      } else if (value === 'CHECKBOX') {
        type = [2];
        excpt = ['!='];
      } else if (value === 'TAGBOX') {
        type = [0, 1];
      } else {
        type = [0, 1, 2, 3, 4];
      }
    }
    items = this.getOpItems(type, excpt, isReport);
    return items;
  }

  public static mergeUrl2ID(params): string {
    let id = this.textFromJson(params);
    return id;
  }

  public static textFromJson(json) {
    if (json === null || json === undefined) {
      return '';
    }
    if (!Array.isArray(json) && !Object.getPrototypeOf(json).isPrototypeOf(Object)) {
      return '' + json;
    }
    const obj = {};
    for (const key of Object.keys(json)) {
      obj[key] = this.textFromJson(json[key]);
    }
    return Object.values(obj).join('-');
  }

  public static cacheKeyData: Object = {};
}

Object.defineProperty(Array.prototype, 'group', {
  enumerable: false,
  value: function (key) {
    var map = {};
    this.forEach(function (e) {
      var k = key(e);
      map[k] = map[k] || [];
      map[k].push(e);
    });
    return Object.keys(map).map(function (k) {
      return { key: k, data: map[k] };
    });
  },
});

//#region Third Part Class
// https://gist.github.com/emptyother/1fd97db034ef848f38eca3354fa9ee90
export class Guid {
  public static newGuid(): Guid {
    return new Guid(
      'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        // tslint:disable-next-line:no-bitwise
        const r = (Math.random() * 16) | 0;
        // tslint:disable-next-line:triple-equals
        // tslint:disable-next-line:no-bitwise
        // tslint:disable-next-line:triple-equals
        // tslint:disable-next-line:no-bitwise
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }),
    );
  }
  public static get empty(): string {
    return '00000000-0000-0000-0000-000000000000';
  }
  public get empty(): string {
    return Guid.empty;
  }
  public static isValid(str: string): boolean {
    const validRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return validRegex.test(str);
  }

  // tslint:disable-next-line:member-ordering
  private value: string = this.empty;
  constructor(value?: string) {
    if (value) {
      if (Guid.isValid(value)) {
        this.value = value;
      }
    }
  }
  public toString() {
    return this.value;
  }

  public toJSON(): string {
    return this.value;
  }
}
//#endregion
