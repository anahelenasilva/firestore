import { Injectable } from '@angular/core';
import { Post } from './post';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private db: AngularFireDatabase) { }

  insert(post: Post) {
    this.db.list('posts').push(post)
      .then((result: any) => {
        console.log(result.key);
    });
  }

  update(post: Post, key: string) {
    this.db.list('posts').update(key, post)
      .catch((error: any) => {
        console.log(error);
    });
  }

  getAll() {
    return this.db.list('posts')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
        })
      );
  }

  getByKey(key: string) {
    return this.db.list(`posts`)
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
        })
      );    
  }

  delete(key: string) {
    this.db.object(`post/${key}`).remove();
  }
}
