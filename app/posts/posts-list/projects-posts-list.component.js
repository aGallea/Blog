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
var page_header_service_1 = require('../../page-header/page-header.service');
var page_header_model_1 = require('../../page-header/page-header.model');
var post_service_1 = require('../shared/post.service');
var ProjectsPostsListComponent = (function () {
    function ProjectsPostsListComponent(pageHeaderService, postService) {
        this.pageHeaderService = pageHeaderService;
        this.postService = postService;
    }
    ProjectsPostsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var header = new page_header_model_1.PageHeader();
        header.title = "פרויקטים";
        header.description = "בלוג לחובבי נגרות ועשיה";
        header.backgroundImage = "app/images/home-bg.jpg";
        this.pageHeaderService.setTitle(header);
        this.postService.getPosts("project").subscribe(function (posts) { return _this.posts = posts; }, function (error) { return _this.errorMessage = error; });
        ;
    };
    ProjectsPostsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'projects-posts-list',
            templateUrl: 'posts-list.component.html',
            styleUrls: ['posts-list.component.css']
        }), 
        __metadata('design:paramtypes', [page_header_service_1.PageHeaderService, post_service_1.PostService])
    ], ProjectsPostsListComponent);
    return ProjectsPostsListComponent;
}());
exports.ProjectsPostsListComponent = ProjectsPostsListComponent;
//# sourceMappingURL=projects-posts-list.component.js.map