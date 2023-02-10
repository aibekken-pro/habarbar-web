export interface ICreateUser {
  email: string,
  phoneNumber: string,
  password: string,
  displayName: string,
  photoURL?: string,
}

export interface IGetUser {
  uid: string,
  email: string,
  phoneNumber: string,
  displayName: string,
  photoURL?: string,
}

export interface ISignInUser {
  email: string,
  password: string,
  returnSecureToken: boolean
}

export interface ILoggedUser {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  profilePicture: string;
  refreshToken: string;
  registered: boolean;
}

export type IUpdateUser = Partial<ICreateUser>;
