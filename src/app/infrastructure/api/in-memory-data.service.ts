import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {UserCreateModel} from "../../domaim/user/create/user-create.model";

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const users: UserCreateModel[] = [
      {
        id: 1,
        firstName: 'Bob',
        lastName: 'Armstrong',
        email: 'bob24@gmail.com',
        role: 'admin'
      },
      {
        id: 2,
        firstName: 'Jo',
        lastName: 'Doe',
        email: 'jo12doe@gmail.com',
        role: 'patient'
      },
      {
        id: 3,
        firstName: 'Henry',
        lastName: 'Smith',
        email: 'h_smith@gmail.com',
        role: 'user'
      },
      {
        id: 4,
        firstName: 'Sam',
        lastName: 'Smith',
        email: 'sam_2903@gmail.com',
        role: 'user'
      },
      {
        id: 5,
        firstName: 'Joe',
        lastName: 'Doe',
        email: 'joe12_14@gmail.com',
        role: 'patient'
      }
    ];
    return {users}
  }
}

