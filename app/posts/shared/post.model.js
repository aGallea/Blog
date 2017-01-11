"use strict";
var Post = (function () {
    function Post(id, header, description, content, ownerId, imageUrl, category) {
        this.id = id;
        this.header = header;
        this.description = description;
        this.content = content;
        this.ownerId = ownerId;
        this.imageUrl = imageUrl;
        this.category = category;
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post.model.js.map