import { IMapper } from 'src/app/infrastructure/types/i-mapper';
import { UserDetailsModel } from './user-details.model';
import { UserDetailsViewModel } from './user-details.view-model';

export class ToUserDetailsViewModelMapper implements IMapper<UserDetailsModel, UserDetailsViewModel> {

    handle(model: UserDetailsModel): UserDetailsViewModel {
        const viewModel = new UserDetailsViewModel();
        viewModel.firstName = model.firstName;
        viewModel.lastName = model.lastName;
        viewModel.email = model.email;
        viewModel.role = model.role;
        return viewModel;
    }
}
