import { User } from "./User";

export type AuthType = {
  user: User | null;
  signIn: (user: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
  message: string;
  accessToken: string;
};
