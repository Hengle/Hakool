/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary 
 *
 * @file HkWebGLContext.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-11-2020
 */

import { HkColor } from "../../../utilities/hkColor";
import
{
  HK_BUFFER_TARGET,
  HK_DATA_TYPE,
  HK_DATA_USAGE,
  HK_GRAPHICS_CAPABILITY,
  HK_GRAPHICS_VERSION,
  HK_PRIMITIVE_TYPE,
  HK_PROGRAM_PARAMETER,
  HK_SHADER_PARAMETER,
  HK_SHADER_TYPE
} from "../../../utilities/hkEnums";
import { HkVector4 } from "../../../utilities/math/hkVector4";
import { HkIBuffer } from "../hkIBuffer";
import { HkIContext } from "../hkIContext";
import { HkWebGLBuffer } from "./hkWebGLBuffer";
import { HkWebGLIndexBuffer } from "./hkWebGLIndexBuffer";
import { HkWebGLEnums } from "./hkWebGLEnums";
import { HkWebGLVertexBuffer } from "./hkWebGLVertexBuffer";
import { HkIShader } from "../hkIShader";
import { HkWebGLShader } from "./hkWebGLShader";
import { HkIProgram } from "../hkIProgram";
import { HkWebGLProgram } from "./hkWebGLProgram";
import { HkIUniformLocation } from "../hkIUniformLocation";
import { HkWebGLUniformLocation } from "./hkWebGLUniformLocation";

export class HkWebGLContext
  implements HkIContext
{
  
  /****************************************************/
  /* Public                                           */
/****************************************************/

  
  init(_context: WebGLRenderingContext, _apiVersion: HK_GRAPHICS_VERSION)
  : void
  {

    this._m_context = _context;
    this._m_apiVersion = _apiVersion;

    return;

  }

  enable(_capability: HK_GRAPHICS_CAPABILITY)
  : void
  {

    this._m_context.enable(HkWebGLEnums.GraphicsCapability(_capability));

    return;

  }

  drawElements
  (
    _mode: HK_PRIMITIVE_TYPE,
    _count: number,
    _type: HK_DATA_TYPE,
    _offset: number
  )
  : void
  {

    this._m_context.drawElements
    (
      HkWebGLEnums.PrimitiveType(_mode),
      _count,
      HkWebGLEnums.DataType(_type),
      _offset
    );

    return;

  }

  createShader(_type: HK_SHADER_TYPE)
    : HkIShader
  {
    return HkWebGLShader.Create(this._m_context, _type);
  }

  shaderSource(_shader: HkIShader, _source: string)
    : void
  {
    this._m_context.shaderSource(_shader.getShader<WebGLShader>(), _source);
    return;
  }

  compileShader(_shader: HkIShader)
    : void
  {
    this._m_context.compileShader(_shader.getShader<WebGLShader>());
  }

  getShaderParameter(_shader: HkIShader, _parameter: HK_SHADER_PARAMETER)
    : boolean
  {
    return this._m_context.getShaderParameter
    (
      _shader.getShader<WebGLShader>(),
      HkWebGLEnums.ShaderParameter(_parameter)
    );
  }

  getShaderType(_shader: HkIShader)
    : HK_SHADER_TYPE
  {

    const shaderType: number = this._m_context.getShaderParameter
    (
      _shader.getShader<WebGLShader>(),
      WebGLRenderingContext.SHADER_TYPE
    );

    if (shaderType === WebGLRenderingContext.FRAGMENT_SHADER)
    {

      return HK_SHADER_TYPE.kFragment;

    }
    else
    {

      return HK_SHADER_TYPE.kVertex;

    }

  }

  getShaderInfoLog(_shader: HkIShader)
    : string
  {

    return this._m_context.getShaderInfoLog(_shader.getShader<WebGLShader>());

  }

  createProgram()
    : HkIProgram
  {

    return HkWebGLProgram.Create(this._m_context);

  }

  attachShader(_program: HkIProgram, _shader: HkIShader)
    : void
  {

    this._m_context.attachShader
    (
      _program.getProgram<WebGLProgram>(),
      _shader.getShader < WebGLShader>()
    );

    return;

  }

  linkProgram(_program: HkIProgram)
    : void
  {

    this._m_context.linkProgram
    (
      _program.getProgram<WebGLProgram>()
    );

    return;

  }

  useProgram(_program: HkIProgram)
    : void
  {

    this._m_context.useProgram
    (
      _program.getProgram<WebGLProgram>()
    );

    return;

  }

  getProgramParameter(_program: HkIProgram, _parameter: HK_PROGRAM_PARAMETER)
    : boolean
  {

    return this._m_context.getProgramParameter
    (
      _program.getProgram<WebGLProgram>(),
      HkWebGLEnums.ProgramParameter(_parameter)
    );

  }

  getAttribLocation(_program: HkIProgram, _name: string)
    : number
  {

    return this._m_context.getAttribLocation
    (
      _program.getProgram<WebGLProgram>(),
      _name
    );

  }

  enableVertexAtrribArray(_index: number)
    : void
  {

    this._m_context.enableVertexAttribArray(_index);
    return;

  }

  vertexAtrribPointer
  (
    _index: number,
    _size: number,
    _type: HK_DATA_TYPE,
    _normalized: boolean,
    _stride: number,
    _offset: number
  )
  : void
  {

    this._m_context.vertexAttribPointer
    (
      _index,
      _size,
      HkWebGLEnums.DataType(_type),
      _normalized,
      _stride,
      _offset
    );

    return;
  }

  getUniformLocation
  (
    _program: HkIProgram,
    _name: string
  )
  : HkIUniformLocation
  {

    const uniform = this._m_context.getUniformLocation
    (
      _program.getProgram<WebGLProgram>(),
      _name
    )


    if (uniform === null)
    {
      // TODO Log ERROR

      throw new Error("Cant Get Uniform Location: " + _name);

    }

    return new HkWebGLUniformLocation(uniform);

  }

  uniformMatrix4fv
  (
    _location: HkIUniformLocation,
    _transpose: boolean,
    _data: Float32List,
    _srcOffset?: number,
    _srcLength?: number
  )
  : void
  {

    this._m_context.uniformMatrix4fv
    (
      _location.GetUniformLocation<WebGLUniformLocation>(),
      _transpose,
      _data
    );

    return;

  }

  /**
   * 
   * */
  createBuffer()
  : HkIBuffer
  {

    const buffer = HkWebGLBuffer.Create(this._m_context);

    return buffer;

  }

  /**
   * 
   * */
  createIndexBuffer()
  : HkIBuffer
  {

    const buffer = HkWebGLIndexBuffer.Create(this._m_context);

    return buffer;

  }

  /**
   * 
   * */
  createVertexBuffer()
  : HkIBuffer
  {

    const buffer = HkWebGLVertexBuffer.Create(this._m_context);

    return buffer;

  }

  /**
   * 
   * @param _type
   * @param _buffer
   */
  bindBuffer(_type: HK_BUFFER_TARGET, _buffer: HkIBuffer)
  : void
  {

    this._m_context.bindBuffer
    (
      HkWebGLEnums.BufferType(_type),
      _buffer.getBuffer<WebGLBuffer>()
    );

    return;
  }

  bufferData(_type: HK_BUFFER_TARGET, _data: Float32Array, _usage: HK_DATA_USAGE): void;
  bufferData(_type: HK_BUFFER_TARGET, _data: Uint16Array, _usage: HK_DATA_USAGE): void;

  bufferData
  (
    _type: HK_BUFFER_TARGET,
    _data: Float32Array | Uint16Array,
    _usage: HK_DATA_USAGE
  )
  : void
  {

    this._m_context.bufferData
    (
      HkWebGLEnums.BufferType(_type),
      _data,
      HkWebGLEnums.DataUsage(_usage)
    );

    return;
  }

  /**
   * 
   * */
  getContext<T>()
  : T 
  {

    return (this._m_context as unknown) as T;

  }

  /**
   * 
   * */
  getAPIVersion()
  : HK_GRAPHICS_VERSION 
  {

    return this._m_apiVersion;

  }

  /**
   * 
   * @param _color
   */
  setClearColor(_color: HkColor)
  : void
  {

    const color: HkVector4 = _color.color;

    this._m_context.clearColor(color.x, color.y, color.z, color.w);

    return;

  }

  /**
   * 
   * */
  clear()
  : void
  {

    const context = this._m_context;

    context.clear(context.COLOR_BUFFER_BIT | context.DEPTH_BUFFER_BIT);

    return;

  }

  /****************************************************/
  /* Private                                          */
  /****************************************************/
  
  /**
   * The API Version of WebGL.
   */
  private _m_apiVersion : HK_GRAPHICS_VERSION;

  /**
   * The WebGL Rendering Context.
   */
  private _m_context : WebGLRenderingContext;

}