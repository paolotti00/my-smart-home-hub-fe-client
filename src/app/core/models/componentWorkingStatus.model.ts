import {ComponentWorkingStatusInModel} from "./componentWorkingStatusIn.model";
import {ComponentWorkingStatusOutModel} from "./componentWorkingStatusOut.model";
import {OnOffStatusEnum} from "../enums/onOffStatus.enum";

export interface ComponentWorkingStatusModel {
  in:ComponentWorkingStatusInModel;
  out:ComponentWorkingStatusOutModel;
  powerStatus:OnOffStatusEnum;

}
