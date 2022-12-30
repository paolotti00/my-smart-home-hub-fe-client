import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faHeart, faLightbulb} from '@fortawesome/free-regular-svg-icons';
import {ComponentTypeEnum} from "../enums/componentType.enum";
import {faTemperatureFull, faMicrochip} from "@fortawesome/free-solid-svg-icons";

export const lightComponentActionIconsConstant : {[key:string]:IconDefinition} = {
  romantic:faHeart,
  default:faLightbulb
}

export const ComponentIconsConstant: Map<ComponentTypeEnum, IconDefinition> = new Map([
  [ComponentTypeEnum.LIGHT, faLightbulb],
  [ComponentTypeEnum.SENSOR_TEMPERATURE, faTemperatureFull],
  [ComponentTypeEnum.MIX, faMicrochip], // default
]);
