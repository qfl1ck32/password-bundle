import "@kaviar/security-bundle";
import { IPasswordAuthenticationStrategy } from "./defs";

declare module "@kaviar/security-bundle" {
  export interface IUser {
    password: IPasswordAuthenticationStrategy;
  }
}
