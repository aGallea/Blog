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
var comment_service_1 = require('../shared/comment.service');
var post_model_1 = require('../../posts/shared/post.model');
var CommentsListComponent = (function () {
    function CommentsListComponent(commentService) {
        var _this = this;
        this.commentService = commentService;
        this.commentService.commentSubject$.subscribe(function (comment) { _this.commentAdded(comment); });
    }
    CommentsListComponent.prototype.loadComments = function (postId) {
        var _this = this;
        this.commentService.getComments(postId)
            .subscribe(function (comments) { return _this.comments = comments; }, function (error) { return _this.errorMessage = error; });
    };
    CommentsListComponent.prototype.commentAdded = function (comment) {
        if (!this.comments) {
            return;
        }
        var currentComment = this.getComment(comment.postId);
        if (currentComment == null)
            return;
        this.comments.push(comment);
    };
    CommentsListComponent.prototype.getComment = function (postId) {
        for (var _i = 0, _a = this.comments; _i < _a.length; _i++) {
            var comment = _a[_i];
            if (comment.postId === postId)
                return comment;
        }
        return null;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', post_model_1.Post)
    ], CommentsListComponent.prototype, "post", void 0);
    CommentsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'post-comments',
            templateUrl: 'comments-list.component.html',
            styleUrls: ['comments-list.component.css']
        }), 
        __metadata('design:paramtypes', [comment_service_1.CommentService])
    ], CommentsListComponent);
    return CommentsListComponent;
}());
exports.CommentsListComponent = CommentsListComponent;
//# sourceMappingURL=comments-list.component.js.map