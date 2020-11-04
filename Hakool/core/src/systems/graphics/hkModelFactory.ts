import { HkModel } from "./hkModel";

export class HkModelFactory
{
  static CreateCube()
    : HkModel
  {
    const model: HkModel = new HkModel();



    return model;
  }
}