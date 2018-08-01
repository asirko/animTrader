import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly user$ = this.afAuth.authState;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {}

  logIn(): void {
    const gProvider = new auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(gProvider)
      .then(() => this.router.navigate(['/user', 'my-anims']));
  }

  logOut(): void {
    this.afAuth.auth.signOut()
      .then(() => this.router.navigate(['/login']));
  }
}
