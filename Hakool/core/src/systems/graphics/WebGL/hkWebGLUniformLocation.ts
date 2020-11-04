import { HkIUniformLocation } from "../hkIUniformLocation";

export class HkWebGLUniformLocation
  implements HkIUniformLocation
{

  constructor(_uniformLocation: WebGLUniformLocation)
  {

    this._m_uniformLocation = _uniformLocation;

    return;

  }


  GetUniformLocation<T>()
    : T
  {

    return this._m_uniformLocation as T;

  }

  private _m_uniformLocation: WebGLUniformLocation;

}