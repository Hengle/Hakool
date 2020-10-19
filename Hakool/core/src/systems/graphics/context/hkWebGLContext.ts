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
import { HK_GRAPHICS_VERSION } from "../../../utilities/hkEnums";
import { HkVector4 } from "../../../utilities/hkVector4";
import { HkIContext } from "./HkIContext";

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

  getContext<T>()
  : T 
  {
    return (this._m_context as unknown) as T;
  }

  getAPIVersion()
  : HK_GRAPHICS_VERSION 
  {
    return this._m_apiVersion;
  }

  setClearColor(_color: HkColor)
  : void
  {
    const color: HkVector4 = _color.color;

    this._m_context.clearColor(color.x, color.y, color.z, color.w);

    return;
  }

  clear()
  : void
  {
    const context = this._m_context;

    context.clear(context.COLOR_BUFFER_BIT);

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