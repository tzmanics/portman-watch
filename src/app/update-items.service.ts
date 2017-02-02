import { Injectable } from '@angular/core';

import { UpdateItem } from './update-item';
import { UPDATE_ITEMS } from './update-items';

@Injectable()
export class UpdateItemsService {

  constructor() { }

  getUpdateItems(): UpdateItem[] {
    return UPDATE_ITEMS;
  }

}
