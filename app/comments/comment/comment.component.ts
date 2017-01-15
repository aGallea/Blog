import { Component, OnInit, Input, trigger, transition, style, animate, state } from '@angular/core';

import { Comment }        from '../shared/comment.model';
import { CommentService }        from '../shared/comment.service';

@Component({
  moduleId: module.id,
  selector: 'form-comment',
  templateUrl: 'comment.component.html',
  animations: [
    trigger(
      'myAnimation',
      [
        transition(
        ':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)',opacity: 1}))
        ]
      ),
      transition(
        ':leave', [
          style({transform: 'translateX(0)', 'opacity': 1}),
          animate('500ms', style({transform: 'translateX(100%)',opacity: 0}))
        ]
      )]
    )
  ],
  styleUrls: [ 'comment.component.css' ]
})

export class CommentComponent implements OnInit {
  model = new Comment("","");
  
  errorMessage :string;
  @Input() postId: number;
  @Input() show:boolean=false;
  @Input() showHeader:boolean=true;

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

  toggle(): void{
    this.show=!this.show;
  }
}