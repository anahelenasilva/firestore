import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  private postSouce = new BehaviorSubject({ post: null, key: '' });
  currentPost = this.postSouce.asObservable();

  constructor() { }

  changePost(post: Post, key: string) {
    this.postSouce.next({ post: post, key: key });
  }
}