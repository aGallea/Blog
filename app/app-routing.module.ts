import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsListComponent }    from './posts/posts-list/posts-list.component';
import { ProjectsPostsListComponent }    from './posts/posts-list/projects-posts-list.component';
import { ToolsPostsListComponent }    from './posts/posts-list/tools-posts-list.component';
import { AboutComponent }    from './about/about.component';
import { ContactComponent }    from './contact/contact.component';
import { PostDetailsComponent }    from './posts/post-details/post-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: PostsListComponent },
  { path: 'tools',  component: ToolsPostsListComponent },
  { path: 'projects',  component: ProjectsPostsListComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'postdetails/:id', component: PostDetailsComponent },
  { path: 'contact',  component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
