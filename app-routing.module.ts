import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsListComponent }    from './posts/posts-list/posts-list.component';
import { AboutComponent }    from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: PostsListComponent },
  { path: 'about',  component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}