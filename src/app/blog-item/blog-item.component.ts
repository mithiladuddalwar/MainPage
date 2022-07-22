import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Blog } from '../Blog';
import { CreateBlogsService } from '../createblogs.service';
@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
  @Input() blog:Blog={title:'',description:''};
  @Output() blogDelete:EventEmitter<any>=new EventEmitter();
  
  constructor(private createblogsservice:CreateBlogsService) { } 
  //use service import it and use remove method

  ngOnInit(): void {
  }
  onClick(blog:any)
  {
    console.log(blog);
  // this.blogDelete.emit(blog);
  this.createblogsservice.removeblog(blog);
  console.log("delete button clicked");
  }

}
