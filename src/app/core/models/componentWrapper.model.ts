import {ComponentModel} from "./component.model";

export interface ComponentWrapperModel {
  componentsList:ComponentModel[];
  numberOfComponents:Map<string,number>;
}
