import { HkIShader } from "./hkIShader";

export interface HkIProgram
{
  getProgram<T>()
    : T;

  setVertexShader(_shader: HkIShader)
    : void;

  getVertexShader(_shader: HkIShader)
    : HkIShader;

  setFragmentShader(_shader: HkIShader)
    : void;

  getFragmentShader(_shader: HkIShader)
    : HkIShader;
}