import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faHeart, faLightbulb} from '@fortawesome/free-regular-svg-icons';
import {SensorTypeEnum} from "../enums/sensorType.enum";
import {
  faTemperatureFull,
  faMicrochip,
  faRainbow,
  faMagicWandSparkles,
  faQuoteRight,
  faCakeCandles,
  faPaintRoller
} from "@fortawesome/free-solid-svg-icons";

export const lightComponentActionIconsConstant: { [key: string]: IconDefinition } = {
  "rainbow_cycle": faRainbow,
  "twinkle": faMagicWandSparkles,
  "tow_color_fade": faQuoteRight,
  "candle": faCakeCandles,
  "simple_color": faPaintRoller,
  default: faLightbulb
}

export const ComponentIconsConstant: Map<SensorTypeEnum, IconDefinition> = new Map([
  [SensorTypeEnum.LIGHT, faLightbulb],
  [SensorTypeEnum.TEMPERATURE, faTemperatureFull],
  [SensorTypeEnum.MIX, faMicrochip], // default
]);
