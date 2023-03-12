import {NetworkDataModel} from "./networkData.model";
import {ComponentModel} from "./component.model";
import {InstallationStatusEnum} from "../enums/installationStatus.enum";
import {OnlineStatusEnum} from "../enums/onlineStatus.enum";
import {ActionModel} from "./action.model";

export interface DeviceModel {
  id:string;
  thingId:string;
  usersOwnersIds:string[];
  name:string;
  activationDate:string;
  creationDate:string;
  registrationDate:string;
  firmwareVersion:string;
  brand: string; // we don't use enum because we don't do logic on this field
  components:ComponentModel[];
  installationStatus:InstallationStatusEnum;
  networkData:NetworkDataModel;
  status:OnlineStatusEnum;
  supportedActions: ActionModel[];

}
