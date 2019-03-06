import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs';
/*to update back and forth */
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private user=new BehaviorSubject<string>('john');
  /*user is a behavior subject of type string and john is the default value that will be shared */
  cast=this.user.asObservable();
  /*now we are going to cast this user as an observable so that it can be monitored from anywhere*/
  constructor() { }

  editUser(newUser){
    this.user.next(newUser);
    /*next is a method of rxjs which will replace the existing value of user with new one*/
  }
}
