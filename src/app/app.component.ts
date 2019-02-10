import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Post {
  title: string;
  content: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  title: string;
  content: string;

  constructor(private afs: AngularFirestore) {
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.postsCollection = this.afs.collection('posts');
    this.posts = this.postsCollection.valueChanges();
  }

  addPost() {
    this.afs.collection('posts').add({ 'title': this.title, 'content': this.content  });
    //this.afs.collection('posts').doc('my-custom-id-dois').set({ 'title': this.title, 'content': this.content  });
  }
}