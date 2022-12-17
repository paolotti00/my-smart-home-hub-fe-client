import {OnlineStatusEnum} from "./enums/onlineStatus.enum";
import {ComponentTypeEnum} from "./enums/componentType.enum";
import {ComponentWorkingStatus} from "./componentWorkingStatus.model";

export interface Component {
  description:string;
  id:string;
  status:OnlineStatusEnum;
  type:ComponentTypeEnum;
  workingStatus:ComponentWorkingStatus;
}
