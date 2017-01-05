import { Component, OnInit } from '@angular/core';

import { PageHeaderService } from '../page-header/page-header.service';
import { PageHeader } from '../page-header/page-header.model';

@Component({
  moduleId: module.id,
  selector: 'master-page',
  templateUrl: 'master-page.component.html',
  providers: [PageHeaderService]
})
export class MasterPageComponent  implements OnInit  { 
  header:PageHeader;
  constructor(private pageHeaderService: PageHeaderService) {
    this.pageHeaderService.headerTitle$.subscribe(header => { this.header=header; });
  }

  ngOnInit(): void{
      
  }
}
