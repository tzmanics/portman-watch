import { Component, OnInit } from '@angular/core';

import { UpdateItem } from '../update-item';
import { UpdateItemsService } from '../update-items.service';

@Component({
  selector: 'app-update-blocks',
  templateUrl: './update-blocks.component.html',
  styleUrls: ['./update-blocks.component.css'],
  providers: [UpdateItemsService]
})

export class UpdateBlocksComponent implements OnInit {
  updateItems: UpdateItem[];

  constructor(private updateItemService: UpdateItemsService) { }

  getUpdateItems(): void {
    this.updateItems = this.updateItemService.getUpdateItems();
  }

  ngOnInit(): void {
    this.getUpdateItems();
  }
}
