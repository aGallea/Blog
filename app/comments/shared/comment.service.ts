import { Injectable }     from '@angular/core';
import { Headers,Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Comment } from './comment.model';

@Injectable()
export class CommentService{
    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers });
    private commentsUrl = 'api/comments';  
    
    constructor(private http: Http) { }
    
    getComments(postId: number): Observable<Comment[]> {
        return this.http.get(`${this.commentsUrl}/?postId=${postId}`)
                .map(this.extractData)
                .catch(this.handleError);
    }
    
    addComment(comment:Comment): Observable<Comment>{
        let body = JSON.stringify(comment);
        return this.http.post(this.commentsUrl, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    
    private handleError (error: Response | any) {
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