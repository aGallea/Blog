import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

import { Post } from './post.model';

@Injectable()
export class PostService{
    private headers = new Headers({'Content-Type': 'application/json'});
    private postsUrl = 'api/posts'; 

    constructor(private http: Http) { }

    getPost(id: number) : Observable<Post>{
        return this.http.get(`${this.postsUrl}/${id}`)
                .map(this.extractData)
                .catch(this.handleError);
    }

    getPosts(category:string) : Observable<Post[]>{
        if (category === "") {
           return this.http.get(this.postsUrl)
                    .map(this.extractData)
                    .catch(this.handleError); 
        }
        if (category === "recent") {
           return this.http.get(this.postsUrl + `/?page=1/?count=10`)
                    .map(this.extractData)
                    .catch(this.handleError); 
        }
        return this.http.get(this.postsUrl + `/?category=${category}`)
                .map(this.extractData)
                .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
