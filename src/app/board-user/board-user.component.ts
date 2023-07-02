import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  userList : any = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe({
      next: data => {
        this.userList = JSON.parse(data);
       // console.log(data)
      },
      error: err => {
            this.userList = null;
      }
    });
  }

  getRoleFrmUsrRecord(roleArray:any){
    //console.log(roleArray)
    roleArray = JSON.parse(roleArray);
    var roleDesc = "";
    for (var role of roleArray) {
      roleDesc = roleDesc + role.roleDesc;
    }
    return roleDesc;
  }
}
