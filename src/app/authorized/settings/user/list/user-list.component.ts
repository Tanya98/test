import {Component, OnInit} from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";

@Component({
  selector: './user-list-component',
  templateUrl: './user-list-component.component.html'
})

export class UserListComponent<UserListResponse, UserListItemViewModel> implements OnInit {

  // public userListForm;

  constructor(private formBuilder: FormBuilder) {
    // this.userListForm = this.formBuilder.group({
    //   id: ['', [Validators.required]],
    //   firstName: ['', [Validators.required]],
    //   lastName: ['', [Validators.required]],
    //   email: ['', [Validators.required]],
    //   role: ['', [Validators.required]],
    // })
  }

  ngOnInit() {

  }
}

