import { Component, OnInit } from '@angular/core';
import { UserService } from "../../http/services/user.service";
// import { UserCreateModel } from "../../../domaim/user/create/user-create.model";
import { FormBuilder, Validators } from "@angular/forms";
import { UserListRequest } from 'src/app/domaim/user/list/user-list.request';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  public user;
  public newUser;
  public form;

  public usersList;
  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    // this.user = this.userService.subject.subscribe(v => console.log(v));

    // if (this.user !== undefined) {
    //   this.form = {
    //     id: this.user.id,
    //     firstName: this.user.firstName,
    //     lastName: this.user.lastName,
    //     email: this.user.email,
    //     role: this.user.role,
    //   }
    // }
  }

  getUsersList() {
    this.userService.getList().subscribe(data => {
      this.usersList = data;
    });
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });

    this.getUsersList();
  }

  add() {
    const newUser = {
      id: parseInt(this.form.value.id),
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      role: this.form.value.role,
    };
    this.userService.createUser(newUser).subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
    this.getUsersList();
  }

  edit(item) {
    this.form = this.formBuilder.group({
      id: [item.id, [Validators.required]],
      firstName: [item.firstName, [Validators.required]],
      lastName: [item.lastName, [Validators.required]],
      email: [item.email, [Validators.required]],
      role: [item.role, [Validators.required]]
    });

  }

  update(value) {
    this.userService.updateUser(value).subscribe(data => {
      console.log(data);
      this.getUsersList();
    });
  }

  delete(item) {
    const id = item.id;
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
      this.getUsersList();
    });
  }
}
