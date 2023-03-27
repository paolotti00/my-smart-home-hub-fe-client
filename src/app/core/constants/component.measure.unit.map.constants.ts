import {SensorTypeEnum} from "../enums/sensorType.enum";

export const ComponentMeasureUnitMapConstants: Map<SensorTypeEnum, string> = new Map([
  [SensorTypeEnum.LIGHT, '%'],
  [SensorTypeEnum.TEMPERATURE, '°'],
  [SensorTypeEnum.MIX, ''], // default
]);
