import {MeasurementsTypeEnum} from "../enums/measurementsType.enum";

export interface MeasurementModel {
  date:string;
  value:number;
  unit:string;
  type:MeasurementsTypeEnum;
}
