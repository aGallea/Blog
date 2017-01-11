import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import './rxjs-extensions';

import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }     from './app.component';
import { MasterPageComponent } from './master-page/master-page.component'; 
import { PostsListComponent }    from './posts/posts-list/posts-list.component';
import { AboutComponent } from './about/about.component';
import { PostService } from './posts/shared/post.service';
import { ContactComponent } from './contact/contact.component';
import { ProjectsPostsListComponent }    from './posts/posts-list/projects-posts-list.component';
import { ToolsPostsListComponent }    from './posts/posts-list/tools-posts-list.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { CommentsListComponent} from './comments/comments-list/comments-list.component';
import { CommentComponent} from './comments/comment/comment.component';
import { CommentService} from './comments/shared/comment.service';

@NgModule({
   imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    MasterPageComponent,
    PostsListComponent,
    AboutComponent,
    ContactComponent,
    ProjectsPostsListComponent,
    ToolsPostsListComponent,
    PostDetailsComponent,
    CommentsListComponent,
    CommentComponent
  ],
  providers:    [ PostService,CommentService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
