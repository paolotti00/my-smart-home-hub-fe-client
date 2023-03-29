import {FieldModel} from "./field.model";
import {SensorTypeEnum} from "../enums/sensorType.enum";

export interface ExtraActionModel {
  name: string;
  fields: FieldModel[];
  categories: SensorTypeEnum[];
}
