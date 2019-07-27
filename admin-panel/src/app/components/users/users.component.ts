import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user-model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: Array<User> = [];

  constructor(
    private userService: UserService
  ) { 
    this.userService.getUsers().then((response: any) => {
      this.users = response;
    }).catch(err => alert(err));
  }

  ngOnInit(
  ) {}

}
