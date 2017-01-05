import { Component, OnInit } from '@angular/core';

import { PageHeaderService } from '../page-header/page-header.service';
import { PageHeader }   from '../page-header/page-header.model';

@Component({
    moduleId: module.id,
    selector:'my-about',
    templateUrl: 'about.component.html'
})

export class AboutComponent implements OnInit{
    constructor(private pageHeaderService: PageHeaderService) {
       
    }

    ngOnInit(): void{
        let header = new PageHeader();
        header.title = "סיפור קצר";
        header.description = "על מה ועל למה";
        this.pageHeaderService.setTitle(header);
    }
}
