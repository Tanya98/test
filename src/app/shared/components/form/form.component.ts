import {Component, OnInit} from '@angular/core';
import {UserService} from "../../http/services/user.service";
import {UserCreateModel} from "../../../domaim/user/create/user-create.model";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  public user;
  public newUser;
  public form;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    this.user = this.userService.subject.subscribe(v => console.log(v));

    if (this.user !== undefined) {
      this.form = {
        id: this.user.id,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        role: this.user.role,
      }
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
  }

  add(value) {
    debugger;
    const newUser: UserCreateModel = {
      id: value.id,
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      role: value.role,
    };
    this.userService.createUser(newUser);
  }

}
