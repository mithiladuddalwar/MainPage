import { CreatePageComponent } from "./create-page/create-page.component";
export class CreateBlogsService {
  
  blogs = [
    {   
        title: 'Captain America',
        description: 'Marvel'
      },
      
    ]
    createBlog(title: string, description: string,id:number) {
        this.blogs.push({title:title, description: description});
      }
    
      removeblog(blog:any) { 

        this.blogs.splice(blog,1); 
      }
    }