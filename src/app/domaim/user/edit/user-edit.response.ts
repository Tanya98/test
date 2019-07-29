import { ApiResponse } from 'src/app/infrastructure/api-models/api.response';
import { UserEditModel } from './user-edit.model';

export class UserEditResponse extends ApiResponse<UserEditModel>{
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public role: string;
}