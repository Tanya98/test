import {RoleCreateModel} from "../../role/create/role-create.model";

export interface UserCreateInterface {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  role: RoleCreateModel,
}
