import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) { }
  @Input() idPost: number;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() createdAt: Date;
  tryShow = 666;
  ngOnInit() {
  }
  onLoveIt()
  {
    this.postService.LoveIt(this.idPost);
  }
  onDontLoveIt()
  {
    this.postService.DontLoveIt(this.idPost);
  }

}
