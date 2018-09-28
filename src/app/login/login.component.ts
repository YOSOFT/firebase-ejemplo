import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tareas: Observable<any[]>;

  constructor(
    private afAuth: AngularFireAuth,
    private afdb: AngularFireDatabase
    )
    {
      this.tareas = afdb.list('tareas').valueChanges();
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  ngOnInit() {
  }

}
