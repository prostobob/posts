import { Component, OnInit } from '@angular/core';

import { PostService } from '../service/post.service';
import { IPost } from '../models/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: IPost[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().then(data => {
      this.posts = data;
    });
  }
}
