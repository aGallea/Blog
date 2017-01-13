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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var page_header_service_1 = require('../../page-header/page-header.service');
var page_header_model_1 = require('../../page-header/page-header.model');
var post_service_1 = require('../shared/post.service');
var comments_list_component_1 = require('../../comments/comments-list/comments-list.component');
var PostDetailsComponent = (function () {
    function PostDetailsComponent(pageHeaderService, postService, route, location) {
        this.pageHeaderService = pageHeaderService;
        this.postService = postService;
        this.route = route;
        this.location = location;
    }
    PostDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.postService.getPost(+params['id']); })
            .subscribe(function (post) { return _this.loadPost(post); });
    };
    PostDetailsComponent.prototype.loadPost = function (post) {
        this.post = post;
        var header = new page_header_model_1.PageHeader();
        header.title = post.header;
        header.description = post.description;
        header.backgroundImage = post.imageUrl;
        this.pageHeaderService.setTitle(header);
        this.commentsListComponent.loadComments(post.id);
    };
    PostDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.ViewChild(comments_list_component_1.CommentsListComponent), 
        __metadata('design:type', comments_list_component_1.CommentsListComponent)
    ], PostDetailsComponent.prototype, "commentsListComponent", void 0);
    PostDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'post-details',
            templateUrl: 'post-details.component.html'
        }), 
        __metadata('design:paramtypes', [page_header_service_1.PageHeaderService, post_service_1.PostService, router_1.ActivatedRoute, common_1.Location])
    ], PostDetailsComponent);
    return PostDetailsComponent;
}());
exports.PostDetailsComponent = PostDetailsComponent;
//# sourceMappingURL=post-details.component.js.map