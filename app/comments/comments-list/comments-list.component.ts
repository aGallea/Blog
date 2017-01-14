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
    let currentComment = this.getComment(comment.postId);
    if (currentComment == null) return;
    this.comments.push(comment);
  }

  private getComment(postId:number): Comment{
    for(let comment of this.comments){
      if(comment.postId === postId)
        return comment;
    }
    return null;
  }
}