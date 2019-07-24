import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user-model';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<User>;

  constructor(
    private userService: UserService
  ) {
    this.users = this.userService.getUsers();
  }

  ngOnInit() {
  }

}