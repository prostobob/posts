import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
      res.json()
    );
  }

  getPost(id: number) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res =>
      res.json()
    );
  }
}
