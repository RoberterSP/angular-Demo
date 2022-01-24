import { Injectable } from '@angular/core';
import { HtmlEditorComponent } from '../html-editor/html-editor.component';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';

import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(
        HtmlEditorComponent,
        { name: 'Bombasto', bio: 'Brave as they come' }
      ),
      new AdItem(
        TabPanelComponent,
        { name: 'Dr IQ', bio: 'Smart as they come' }
      )
    ];
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/