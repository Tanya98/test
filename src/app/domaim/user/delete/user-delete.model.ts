import { UserDeleteViewModel } from './user-delete.view-model';

export class UserDeleteModel extends UserDeleteViewModel {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public role: string;
}