import {DeviceActionSchemaTypeEnum} from "./enums/deviceActionSchemaType.enum";

export interface DeviceActionSchemaModel{
  name:string;
  description:string;
  deviceActionSchemaTypeEnum:DeviceActionSchemaTypeEnum;
}
