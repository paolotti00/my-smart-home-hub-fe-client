
import {ComponentTypeEnum} from "../enums/componentType.enum";
import {OnOffStatusEnum} from "../enums/onOffStatus.enum";

export interface ComponentModel {
  description:string;
  id:string;
  status:OnOffStatusEnum;
  type:ComponentTypeEnum;
}
