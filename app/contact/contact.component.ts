import { Component }      from '@angular/core';

import { Contact }        from './contact.model';

@Component({
  moduleId: module.id,
  selector: 'kresh-contact',
  templateUrl: 'contact.component.html'
})

export class ContactComponent {
    submitted = false;
    model:Contact;
    
    constructor(){
        this.model = new Contact();
    }
}
