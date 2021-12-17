export const toBase64 = (str: string) =>
  btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match: any, p1: string) =>
      String.fromCharCode(new Number('0x' + p1).valueOf()),
    ),
  );