import { Component, OnInit } from '@angular/core';
import { Post } from './../shared/post';
import { PostService } from '../shared/post.service';
import { PostDataService } from '../shared/post-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts: Observable<any>;
  singlePost: any;
  constructor(private postService: PostService, private postDataService: PostDataService) { }

  ngOnInit() {
    this.posts = this.postService.getAll();
  }

  delete(key: string) {
    this.postService.delete(key);
  }

  edit(post: Post, key: string) {
    this.postDataService.changePost(post, key);
  }

  getPost(key: string) {
    this.singlePost = this.postService.getByKey(key);
    console.log(this.singlePost);
  }
}
