import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { PageHeader }   from './page-header.model';
 
@Injectable()
export class PageHeaderService{
    private headerTitleSource = new Subject<PageHeader>();
    headerTitle$ = this.headerTitleSource.asObservable();
   
    setTitle(header:PageHeader) {
        this.headerTitleSource.next(header);
    }
}
