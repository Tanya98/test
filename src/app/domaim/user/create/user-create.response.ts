import { ApiResponse } from "../../../infrastructure/api-models/api.response";
import { UserCreateModel } from './user-create.model';

export class UserCreateResponse extends ApiResponse<UserCreateModel> {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public role: string;
}
