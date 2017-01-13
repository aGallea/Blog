import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { PageHeaderService } from '../../page-header/page-header.service';
import { PageHeader }   from '../../page-header/page-header.model';
import { Post } from '../shared/post.model';
import { PostService } from '../shared/post.service'
import { CommentsListComponent } from '../../comments/comments-list/comments-list.component';

@Component({
    moduleId: module.id,
    selector:'post-details',
    templateUrl: 'post-details.component.html'
})

export class PostDetailsComponent implements OnInit {
    post:Post;
    errorMessage:string;
    @ViewChild(CommentsListComponent)
    private commentsListComponent: CommentsListComponent;
    
    constructor(
        private pageHeaderService: PageHeaderService, 
        private postService:PostService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void{
        this.route.params
          .switchMap((params: Params) => this.postService.getPost(+params['id']))
          .subscribe(post => this.loadPost(post));
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
    
    goBack(): void {
        this.location.back();
    }
}
