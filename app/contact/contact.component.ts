import { Component, OnInit }      from '@angular/core';

import { Contact }        from './contact.model';
import { PageHeaderService } from '../page-header/page-header.service';
import { PageHeader }   from '../page-header/page-header.model';

@Component({
  moduleId: module.id,
  selector: 'kresh-contact',
  templateUrl: 'contact.component.html',
  styleUrls: [ 'contact.component.css' ]
})

export class ContactComponent implements OnInit{
    submitted = false;
    model:Contact;
    
    constructor(private pageHeaderService: PageHeaderService){
        this.model = new Contact();
    }

    ngOnInit(): void{
        let header = new PageHeader();
        header.title = "צרו קשר";
        header.description = "כל מה שעולה לכם בראש";
        header.backgroundImage = "app/images/contact-bg.jpg";
        this.pageHeaderService.setTitle(header);
    }
}
