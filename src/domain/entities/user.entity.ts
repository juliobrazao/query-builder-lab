export class UserEntity {
  name: string;
  email: string;
  isAdmin: boolean;
  isActive: boolean;
  createdAt: number;

  constructor(params: Partial<UserEntity>) {
    Object.assign(this, params);
  }
}
