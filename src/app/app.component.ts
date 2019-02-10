import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { AngularFireDatabase } from '@angular/fire/database';

interface Post {
  title: string;
  content: string;
}

interface PostId extends Post{
  id: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  singlePost;

  title: string;
  content: string;

  postDoc: AngularFirestoreDocument<PostId>;
  post: Observable<PostId>;

  constructor(private db: AngularFireDatabase) {
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // this.posts = this.postsCollection.valueChanges();
  }

  // getAll() {
  //   return this.db.list('posts')
  //     .snapshotChanges()
  //     .pipe(
  //       map(changes => {
  //         return changes.map(c => ({ key: c.payload.key, ...c.payload.val() })); //cria um json com todas as propriedades
  //       })
  //     );
  // }

  // getPost(id) {
  //   this.postDoc = this.afs.doc('posts/' + id);
  //   this.singlePost = this.postDoc.valueChanges();
  // }

  // addPost() {
  //   this.afs.collection('posts').add({ 'title': this.title, 'content': this.content  });
  //   //this.afs.collection('posts').doc('my-custom-id-dois').set({ 'title': this.title, 'content': this.content  });
  // }
}