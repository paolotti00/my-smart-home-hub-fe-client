import {ResultStatusEnum} from "../enums/resultStatus.enum";

export interface BaseResponseDto<T> {
  errorCode: string;
  message: string;
  resultStatus: ResultStatusEnum;
  data: T;
}
