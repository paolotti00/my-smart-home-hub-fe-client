import {UserModel} from "./user.model";

export interface SharedObjectModel{
  currentUser:UserModel,
  isInitialized:boolean;
}
