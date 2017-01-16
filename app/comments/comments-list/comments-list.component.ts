import { Component, Input}  from '@angular/core';

import { Comment }          from '../shared/comment.model';
import { CommentService }   from '../shared/comment.service';
import { Post }             from '../../posts/shared/post.model';

@Component({
  moduleId: module.id,
  selector: 'post-comments',
  templateUrl: 'comments-list.component.html',
  styleUrls: [ 'comments-list.component.css' ]
})
export class CommentsListComponent {
  comments: Comment[];
  errorMessage :string;
  @Input() post: Post;

  constructor(private commentService: CommentService) {
    this.commentService.commentSubject$.subscribe(comment => { this.commentAdded(comment); });
  }

  loadComments(postId:number): void{
    this.commentService.getComments(postId)
      .subscribe(
        comments => this.comments = comments,
        error =>  this.errorMessage = <any>error);
  }

  commentAdded(comment:Comment): void{
    if (!this.comments){
      return;
    }
    let currentComment = this.getComment(comment.postId, comment.parentId);
    if (currentComment == null) return;
    this.comments.push(comment);
  }

  private getComment(postId:number, parentId:numer): Comment{
    for(let comment of this.comments){
      if (parentId == 0){
        if(comment.postId === postId)
          return comment;
      }
      else{
        if(comment.postId === postId && comment.id === parentId)
          return comment;
      }
    }
    return null;
  }
}
