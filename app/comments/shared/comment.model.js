"use strict";
var Comment = (function () {
    function Comment(postId, id, owner, dateSubmitted, content, comments) {
        this.postId = postId;
        this.id = id;
        this.owner = owner;
        this.dateSubmitted = dateSubmitted;
        this.content = content;
        if (comments) {
            this.comments = comments;
        }
    }
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.model.js.map