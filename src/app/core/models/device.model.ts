import {NetworkDataModel} from "./networkData.model";
import {InstallationStatusEnum} from "../enums/installationStatus.enum";
import {OnlineStatusEnum} from "../enums/onlineStatus.enum";
import {ExtraActionModel} from "./extraAction.model";
import {SensorModel} from "./sensor.model";

export interface DeviceModel {
  thingId: string;
  usersOwnersIds: string[];
  roomId: string;
  networkData: NetworkDataModel;
  name: string;
  sensors: SensorModel[];
  connectionStatus: string;
  installationStatus: string;
  registrationDate: string;
  activationDate: string;
  brand: string;
  firmwareVersion: string;
  leds: Map<number, number[]>;
  supportedExtraActions: ExtraActionModel[];
  connectionMode: string[];
  supportedProtocols: string[];

}
