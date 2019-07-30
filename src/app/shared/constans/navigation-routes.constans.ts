import { UserCreateModel } from 'src/app/domaim/user/create/user-create.model';

export const NavigationRoutes = {
    User: {
        List(): string {
            return `users`;
        },
        Details(entityId: number): string {
            return `users/${entityId}`;
        },
        Edit(user): string {
            return `users/${user.id}`;
        },
        Create(): string {
        //   debugger;
            return `users`;
        },
        Delete(entityId: number): string {
            return `users/${entityId}`;
        },
    }
}
