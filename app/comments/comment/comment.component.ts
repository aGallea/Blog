import { Component, OnInit, Input } from '@angular/core';

import { Comment }        from '../shared/comment.model';
import { CommentService }        from '../shared/comment.service';

@Component({
  moduleId: module.id,
  selector: 'form-comment',
  templateUrl: 'comment.component.html',
  styleUrls: [ 'comment.component.css' ]
})

export class CommentComponent implements OnInit {
  model = new Comment("","");
  
  errorMessage :string;
  @Input() postId: number;

  constructor(private commentService: CommentService) { 
    this.model.comments=[];
  }

  ngOnInit(): void {
    
  }
  
  onSubmit(): void {
    if (this.model.owner === "" || this.model.content==="") { return; }
    this.model.postId = this.postId;
    this.model.parentId = 0;
    this.commentService.addComment(this.model)
                     .subscribe(
                       comment  => this.addCommentSucceeded(comment),
                       error =>  this.errorMessage = <any>error);
  }

  addCommentSucceeded(comment:Comment): void{
    this.commentService.commentAdded(comment);
    this.model.owner="";
    this.model.content="";
  }
}