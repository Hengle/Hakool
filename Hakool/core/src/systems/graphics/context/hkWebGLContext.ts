/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary 
 *
 * @file hkWebGLContext.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-11-2020
 */

import { HK_GRAPHICS_VERSION } from "../../../utilities/hkEnums";
import { HkIContext } from "./HkIContext";

export class hkWebGLContext
implements HkIContext
{
  /****************************************************/
  /* Public                                           */
  /****************************************************/
  
  init(_context : WebGLRenderingContext, _api_v : HK_GRAPHICS_VERSION)
  : void
  {
    this._m_context = _context;
    this._m_api_version = _api_v;
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
    return this._m_api_version;
  }

  /****************************************************/
  /* Private                                          */
  /****************************************************/
  
  /**
   * The API Version of WebGL.
   */
  private _m_api_version : HK_GRAPHICS_VERSION;

  /**
   * The WebGL Rendering Context.
   */
  private _m_context : WebGLRenderingContext;

}