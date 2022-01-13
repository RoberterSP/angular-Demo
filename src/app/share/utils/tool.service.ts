import * as _ from 'lodash';
/*
Common method class for called everywhere
*/
let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
]
export class ToolService {
  public static delay(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // 打平的数据 变成 树形结构
  public static ArrayToTree(current: any = []) {
    let newMap: any = {}
    let result: any = []
    if (_.isArray(current) && current.length > 0) {
      current.forEach((element, index) => {
        const id = element.id
        const pid = element.pid
        if (!newMap[id]) {
          newMap[id]['children'] = []
        }

        if (newMap[id]) {
          newMap = {
            ...element,
            children: newMap[id]['children']
          }
        }
        const tree = newMap[id]
        if (pid === 0) {
          result.push(tree)
        } else {
          if (!newMap[pid]) {
            newMap[pid]['children'] = []
          }
          newMap[pid].children.push(tree)
        }
      });
    }
    return result
  }
}

