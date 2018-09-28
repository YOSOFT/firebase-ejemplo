import { BrowserModule } from '@angular/platform-browser';



import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';

const config = {
  apiKey: 'AIzaSyB-bZTzqIH6fcpSpoGfK0n-wUcAvvlvgtk',
  authDomain: 'proyecto-genial-51064.firebaseapp.com',
  databaseURL: "https://proyecto-genial-51064.firebaseio.com",
  projectId: "proyecto-genial-51064",
  storageBucket: "proyecto-genial-51064.appspot.com",
  messagingSenderId: "932183535749"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
