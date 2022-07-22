import { Component,Input} from '@angular/core';
import { CreateBlogsService } from './createblogs.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent  {

  title = 'MainPage';
  blogs:{title: string,description: string}[]=[];
 
 constructor(private createblogsservice:CreateBlogsService){}

  ngOnInit() :void{
   this.blogs = this.createblogsservice.blogs;
    }
}

