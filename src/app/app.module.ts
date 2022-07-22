import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePageComponent } from './create-page/create-page.component';

import { HomePageComponent } from './home-page/home-page.component';
import { CreateBlogsService } from './createblogs.service';
import { ShowBlogComponent } from './show-blog/show-blog.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { ManageItemComponent } from './manage-item/manage-item.component';
import { ShowManageComponent } from './show-manage/show-manage.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatePageComponent,
    HomePageComponent,
    ShowBlogComponent,
    BlogItemComponent,
    ManageItemComponent,
    ShowManageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CreateBlogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
