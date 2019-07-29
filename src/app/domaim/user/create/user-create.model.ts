import {RoleCreateModel} from "../../role/create/role-create.model";
import {UserCreateInterface} from "./user-create.interface";

export class UserCreateModel{
  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public role: string;
}
