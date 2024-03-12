import { Component } from '@angular/core';
import { UserService } from '../../../Services/User.service';
import { User } from '../../../Models/Users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
 
})
export class UserListComponent {
  constructor(private userService: UserService){

  }
  userList = this.userService.GetAllUsers();

  // ShowUserDetails(user: User){
  //   this.userService.OnShowUserDetails(user);
  // }
}
