import * as _ from 'lodash';

export function formatOperatingFormData(data) {
  const unsetList = [];
  const deepObjFields = [];
  const deepArrFields = [];
  const newData = _.mapKeys(data, (value, key) => {
    if (_.isArray(value)) {
      deepArrFields.push(key);
    } else if (_.isObject(value)) {
      deepObjFields.push(key);
    } else if (value === '' || value === undefined || value === null) {
      unsetList.push(key);
    } else {
      const operatingSign = '__operating';
      // has operating add it
      const opKey = `${key}${operatingSign}`;
      const operating = data[opKey];
      if (operating && operating !== '=') {
        unsetList.push(opKey);
        return `${key}${operating}`;
      } else if (key.endsWith(operatingSign)) {
        unsetList.push(key);
      }
    }
    return key;
  });
  // delete operating key
  unsetList.forEach(key => _.unset(newData, key));

  // children obj format
  deepObjFields.forEach(key => {
    newData[key] = formatOperatingFormData(newData[key]);
  });

  // children arr format
  const formatArrFn = arr =>
    arr.map(item => {
      if (_.isObject(item)) return formatOperatingFormData(item);
      if (_.isArray(item)) return formatArrFn(item);
      return item;
    });
  deepArrFields.forEach(key => {
    const list = newData[key];
    newData[key] = formatArrFn(newData[key]);
  });
  return newData;
}
