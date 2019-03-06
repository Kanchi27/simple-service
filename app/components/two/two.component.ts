import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
user:string;
  constructor(private userService : UserService,
  private usersService : UsersService) { }

  ngOnInit() {
    this.user=this.userService.getFirstUser();
    this.usersService.cast.subscribe(user=> this.user =user);
  }


}
