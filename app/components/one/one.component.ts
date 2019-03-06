import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
/*it should go to 2 level up and one level down */
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
user:string;
editUserName:string;
  constructor(private userService : UserService,
  private usersService :UsersService) { }

  ngOnInit() {
    /*first service - simple service */
    this.user=this.userService.getFirstUser();
    this.usersService.cast.subscribe(user=> this.user =user);
  }
  editTheUser(){
    this.usersService.editUser(this.editUserName)
  }

}
