
import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Blog } from '../Blog';
import { CreateBlogsService } from '../createblogs.service';
@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.css']
})
export class ManageItemComponent implements OnInit {
  @Input() blog:Blog={title:'',description:''};
  @Output() blogDelete:EventEmitter<any>=new EventEmitter();

  constructor(private createblogsservice:CreateBlogsService) { } 
  ngOnInit(): void {
  }
  onClick(blog:any)
  { alert("are you sure??\n you want to delete this blog permanently");
    console.log(blog);
  // this.blogDelete.emit(blog);
  this.createblogsservice.removeblog(blog);
  console.log("delete button clicked");
  }


}


  //use service import it and use remove method

