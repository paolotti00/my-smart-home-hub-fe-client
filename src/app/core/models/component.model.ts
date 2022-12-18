import {OnlineStatusEnum} from "./enums/onlineStatus.enum";
import {ComponentTypeEnum} from "./enums/componentType.enum";
import {ComponentWorkingStatusModel} from "./componentWorkingStatus.model";

export interface ComponentModel {
  description:string;
  id:string;
  status:OnlineStatusEnum;
  type:ComponentTypeEnum;
  workingStatus:ComponentWorkingStatusModel;
}
