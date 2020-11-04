import { HkMesh } from "./hkMesh";

export class HkModel
{

  init()
    : void
  {
    this._m_aMesh = new Array<HkMesh>();
    return;
  }



  private _m_aMesh: Array<HkMesh>;
}