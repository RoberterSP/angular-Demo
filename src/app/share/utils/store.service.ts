import { ToolService } from 'src/app/shared/utils/tool.service';
import { Injectable } from '@angular/core';
import { CacheService } from '@ngx-cache/core';

@Injectable()
export class StoreService {
  private data: any = {};

  public save(key: any, data: any) {
    this.data[key] = data;
  }

  public get(key: any) {
    if (this.data.hasOwnProperty(key)) {
      return this.data[key];
    } else {
      return false;
    }
  }

  //#region 利用Ngx-Cache 操作相关缓存数据

  private profixed_Cache: string = 'ngx_';
  public getCache(cacheKey) {
    if (cacheKey) {
      const key = this.profixed_Cache + `${cacheKey}`;
      const cache = CacheService.getInstance();
      const data = cache.get(key);
      return data || null;
    } else {
      throw new Error('Cache key can not empty.');
    }
  }

  public setCache(cacheKey, data, expireTime = 1) {
    if (cacheKey) {
      if (expireTime > 0) {
        const cache = CacheService.getInstance();
        const key = this.profixed_Cache + `${cacheKey}`;
        cache.set(key, data, 0, { TTL: expireTime });
      }
    } else {
      throw new Error('Cache key can not empty.');
    }
  }

  public setCacheByParam(args, data, expireTime = 1) {
    const cacheKey = ToolService.mergeUrl2ID(args) || (this.constructor.name + '_setCacheByParam');
    this.setCache(cacheKey, data, expireTime);
    return false;
    // if (cacheKey) {
    //   if (expireTime > 0) {
    //     const cache = CacheService.getInstance();
    //     const key = this.profixed_Cache + `${cacheKey}`;
    //     cache.set(key, data, 0, { TTL: expireTime });
    //   }
    // } else {
    //   throw new Error('Cache key can not empty.');
    // }
  }

  public removeCache(key) {
    if (key) {
      const cache = CacheService.getInstance();
      if (cache.has(key)) {
        cache.remove(key);
      }
    }
  }

  public clearCache() {
    let removeLocalStorage = [];
    if (localStorage && localStorage.length > 0) {
      for (var i = 0, len = localStorage.length; i < len; ++i) {
        const k = localStorage.key(i);
        if (k && k.indexOf(this.profixed_Cache) > -1) {
          removeLocalStorage.push(k);
        }
      }
      if (removeLocalStorage && removeLocalStorage.length > 0) {
        removeLocalStorage.forEach(item => {
          localStorage.removeItem(item);
        });
      }
    }
  }
  //#endregion

}
