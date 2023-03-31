import {FieldTypeEnumEnum} from "../enums/fieldTypeEnum.enum";

export interface FieldModel {
  name: string;
  type: FieldTypeEnumEnum;
  min:number;
  max:number;
  mandatory: boolean;
  value: string;
}
