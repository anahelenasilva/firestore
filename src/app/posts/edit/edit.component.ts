import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post';
import { PostService } from '../shared/post.service';
import { PostDataService } from '../shared/post-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  post: Post;
  key: string = '';

  constructor(private postService: PostService, private postDataService: PostDataService) { }

  ngOnInit() {
    this.post = new Post();

    this.postDataService.currentPost.subscribe(data => {
      if (data.post && data.key) {
        this.post = new Post();
        this.post.title = data.post.tile;
        this.post.content = data.post.content;
        this.key = data.key;
      }
    });
  }

  onSubmit() {
    if (this.key) {
      this.postService.update(this.post, this.key);
    }
    else {
      this.postService.insert(this.post);
    }

    this.post = new Post();
  }
}
