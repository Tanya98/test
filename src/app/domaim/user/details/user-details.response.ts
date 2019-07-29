import { ApiResponse } from 'src/app/infrastructure/api-models/api.response';
import { UserDetailsModel } from './user-details.model';

export class UserDetailsResponse extends ApiResponse<UserDetailsModel> {
    public firstName: string;
    public lastName: string;
    public email: string;
    public role: string;
}
