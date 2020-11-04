import
{
  HK_BUFFER_TARGET,
  HK_DATA_TYPE,
  HK_DATA_USAGE,
  HK_GRAPHICS_CAPABILITY,
  HK_PRIMITIVE_TYPE,
  HK_PROGRAM_PARAMETER,
  HK_SHADER_PARAMETER,
  HK_SHADER_TYPE
} from "../../../utilities/hkEnums";

export class HkWebGLEnums
{
  static PrimitiveType(_type: HK_PRIMITIVE_TYPE)
    : number
  {
    switch (_type)
    {
      case HK_PRIMITIVE_TYPE.kLineLoop:
        return WebGLRenderingContext.LINE_LOOP;

      case HK_PRIMITIVE_TYPE.kLines:
        return WebGLRenderingContext.LINES;

      case HK_PRIMITIVE_TYPE.kLineStrip:
        return WebGLRenderingContext.LINE_STRIP;

      case HK_PRIMITIVE_TYPE.kPoints:
        return WebGLRenderingContext.POINTS;

      case HK_PRIMITIVE_TYPE.kTriangleFan:
        return WebGLRenderingContext.TRIANGLE_FAN;

      case HK_PRIMITIVE_TYPE.kTriangles:
        return WebGLRenderingContext.TRIANGLES;

      case HK_PRIMITIVE_TYPE.kTriangleStrip:
        return WebGLRenderingContext.TRIANGLE_STRIP;

      default:
        throw new Error("Primitive type not implemented.");
    }
  }

  static GraphicsCapability(_type: HK_GRAPHICS_CAPABILITY)
    : number {
    switch (_type)
    {
      case HK_GRAPHICS_CAPABILITY.kBlend:
        return WebGLRenderingContext.BLEND;

      case HK_GRAPHICS_CAPABILITY.kCullFace:
        return WebGLRenderingContext.CULL_FACE;

      case HK_GRAPHICS_CAPABILITY.kDepthTest:
        return WebGLRenderingContext.DEPTH_TEST;

      case HK_GRAPHICS_CAPABILITY.kDither:
        return WebGLRenderingContext.DITHER;

      case HK_GRAPHICS_CAPABILITY.kPolygonOffsetFill:
        return WebGLRenderingContext.POLYGON_OFFSET_FILL;

      case HK_GRAPHICS_CAPABILITY.kSampleAlphaToCoverage:
        return WebGLRenderingContext.SAMPLE_ALPHA_TO_COVERAGE;

      case HK_GRAPHICS_CAPABILITY.kSampleCoverage:
        return WebGLRenderingContext.SAMPLE_COVERAGE;

      case HK_GRAPHICS_CAPABILITY.kScissorTest:
        return WebGLRenderingContext.SCISSOR_TEST;

      case HK_GRAPHICS_CAPABILITY.kStencilTest:
        return WebGLRenderingContext.STENCIL_TEST;

      default:
        throw new Error("Graphics capability type not implemented.");
    }
  }

  static BufferType(_type: HK_BUFFER_TARGET)
    : number
  {
    switch (_type)
    {
      case HK_BUFFER_TARGET.kArray:
        return WebGLRenderingContext.ARRAY_BUFFER;

      case HK_BUFFER_TARGET.kElementArray:
        return WebGLRenderingContext.ELEMENT_ARRAY_BUFFER;

      default:
        throw new Error("Buffer type not implemented.");
    }
  }

  static DataUsage(_type: HK_DATA_USAGE)
    : number
  {
    switch (_type)
    {
      case HK_DATA_USAGE.kStaticDraw:
        return WebGLRenderingContext.STATIC_DRAW;

      case HK_DATA_USAGE.kDynamicDraw:
        return WebGLRenderingContext.DYNAMIC_DRAW;

      case HK_DATA_USAGE.kStreamDraw:
        return WebGLRenderingContext.STREAM_DRAW;

      default:
        throw new Error("Data usage type not implemented.");
    }
  }

  static ShaderType(_type: HK_SHADER_TYPE)
    : number
  {
    switch (_type)
    {
      case HK_SHADER_TYPE.kFragment:
        return WebGLRenderingContext.FRAGMENT_SHADER;

      case HK_SHADER_TYPE.kVertex:
        return WebGLRenderingContext.VERTEX_SHADER;

      default:
        throw new Error("Shader type not implemented.");
    }
  }

  static DataType(_type: HK_DATA_TYPE)
    : number
  {
    switch (_type)
    {
      case HK_DATA_TYPE.kByte:
        return WebGLRenderingContext.BYTE;

      case HK_DATA_TYPE.kFloat:
        return WebGLRenderingContext.FLOAT;

      case HK_DATA_TYPE.kHalfFloat:
        return WebGLRenderingContext.FLOAT;

      case HK_DATA_TYPE.kShort:
        return WebGLRenderingContext.SHORT;

      case HK_DATA_TYPE.kUnsignedByte:
        return WebGLRenderingContext.UNSIGNED_BYTE;

      case HK_DATA_TYPE.kUnsignedShort:
        return WebGLRenderingContext.UNSIGNED_SHORT;

      case HK_DATA_TYPE.kUnsignedInt:
        return WebGL2RenderingContext.UNSIGNED_INT;

      default:
        throw new Error("Data type not implemented.");
    }
  }

  static ShaderParameter(_type: HK_SHADER_PARAMETER)
    : number
  {
    switch (_type) {
      case HK_SHADER_PARAMETER.kCompileStatus:
        return WebGLRenderingContext.COMPILE_STATUS;

      case HK_SHADER_PARAMETER.kDeleteStatus:
        return WebGLRenderingContext.DELETE_STATUS;

      default:
        throw new Error("Shader Parameter not implemented.");
    }
  }

  static ProgramParameter(_type: HK_PROGRAM_PARAMETER)
    : number
  {
    switch (_type) {
      case HK_PROGRAM_PARAMETER.kDeleteStatus:
        return WebGLRenderingContext.DELETE_STATUS;

      case HK_PROGRAM_PARAMETER.kLinkStatus:
        return WebGLRenderingContext.LINK_STATUS;

      case HK_PROGRAM_PARAMETER.kValidateStatus:
        return WebGLRenderingContext.VALIDATE_STATUS;

      default:
        throw new Error("Shader type not implemented.");
    }
  }
}