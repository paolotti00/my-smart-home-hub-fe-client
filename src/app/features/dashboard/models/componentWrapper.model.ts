import {Component} from "./component.model";

export interface ComponentWrapper{
  componentsList:Component[];
  numberOfComponents:Map<string,number>;
}
