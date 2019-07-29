import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/http/services/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent<UserListResponse, UserListItemViewModel> implements OnInit {

  public usersList$: Observable<any>;
  public usersList;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.usersList$ = this.userService.getList();
  }
}

