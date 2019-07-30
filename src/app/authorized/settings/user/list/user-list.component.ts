import {Component, OnInit} from '@angular/core';
import {UserService} from 'src/app/shared/http/services/user.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent<UserListResponse, UserListItemViewModel> implements OnInit {

  public usersList$: Observable<any>;


  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.usersList$ = this.userService.getList();
  }

  // delete(value) {
  //   debugger;
  //   let id: number = parseInt(value.id);
  //   this.userService.deleteUser(id);
  // }

  // edit(value) {
  //   // debugger;
  //   // return this.userService.subject.next(value);
  // }
}

