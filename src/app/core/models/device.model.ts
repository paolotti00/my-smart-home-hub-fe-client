import {NetworkDataModel} from "./networkData.model";
import {ComponentWrapperModel} from "./componentWrapper.model";
import {InstallationStatusEnum} from "../enums/installationStatus.enum";
import {OnlineStatusEnum} from "../enums/onlineStatus.enum";

export interface DeviceModel {
  id:string;
  name:string;
  activationDate:string;
  creationDate:string;
  registrationDate:string;
  firmwareVersion:string;
  brand: string; // we don't use enum because we don't do logic on this field
  components:ComponentWrapperModel;
  installationStatus:InstallationStatusEnum;
  networkData:NetworkDataModel;
  status:OnlineStatusEnum;
  user:string;

}
