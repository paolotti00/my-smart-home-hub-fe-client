import {Component} from "./component.model";
import {InstallationStatusEnum} from "./enums/installationStatus.enum";
import {NetworkData} from "./networkData.model";
import {ComponentWrapper} from "./componentWrapper.model";
import {OnlineStatusEnum} from "./enums/onlineStatus.enum";

export interface Device {
  id:string;
  name:string;
  activationDate:string;
  creationDate:string;
  registrationDate:string;
  firmwareVersion:string;
  brand: string; // we don't use enum because we don't do logic on this field
  components:ComponentWrapper;
  installationStatus:InstallationStatusEnum;
  networkData:NetworkData;
  status:OnlineStatusEnum;
  user:string;

}
