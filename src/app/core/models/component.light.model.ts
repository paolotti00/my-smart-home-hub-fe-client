import {ComponentModel} from "./component.model";
import {ActionModel} from "./action.model";
import {LedModel} from "./led.model";

export interface ComponentLightModel extends ComponentModel  {
  leds: Map<number, LedModel>;
  action: ActionModel;
}
