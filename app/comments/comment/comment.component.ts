import { Component, OnInit } from '@angular/core';

import { Comment }        from '../shared/comment.model';
import { CommentService }        from '../shared/comment.service';

@Component({
  moduleId: module.id,
  selector: 'form-comment',
  templateUrl: 'comment.component.html'
})

export class CommentComponent implements OnInit {
  comment: Comment;
  errorMessage :string;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    
  }
  
  onSubmit(): void {
    if (!this.comment) { return; }
    this.commentService.addComment(this.comment)
                     .subscribe(
                       comment  => this.comment=comment,
                       error =>  this.errorMessage = <any>error);
  }
}