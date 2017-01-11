import { Component, OnInit, Input} from '@angular/core';

import { Comment }        from '../shared/comment.model';
import { CommentService }        from '../shared/comment.service';
import { Post } from '../../posts/shared/post.model';

@Component({
  moduleId: module.id,
  selector: 'post-comments',
  templateUrl: 'comments-list.component.html',
  styleUrls: [ 'comments-list.component.css' ]
})
export class CommentsListComponent implements OnInit {
  comments: Comment[];
  errorMessage :string;
  @Input() post: Post;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    
  }

  loadComments(postId:number): void{
    this.commentService.getComments(postId)
      .subscribe(
        comments => this.comments = comments,
        error =>  this.errorMessage = <any>error);
  }
}