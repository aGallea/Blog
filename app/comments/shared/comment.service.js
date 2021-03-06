"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var Subject_1 = require('rxjs/Subject');
var CommentService = (function () {
    function CommentService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
        this.commentsUrl = 'api/comments';
        this.commentSubjectSource = new Subject_1.Subject();
        this.commentSubject$ = this.commentSubjectSource.asObservable();
    }
    CommentService.prototype.getComments = function (postId) {
        return this.http.get(this.commentsUrl + "/?postId=" + postId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CommentService.prototype.addComment = function (comment) {
        var body = JSON.stringify(comment);
        return this.http.post(this.commentsUrl, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CommentService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    CommentService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    CommentService.prototype.commentAdded = function (comment) {
        this.commentSubjectSource.next(comment);
    };
    CommentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CommentService);
    return CommentService;
}());
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map