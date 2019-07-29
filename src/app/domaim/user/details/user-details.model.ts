import { UserDetailsViewModel } from './user-details.view-model';

export class UserDetailsModel extends UserDetailsViewModel {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public role: string;
}
