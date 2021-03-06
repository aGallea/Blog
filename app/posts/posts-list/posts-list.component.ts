import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PageHeaderService } from '../../page-header/page-header.service';
import { PageHeader }   from '../../page-header/page-header.model';
import { Post } from '../shared/post.model';
import { PostService } from '../shared/post.service'

@Component({
    moduleId: module.id,
    selector:'posts-list',
    templateUrl: 'posts-list.component.html',
    styleUrls: ['posts-list.component.css']
})

export class PostsListComponent implements OnInit {
    posts:Post[];
    errorMessage:string;
    
    constructor(private pageHeaderService: PageHeaderService, 
                private postService:PostService,
                private router: Router) {
       
    }

    ngOnInit(): void{
        let header = new PageHeader();
        header.title = "Kresh";
        header.description = "בלוג לחובבי נגרות ועשיה";
        header.backgroundImage = "app/images/home-bg.jpg";
        this.pageHeaderService.setTitle(header);
        this.postService.getPosts("").subscribe(
                     posts => this.posts = posts,
                     error =>  this.errorMessage = <any>error);
    }

    onSelect(postId: number) {
        this.router.navigate(['/postdetails', postId]);
    }
}
