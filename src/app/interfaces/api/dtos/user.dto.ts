

export type roles = 'USER' | 'SUPER_USER' | 'DEVELOPER' | 'ADMIN';

export interface IUser {
  name: string;
  robloxId: string;
  userId:string;
  lastConnection: Date;
  createAt: Date;
  updateAt: Date;
  isActive: boolean;
  roles: roles[];
}
