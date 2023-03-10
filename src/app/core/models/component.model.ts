
import {OnlineStatusEnum} from "../enums/onlineStatus.enum";
import {ComponentTypeEnum} from "../enums/componentType.enum";

export interface ComponentModel {
  description:string;
  id:string;
  connectionStatus:OnlineStatusEnum;
  type:ComponentTypeEnum;
}
