import { CreateBlogsService } from '../createblogs.service';
import { Component,OnInit } from '@angular/core';
import { Blog } from '../Blog';
import { InvokeFunctionExpr } from '@angular/compiler';
@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit{
 id=1;
Title='';
Description='';
// blogs:{title: string,description: string}[]=[];
blogs:Blog[]=[];

constructor(private createblogsservice:CreateBlogsService){}

submit(title: string,description: string)
{ if(title!='' && description!='')
  {
    this.createblogsservice.createBlog(title,description,this.id);
    console.log(this.createblogsservice.blogs);
    alert("your blog is created and aaded to your Blogs\nto check go to Home\nif you want to delete then go to Manage Blogs");
  }
else
{
  console.log("title or des is not written");
  alert("you have not written title or description!!\nplease write all fields");
}
}


ngOnInit() :void{
  this.blogs = this.createblogsservice.blogs;
   }
}
// submit(title: string,description: string)
// {
//   if(title!='' && description!='')
//   {
 

//   // onCreateHero(heroName: string, heroUniverse: string) {
//   //   this.heroesService.createHero(heroName, heroUniverse); 
//   }

//   }
//   else
//   {console.log("error");}
// }

// constructor(public _router: Router, public _location: Location){}
// Cancle(): void
// {
// this._router.navigateByUrl("/create-page",{skipLocationChange:true}).then(){
//   this._router.navigate([decodeURI(this._location.path())]);
// }
// }

