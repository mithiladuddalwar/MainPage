import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatePageComponent } from './create-page/create-page.component';


import { ManageItemComponent } from './manage-item/manage-item.component';
import { ShowBlogComponent } from './show-blog/show-blog.component';
import { ShowManageComponent } from './show-manage/show-manage.component';


const routes: Routes = [

{path:'mainPage',
component:AppComponent
},
{
path:'createpage',
component:CreatePageComponent
},

{
  path:'create-page',
  component :CreatePageComponent
  },
  {
    path:'showblog',
    component:ShowBlogComponent
  },
  {
    path:'manageitem',
    component:ManageItemComponent
  },
  {
    path:'showmanage',
    component:ShowManageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
