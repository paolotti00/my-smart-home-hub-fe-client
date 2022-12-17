import {ComponentWorkingStatusIn} from "./componentWorkingStatusIn.model";
import {ComponentWorkingStatusOut} from "./componentWorkingStatusOut.model";
import {OnOffStatusEnum} from "./enums/onOffStatus.enum";

export interface ComponentWorkingStatus{
  in:ComponentWorkingStatusIn;
  out:ComponentWorkingStatusOut;
  powerStatus:OnOffStatusEnum;

}
