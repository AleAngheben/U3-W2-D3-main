import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ActivePostsPageComponent } from './active-posts-page/active-posts-page.component';
import { InactivePostsPageComponent } from './inactive-posts-page/inactive-posts-page.component';
import { CardComponent } from './card/card.component';
import { UppercasePipe } from './uppercase.pipe';
import { HighlightDirective } from './directive/highlight.directive';
import { DetailsBtnComponent } from './details-btn/details-btn.component';
import { DetailsPageComponent } from './directive/details-page/details-page.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'active-posts',
    component: ActivePostsPageComponent,
    children: [{ path: 'details', component: DetailsPageComponent }],
  },
  {
    path: 'inactive-posts',
    component: InactivePostsPageComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ActivePostsPageComponent,
    InactivePostsPageComponent,
    CardComponent,
    UppercasePipe,
    HighlightDirective,
    DetailsBtnComponent,
    DetailsPageComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
