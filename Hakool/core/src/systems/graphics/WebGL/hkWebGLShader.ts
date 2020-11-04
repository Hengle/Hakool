import { HK_SHADER_TYPE } from "../../../utilities/hkEnums";
import { HkIShader } from "../hkIShader";
import { HkWebGLEnums } from "./hkWebGLEnums";

export class HkWebGLShader
  implements HkIShader
{
  static Create(_context: WebGLRenderingContext, _type: HK_SHADER_TYPE)
    : HkWebGLShader
  {
    const shader = new HkWebGLShader();
    shader._m_shader = _context.createShader(HkWebGLEnums.ShaderType(_type));
    return shader;
  }

  getShader<T>()
    : T
  {
    return this._m_shader as T;
  }

  private _m_shader: WebGLShader;  
}