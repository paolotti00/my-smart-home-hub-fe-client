import {ComponentTypeEnum} from "../enums/componentType.enum";

export const ComponentMeasureUnitMapConstants: Map<ComponentTypeEnum, string> = new Map([
  [ComponentTypeEnum.LIGHT, '%'],
  [ComponentTypeEnum.SENSOR_HEAT, '°'],
  [ComponentTypeEnum.MIX, ''], // default
]);
