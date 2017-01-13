import { Component, OnInit, ViewChild  } from '@angular/core';

import { PageHeaderService } from '../page-header/page-header.service';
import { PageHeader }   from '../page-header/page-header.model';
import { Post } from '../posts/shared/post.model';
import { PostService } from '../posts/shared/post.service';
import { CommentsListComponent } from '../comments/comments-list/comments-list.component';

@Component({
    moduleId: module.id,
    selector:'my-about',
    templateUrl: 'about.component.html'
})

export class AboutComponent implements OnInit{
    post:Post;
    errorMessage:string;
    @ViewChild(CommentsListComponent)
    private commentsListComponent: CommentsListComponent;

    constructor(private pageHeaderService: PageHeaderService, private postService:PostService) {
       
    }

    ngOnInit(): void{
        this.postService.getPost(1).subscribe(
                     post => this.loadPost(post),
                     error =>  this.errorMessage = <any>error);
    }

    loadPost(post:Post): void{
        this.post=post;
        let header = new PageHeader();
        header.title = post.header;
        header.description = post.description;
        header.backgroundImage = post.imageUrl;
        this.pageHeaderService.setTitle(header);
        this.commentsListComponent.loadComments(post.id);
    }
}
