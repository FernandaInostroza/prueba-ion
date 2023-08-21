import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {
  userForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.maxLength(24), Validators.required]),
  });

  constructor(private router: Router, private _storage: StorageService, private _auth: AuthenticationService) { }

  login() {
    const { email, password } = this.userForm.value;
    this._auth.login(email!, password!).then((response) => {
      if (response?.ok) {
        this._storage.save('user', response.auth);
        this.router.navigate(['/tabs/tab1']);
      }
    }).catch(() => {
      alert('Hubo un error en el login');
    });
  };

  goToRegister() {
    this.router.navigate(['/login/sign-up']);
  }

}
