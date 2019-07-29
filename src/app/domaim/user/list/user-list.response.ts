import { ListResponse } from './list.response';
import { UserListItemResponseModel } from './user-list-item.response-model';

export class UserListResponse extends ListResponse<UserListItemResponseModel[]> {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public role: string;
}
