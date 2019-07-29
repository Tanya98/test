import { UserListItemViewModel } from "./user-list-item.view-model";
import { UserListResponse } from "./user-list.response";
import { IMapper } from "../../../infrastructure/types/i-mapper";
// import { UserListItemModel } from './user-list-item-model';

export class ToUserListViewModelMapper implements IMapper<UserListResponse, UserListItemViewModel[]> {

  handle(model: UserListResponse): UserListItemViewModel[] {
    return model.data.map((user) => {
      const viewItem = new UserListItemViewModel();
      viewItem.email = user.firstName;
      viewItem.role = user.lastName;
      return viewItem;
    });
  }
}
