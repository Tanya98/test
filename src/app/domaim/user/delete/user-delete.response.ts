import { ApiResponse } from 'src/app/infrastructure/api-models/api.response';
import { UserDeleteModel } from './user-delete.model';

export class UserDeleteResponse extends ApiResponse<UserDeleteModel>{
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public role: string;
}