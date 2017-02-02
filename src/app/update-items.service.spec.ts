/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpdateItemsService } from './update-items.service';

describe('UpdateItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateItemsService]
    });
  });

  it('should ...', inject([UpdateItemsService], (service: UpdateItemsService) => {
    expect(service).toBeTruthy();
  }));
});
