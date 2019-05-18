import { PostService } from 'src/services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private postService: PostService)
  {

  }
  posts: any[];
  ngOnInit() {
    this.posts = this.postService.posts;
  }
  
}
