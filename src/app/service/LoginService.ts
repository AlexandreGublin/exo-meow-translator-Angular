import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../entities/User';
import {FormGroup} from '@angular/forms';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  mUSer: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  users: User[] = [];

  constructor(private router: Router) {
    this.users.push(new User('test@gmail.com', '12345'));
  }

  public isLogin() {
    return this.mUSer.getValue() != null;
  }

  public authentication(formGroup: FormGroup) {
    const user = new User(formGroup.get('email').value, formGroup.get('password').value);

    for (let i = 0; i < this.users.length; i++) {
      console.log(user.email + ' | ' + (this.users[i].email + ' && ' + user.password + ' | ' + this.users[i].password));
      if (this.users[i].email === user.email && this.users[i].password === user.password) {
        console.log('connected');
        this.mUSer.next(user);
        this.router.navigate(['']);
      }
    }
  }

  public disconnectUser() {
    this.mUSer.next(null);
    console.log('disconnect');
    console.log(this.mUSer.getValue());
    this.router.navigate(['/login']);
  }
}
