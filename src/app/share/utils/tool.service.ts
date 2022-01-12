import * as _ from 'lodash';
/*
Common method class for called everywhere
*/
export class ToolService {
  public static delay(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
