import { UserCreateModel } from 'src/app/domaim/user/create/user-create.model';

export const NavigationRoutes = {
    User: {
        List(): string {
            return `users`;
        },
        Details(entityId: number): string {
            return `users/${entityId}`;
        },
        Edit(entityId: number): string {
            return `users/${entityId}`;
        },
        Create(user: UserCreateModel): string {
            return `users/${user}`;
        },
        Delete(entityId: number): string {
            return `users/${entityId}`;
        },
    }
}