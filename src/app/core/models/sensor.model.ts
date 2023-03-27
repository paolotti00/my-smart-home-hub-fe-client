import {SensorTypeEnum} from "../enums/sensorType.enum";

export interface SensorModel {
  id: string;
  type: SensorTypeEnum;
  value: number;
  unit: string;
  timestamp: string;
}
