import { Type } from '@angular/core';

export class AdItem {
  constructor(public component: Type<any>, public data: any) {}
}


// Class contructors are very similar to functions
// These are just a few differents between class contructor and funcitons 
// first > contructors cann't have return type annotations - the class instance type is always what's returned; class structor 只能返回一个实体， 就是要 通过new Class 的方式返回一个实体
// 

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/