import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ICreateUser, IGetUser, ILoggedUser, ISignInUser, IUpdateUser,
} from 'src/app/shared-lib';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRequestsService {
  private readonly usersEndpoint = '/users';
  private readonly authEndpoints = {
    SIGN_IN: 'signin',
    SIGN_UP: 'signup',
  };

  constructor(private http: HttpClient) { }

  createUser(body: ICreateUser): Observable<string> {
    return this.http.post<string>(`${[this.usersEndpoint, this.authEndpoints.SIGN_UP].join('/')}`, body);
  }

  signIn(user: ISignInUser): Observable<ILoggedUser> {
    return this.http.post<ILoggedUser>(`${[this.usersEndpoint, this.authEndpoints.SIGN_IN].join('/')}`, { ...user, returnSecureToken: true });
  }

  updateUser(updatedData: IUpdateUser, userId: string): Observable<ILoggedUser> {
    return this.http.put<ILoggedUser>(`${[this.usersEndpoint, userId].join('/')}`, updatedData);
  }

  deleteUser(userId: string): Observable<string> {
    return this.http.delete<string>(`${[this.usersEndpoint, userId].join('/')}`);
  }

  getUserById(userId: string): Observable<IGetUser> {
    return this.http.get<IGetUser>(`${[this.usersEndpoint, userId].join('/')}`);
  }
}
