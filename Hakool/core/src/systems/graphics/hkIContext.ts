/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary 
 *
 * @file HkIContext.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-11-2020
 */

import { HkColor } from "../../utilities/hkColor";
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
} from "../../utilities/hkEnums";
import { HkIBuffer } from "./hkIBuffer";
import { HkIProgram } from "./hkIProgram";
import { HkIShader } from "./hkIShader";
import { HkIUniformLocation } from "./hkIUniformLocation";

export interface HkIContext
{
  /****************************************************/
  /* Public                                           */
/****************************************************/

  drawElements
  (
    _mode: HK_PRIMITIVE_TYPE,
    _count: number,
    _type: HK_DATA_TYPE,
    _offset: number
  )
    : void;

  enable(_capability: HK_GRAPHICS_CAPABILITY)
    : void;

  createShader(type: HK_SHADER_TYPE)
    : HkIShader;

  shaderSource(_shader: HkIShader, _source: string)
    : void;

  compileShader(_shader: HkIShader)
    : void;

  createBuffer()
    : HkIBuffer;

  createIndexBuffer()
    : HkIBuffer;

  createVertexBuffer()
    : HkIBuffer;

  getShaderParameter(_shader: HkIShader, _parameter: HK_SHADER_PARAMETER)
    : boolean;

  getShaderType(_shader: HkIShader)
    : HK_SHADER_TYPE;

  getShaderInfoLog(_shader: HkIShader)
    : string;

  createProgram()
    : HkIProgram;

  attachShader(_program: HkIProgram, _shader: HkIShader)
    : void;

  linkProgram(_program: HkIProgram)
    : void;

  useProgram(_program: HkIProgram)
    : void;

  getProgramParameter(_program: HkIProgram, _parameter: HK_PROGRAM_PARAMETER)
    : boolean;

  bindBuffer(_type: HK_BUFFER_TARGET, _buffer: HkIBuffer)
    : void;

  bufferData
  (
    _type: HK_BUFFER_TARGET,
    _data: Float32Array,
    _usage: HK_DATA_USAGE
  )
    : void;

  bufferData
  (
    _type: HK_BUFFER_TARGET,
    _data: Uint16Array,
    _usage: HK_DATA_USAGE
  )
  : void;

  getAttribLocation(_program: HkIProgram, _name: string)
  : number;

  enableVertexAtrribArray(_index: number)
  : void;

  vertexAtrribPointer
  (
    _index: number,
    _size: number,
    _type: HK_DATA_TYPE,
    _normalized: boolean,
    _stride: number,
    _offset: number
  )
    : void;

  getUniformLocation
  (
    _program: HkIProgram,
    _name: string
  ): HkIUniformLocation;

  uniformMatrix4fv
  (
    _location: HkIUniformLocation,
    _transpose: boolean,
    _data: Float32List,
    _srcOffset?: number,
    _srcLength?: number
  )
    : void;  

  /**
   * Get the wrapped context.
   */
  getContext<T>()
  : T;

  /**
   * Get the API version of this context.
   */
  getAPIVersion()
  : HK_GRAPHICS_VERSION;

  /**
   * Set the context clear color.
   * 
   * @param _color color.
   */
  setClearColor(_color: HkColor)
  : void;
}