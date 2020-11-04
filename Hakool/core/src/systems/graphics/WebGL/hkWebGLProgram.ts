import { HkIProgram } from "../hkIProgram";
import { HkIShader } from "../hkIShader";

export class HkWebGLProgram
  implements HkIProgram
{
  static Create(_context: WebGLRenderingContext)
    : HkWebGLProgram
  {
    const program: HkWebGLProgram = new HkWebGLProgram();

    program._m_program = _context.createProgram();

    return program;
  }

  getProgram<T>()
    : T
  {
    return this._m_program as T;
  }

  setVertexShader(_shader: HkIShader)
    : void
  {

    this._m_vertex = _shader;

    return;

  }

  getVertexShader(_shader: HkIShader)
    : HkIShader
  {

    return this._m_vertex;

  }

  setFragmentShader(_shader: HkIShader)
    : void
  {

    this._m_fragment = _shader;

    return;

  }

  getFragmentShader(_shader: HkIShader)
    : HkIShader
  {

    return this._m_fragment;

  }

  private _m_program: WebGLProgram;

  private _m_fragment: HkIShader;

  private _m_vertex: HkIShader;

}