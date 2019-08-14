import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../service/post.service';
import { IPost } from '../models/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}
  post: IPost;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getPost(+params.get('id'));
    });
  }

  getPost(id: number) {
    this.postService.getPost(id).then(data => {
      this.post = data;
    });
  }
}
