import { HK_SHADER_PARAMETER, HK_SHADER_TYPE } from "../../utilities/hkEnums";
import { HkIContext } from "./hkIContext";
import { HkIShader } from "./hkIShader";

export class HkShaderFactory
{
  static CreateDefaultVertex(_context: HkIContext)
    : HkIShader
  {
    const source: string =

    "#version 100\n"

    +"attribute vec3 position;\n"
    +"attribute vec4 color;\n"

    +"varying vec4 fcolor;\n"

    +"uniform mat4 modelMatrix;\n"
    +"uniform mat4 viewMatrix;\n"
    +"uniform mat4 projectionMatrix;\n"

    +"void main()\n"
    +"{\n"
    +"gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1);\n"
    +"fcolor = color;\n"
    +"}\n";

    const shader: HkIShader = _context.createShader(HK_SHADER_TYPE.kVertex);

    _context.shaderSource(shader, source);

    _context.compileShader(shader);

    if (!_context.getShaderParameter(shader, HK_SHADER_PARAMETER.kCompileStatus))
    {
      throw new Error
        (
          "A shader compiling error occurred : "
          + _context.getShaderInfoLog(shader)
        );
    }

    return shader;
  }

  static CreateDefaultFragment(_context: HkIContext)
    : HkIShader
  {
    const source: string =

      "#version 100\n"
      +"precision mediump float;\n"

      +"uniform vec4 fcolor;\n"

      +"void main()\n"
      +"{\n"
      +"gl_FragColor = fcolor;\n"
      +"}\n";

    const shader: HkIShader = _context.createShader(HK_SHADER_TYPE.kFragment);

    _context.shaderSource(shader, source);

    _context.compileShader(shader);

    if (!_context.getShaderParameter(shader, HK_SHADER_PARAMETER.kCompileStatus)) {
      throw new Error
        (
          "A shader compiling error occurred : "
          + _context.getShaderInfoLog(shader)
        );
    }

    return shader;
  }
}