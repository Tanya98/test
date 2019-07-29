import {UserListItemViewModel} from "./user-list-item.view-model";
import {UserListResponse} from "./user-list.response";
import {IMapper} from "../../../infrastructure/types/i-mapper";

export class ToUserListViewModelMapper implements IMapper<UserListResponse, UserListItemViewModel[]> {

  handle(model: UserListResponse): UserListItemViewModel[] {
    return model.data.map((user) => {
      let viewItem = new UserListItemViewModel();
      viewItem.firstName = user.firstName;
      viewItem.lastName = user.lastName;
      return viewItem;
    });
  }
}
