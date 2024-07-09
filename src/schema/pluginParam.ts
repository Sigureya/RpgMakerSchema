import { ParameterBase } from "./structBase";
import { Parameter } from "./struct";

export interface PluginBase {
  help: string;
  base: string[];
  orderAfter: string[];
  orderBefore: string[];
  params: ParameterBase;
}

export interface PluginParam<Params extends object> extends PluginBase {
  params: Parameter<Params>;
}
