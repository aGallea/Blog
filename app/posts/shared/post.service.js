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
require('rxjs/add/operator/toPromise');
var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.postsUrl = 'api/posts';
    }
    PostService.prototype.getPost = function (id) {
        return this.http.get(this.postsUrl + "/" + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PostService.prototype.getPosts = function (category) {
        if (category === "") {
            return this.http.get(this.postsUrl)
                .map(this.extractData)
                .catch(this.handleError);
        }
        if (category === "recent") {
            return this.http.get(this.postsUrl + "/?page=1/?count=10")
                .map(this.extractData)
                .catch(this.handleError);
        }
        return this.http.get(this.postsUrl + ("/?category=" + category))
            .map(this.extractData)
            .catch(this.handleError);
    };
    PostService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    PostService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
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
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map