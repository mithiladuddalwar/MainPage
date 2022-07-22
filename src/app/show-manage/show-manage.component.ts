
import { Component, OnInit } from '@angular/core';
import { Blog } from '../Blog';
import { CreateBlogsService } from '../createblogs.service';

@Component({
  selector: 'app-show-manage',
  templateUrl: './show-manage.component.html',
  styleUrls: ['./show-manage.component.css']
})
export class ShowManageComponent implements OnInit {

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
  
    }
   
    
}
