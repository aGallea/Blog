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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
require('./rxjs-extensions');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./app-routing.module');
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('./in-memory-data.service');
var app_component_1 = require('./app.component');
var master_page_component_1 = require('./master-page/master-page.component');
var posts_list_component_1 = require('./posts/posts-list/posts-list.component');
var about_component_1 = require('./about/about.component');
var post_service_1 = require('./posts/shared/post.service');
var contact_component_1 = require('./contact/contact.component');
var projects_posts_list_component_1 = require('./posts/posts-list/projects-posts-list.component');
var tools_posts_list_component_1 = require('./posts/posts-list/tools-posts-list.component');
var post_details_component_1 = require('./posts/post-details/post-details.component');
var comments_list_component_1 = require('./comments/comments-list/comments-list.component');
var comment_component_1 = require('./comments/comment/comment.component');
var comment_service_1 = require('./comments/shared/comment.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                master_page_component_1.MasterPageComponent,
                posts_list_component_1.PostsListComponent,
                about_component_1.AboutComponent,
                contact_component_1.ContactComponent,
                projects_posts_list_component_1.ProjectsPostsListComponent,
                tools_posts_list_component_1.ToolsPostsListComponent,
                post_details_component_1.PostDetailsComponent,
                comments_list_component_1.CommentsListComponent,
                comment_component_1.CommentComponent
            ],
            providers: [post_service_1.PostService, comment_service_1.CommentService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map