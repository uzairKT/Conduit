import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AuthGuard } from './auth.guard';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { TagSearchComponent } from './tag-search/tag-search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'article/:slag', component: ArticleDetailComponent },
  { path: 'author/:username', component: AuthorDetailComponent },
  {
    path: 'user/:username',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'HashSearch/:tag', component: TagSearchComponent },
  {
    path: 'newarticle',
    component: NewArticleComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
