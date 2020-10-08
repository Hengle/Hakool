/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary 
 *
 * @file HkGraphicsWebGL.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-08-2020
 */

import { StringifyPowerPreference } from "../../utilities/hkCommons";
import { HK_GRAPHICS_VERSION, HK_OPRESULT, HK_SYSTEM_ID } from "../../utilities/hkEnums";
import { HkIContext } from "./context/hkIContext";
import { HkWebGLContext } from "./context/hkWebGLContext";
import { HkGraphicsConfig } from "./hkGraphicsConfig";
import { hkIGraphics } from "./hkIGraphics";

export class HkGraphicsWebGL
implements hkIGraphics
{
  /**
   * Create a Graphic System.
   */
  static Create()
  : HkGraphicsWebGL
  {
    let graphics : HkGraphicsWebGL = new HkGraphicsWebGL();
    return graphics;
  }

  /**
   * Initialize the Graphic System. 
   * 
   * Possible results :
   * 
   * * kObject_not_found : The canvas was not found in the active HTML document.
   * * kIncompatible_format : This graphics module doesn't support the given 
   * WebGL API version.
   * * kSuccess : Operation was a success.
   * 
   * @param _config System configuration.
   * 
   * @returns Operation result. 
   */
  init(_config : HkGraphicsConfig)
  : HK_OPRESULT
  {

    ///////////////////////////////////
    // Canvas Element

    let canvas : HTMLCanvasElement 
      = <HTMLCanvasElement>document.getElementById(_config.canvas_id);

    if(canvas === null)
    {
      // Log error

      console.error
      (
        'No canvas (HTML Element) with the specified ID exists. ID : ' 
        + _config.canvas_id
      );

      // Return result.

      return HK_OPRESULT.kObject_not_found;
    }

    ///////////////////////////////////
    // Context Configuration

    // Get the power preference string.
    
    let strPowerPreference : string 
      = StringifyPowerPreference(_config.context_configuration.powerPreference);

    // Create the context attributes object.

    let contextConfig : object = 
    {
      
      alpha : _config.context_configuration.alpha,

      depth : _config.context_configuration.depth,

      stencil : _config.context_configuration.stencil,

      antialias : _config.context_configuration.antialias,

      powerPreference : strPowerPreference

    };

    ///////////////////////////////////
    // Graphics Context

    let api_v = _config.api_version;

    let context : WebGLRenderingContext;

    if
    (
      api_v == HK_GRAPHICS_VERSION.kWebGL
      || api_v == HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental
    )
    {
      // Try to get the WebGL context.

      context = <WebGLRenderingContext>canvas.getContext
      (
        'webgl', 
        contextConfig
      );

      // or the Experimental WebGL context.

      if(context === null)
      {
        context = <WebGLRenderingContext>canvas.getContext
        (
          'experimental-webgl',
          contextConfig
        );
      }
    }
    else if(api_v == HK_GRAPHICS_VERSION.kWebGLExperimental)
    {
      // Get the experimental context.

      context = <WebGLRenderingContext>canvas.getContext
      (
        'experimental-webgl',
        contextConfig
      );
    }
    else
    {
      // This Graphics module doesn't support the Graphics Version

      console.error("Graphics WebGL Module doesn't support the given version");
      
      return HK_OPRESULT.kIncompatible_format;
    }

    // Check if it have the context.

    if(context === null)
    {
      throw new Error("Browser doesn't support WebGL.");
    }

    // Save the context.

    let iContext : HkWebGLContext = new HkWebGLContext();

    iContext.init(context, this._m_APIVersion);

    this._m_context = iContext;

    return HK_OPRESULT.kSuccess;
  }

  getID()
  : HK_SYSTEM_ID
  {
    return HK_SYSTEM_ID.kGraphics;
  }

  /**
   * Get the Graphics API version of this system.
   * 
   * @returns Graphics API version ID.
   */
  getAPIVersion()
  : HK_GRAPHICS_VERSION
  {
    return this._m_APIVersion;
  }

  /**
   * Get the canvas's graphics context.
   */
  getContext()
  : HkIContext
  {
    return this._m_context;
  }

  /**
   * Get the HTML canvas element where the application is being drawn.
   */
  getCanvas()
  : HTMLCanvasElement
  {
    return this._m_canvas;
  }

  /****************************************************/
  /* Private                                          */
  /****************************************************/

  /**
   * Private constructor.
   */
  constructor()
  {
    this._m_canvas = new HTMLCanvasElement();

    return;
  }
  
  /**
   * The HTML canvas element where the application is being drawn.
   */
  private _m_canvas : HTMLCanvasElement;

  /**
   * The Canvas's WebGL rendering context.
   */
  private _m_context : HkWebGLContext;

  /**
   * The graphics API version of this system.
   */
  private _m_APIVersion : HK_GRAPHICS_VERSION;
}