import { Component, OnInit } from '@angular/core';

import { PageHeaderService } from '../../page-header/page-header.service';
import { PageHeader }   from '../../page-header/page-header.model';
import { Post } from '../shared/post.model';
import { PostService } from '../shared/post.service'

@Component({
    moduleId: module.id,
    selector:'projects-posts-list',
    templateUrl: 'posts-list.component.html',
    styleUrls: ['posts-list.component.css']
})

export class ProjectsPostsListComponent implements OnInit {
    posts:Post[];
    errorMessage:string;
    
    constructor(private pageHeaderService: PageHeaderService, private postService:PostService) {
       
    }

    ngOnInit(): void{
        let header = new PageHeader();
        header.title = "פרויקטים";
        header.description = "בלוג לחובבי נגרות ועשיה";
        header.backgroundImage = "app/images/home-bg.jpg";
        this.pageHeaderService.setTitle(header);
        this.postService.getPosts("project").subscribe(
                     posts => this.posts = posts,
                     error =>  this.errorMessage = <any>error);;
    }
}
