import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { FormsModule } from '@angular/forms';
import { EditComponent } from './posts/edit/edit.component';
import { ListComponent } from './posts/list/list.component';

var firebaseConfig = {
  apiKey: "AIzaSyB40INnqWCLZuwgxjn776CCY2K0710jQMc",
  authDomain: "firestore-8c049.firebaseapp.com",
  databaseURL: "https://firestore-8c049.firebaseio.com",
  projectId: "firestore-8c049",
  storageBucket: "",
  messagingSenderId: "326936761526"
};

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
