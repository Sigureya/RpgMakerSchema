import { BooleanAnnotation } from "./boolean";
import { Primitive_Numbers, Primitive_NumbersArray } from "./numbers";
import { Primitive_Strings, Primitive_StringsArray } from "./strings";

export type Primitive<T extends boolean | number | string> = boolean extends T
  ? BooleanAnnotation
  : T extends number
  ? Primitive_Numbers
  : T extends string
  ? Primitive_Strings
  : never;
{
}

export type PrimitiveArray<T extends number[] | string[]> = T extends number[]
  ? Primitive_NumbersArray
  : T extends string[]
  ? Primitive_StringsArray
  : never;
{
}
