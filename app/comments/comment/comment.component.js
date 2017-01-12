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
var CommentComponent = (function () {
    function CommentComponent(commentService) {
        this.commentService = commentService;
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    CommentComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.comment) {
            return;
        }
        this.commentService.addComment(this.comment)
            .subscribe(function (comment) { return _this.comment = comment; }, function (error) { return _this.errorMessage = error; });
    };
    CommentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'form-comment',
            templateUrl: 'comment.component.html'
        }), 
        __metadata('design:paramtypes', [comment_service_1.CommentService])
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=comment.component.js.map