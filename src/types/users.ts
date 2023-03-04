export type Id = number;
export type Err = any;

export interface IUser {
  id: Id;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IPost {
  userId: Id;
  id: Id;
  title: string;
  body: string;
}

export interface IAlbum {
  userId: Id;
  id: Id;
  title: string;
}

export interface IUsersState {
  isUsersLoading: boolean;
  isPostsLoading: boolean;
  isAlbumsLoading: boolean;
  users: IUser[] | null;
  posts: IPost[] | null;
  albums: IAlbum[] | null;
  usersError?: Err;
  postsError?: Err;
  albumsError?: Err;
}
