import { Component, OnInit } from '@angular/core';
import { Blog } from '../Blog';
import { CreateBlogsService } from '../createblogs.service';

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']
})
export class ShowBlogComponent implements OnInit {
  
  Title='';
  Description='';
  blogs:{title: string,description: string}[]=[];
  constructor(private createblogsservice:CreateBlogsService) { }

 ngOnInit() :void{
   this.blogs = this.createblogsservice.blogs;
    }
    blogDelete(blog:any)
    {
      console.log(blog);
      const index=this.blogs.indexOf(blog)
      // this.blogs.splice(index);
    }

}
