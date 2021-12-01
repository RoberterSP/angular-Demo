import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
// PreloadAllModules 作用是预加载模块，通过后台加载部分数据来改善用户体验，用户无需再激活路由的情况下去等待下载这些元素 https://angular.cn/guide/lazy-loading-ngmodules

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
