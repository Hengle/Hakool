import { HK_PROGRAM_PARAMETER } from "../../utilities/hkEnums";
import { HkIContext } from "./hkIContext";
import { HkIProgram } from "./hkIProgram";
import { HkIShader } from "./hkIShader";
import { HkShaderFactory } from "./hkShaderFactory";

export class HkProgramFactory
{
  static CreateDefault(_context: HkIContext)
    : HkIProgram
  {
    const program: HkIProgram = _context.createProgram();

    const vShader: HkIShader = HkShaderFactory.CreateDefaultVertex(_context);

    const fShader: HkIShader = HkShaderFactory.CreateDefaultFragment(_context);

    _context.attachShader(program, vShader);

    program.setVertexShader(vShader);

    _context.attachShader(program, fShader);

    program.setFragmentShader(vShader);

    _context.linkProgram(program);

    if (!_context.getProgramParameter(program, HK_PROGRAM_PARAMETER.kLinkStatus))
    {
      throw new Error("Error linking shader.");
    }

    return program;
  }
}