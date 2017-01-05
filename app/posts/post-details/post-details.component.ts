import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { PageHeaderService } from '../../page-header/page-header.service';
import { PageHeader }   from '../../page-header/page-header.model';
import { Post } from '../shared/post.model';
import { PostService } from '../shared/post.service'

@Component({
    moduleId: module.id,
    selector:'post-details',
    template: `{{post.content}}`
})

export class PostDetailsComponent implements OnInit {
    post:Post;
    errorMessage:string;
    
    constructor(
        private pageHeaderService: PageHeaderService, 
        private postService:PostService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void{
        this.route.params
          .switchMap((params: Params) => this.postService.getPost(+params['id']))
          .subscribe(post => this.post = post);
      
        let header = new PageHeader();
        header.title = this.post.title;
        header.description = this.post.description;
        this.pageHeaderService.setTitle(header);
    }
    
    goBack(): void {
        this.location.back();
    }
}
