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
        console.log(data)
        this.userList = JSON.parse(data);
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.userList = res.message;
          } catch {
            this.userList = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.userList = `Error with status: ${err.status}`;
        }
      }
    });
  }

  getRoleFrmUsrRecord(usrRecord:string){
    return JSON.parse(usrRecord);
  }
}
