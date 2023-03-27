import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DeviceUtilityService {

  constructor() { }
  getRgbArrayFromRgbString(rgbString: string):string[]{
    return rgbString.split(",");
  }
  getColorWholeDevice(leds: any): number[]{
    //todo leds["-1"] should be leds.get(-1) as a map , and leds:any should be leds: Map<number, LedModel>.
    // but in this case i have . get is not defined like if leds is considered a generic object and not a map
    let toReturn:number[] = [];
    if (leds){
      let l:any = leds[-1]
      if(l != undefined){
        toReturn = l
      }

    }
    return toReturn
  }
}
