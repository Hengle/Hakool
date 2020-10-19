/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary 
 *
 * @file HkGraphicsWebGL.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-08-2020
 */

import { HkGame } from "../../game/hkGame";
import { StringifyPowerPreference } from "../../utilities/hkCommons";
import { HK_GRAPHICS_VERSION, HK_OPRESULT, HK_SYSTEM_ID } from "../../utilities/hkEnums";
import { HkIContext } from "./context/hkIContext";
import { HkWebGLContext } from "./context/hkWebGLContext";
import { HkGraphicsConfig } from "./hkGraphicsConfig";
import { HkIGraphics } from "./HkIGraphics";

export class HkGraphicsWebGL
implements HkIGraphics
{
  /**
   * Create a Graphic System.
   */
  static Create()
  : HkGraphicsWebGL
  {
    const graphics: HkGraphicsWebGL = new HkGraphicsWebGL();
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
  init(_config: HkGraphicsConfig, _game: HkGame)
  : HK_OPRESULT
  {

    this._m_APIVersion = _config.apiVersion;

    ///////////////////////////////////
    // Canvas Element

    const element: HTMLElement
      = document.getElementById(_config.canvasId);

    if (element === null)
    {
      // Log error

      _game.logger.logError
      (
        'No HTML Element found with an ID of : '
        + _config.canvasId
      );

      // Return result.

      return HK_OPRESULT.kObject_not_found;
    }

    if (!(element instanceof HTMLCanvasElement))
    {

      _game.logger.logError
      (
        "The HTML Element with an ID of : "
        + _config.canvasId
        + " is not a canvas element"
      );

      // Return result

      return HK_OPRESULT.kIncompatible_format;
    }

    const canvas: HTMLCanvasElement = element as HTMLCanvasElement;

    this._m_canvas = canvas;

    ///////////////////////////////////
    // Context Configuration

    // Get the power preference string.
    
    let strPowerPreference: string
      = StringifyPowerPreference(_config.contextConfiguration.powerPreference);

    // Create the context attributes object.

    let contextConfig : object = 
    {
      
      alpha : _config.contextConfiguration.alpha,

      depth : _config.contextConfiguration.depth,

      stencil : _config.contextConfiguration.stencil,

      antialias : _config.contextConfiguration.antialias,

      powerPreference : strPowerPreference

    };

    ///////////////////////////////////
    // Graphics Context

    const apiVersion = _config.apiVersion;

    let context: WebGLRenderingContext;

    if
    (
      apiVersion === HK_GRAPHICS_VERSION.kWebGL
      || apiVersion === HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental
    )
    {
      // Try to get the WebGL context.

      context = canvas.getContext
      (
        'webgl', 
        contextConfig
      ) as WebGLRenderingContext;

      // or the Experimental WebGL context.

      if(context === null)
      {
        context = canvas.getContext
        (
          'experimental-webgl',
          contextConfig
        ) as WebGLRenderingContext;
      }
    }
    else if (apiVersion === HK_GRAPHICS_VERSION.kWebGLExperimental)
    {
      // Get the experimental context.

      context = canvas.getContext
      (
        'experimental-webgl',
        contextConfig
      ) as WebGLRenderingContext;
    }
    else
    {
      // This Graphics module doesn't support the Graphics Version

      _game.logger.logError
      (
        "Graphics WebGL Module doesn't support the given version"
      );
      
      return HK_OPRESULT.kIncompatible_format;
    }

    // Check if it have the context.

    if(context === null)
    {
      _game.logger.logError
      (
        "Browser doesn't support WebGL."
      );

      return HK_OPRESULT.kFail;
    }

    // Create context object.

    const iContext: HkWebGLContext = new HkWebGLContext();

    iContext.init(context, _config.apiVersion);

    // Clear color.

    iContext.setClearColor(_config.contextConfiguration.clearColor);

    iContext.clear();

    this._m_context = iContext;

    // Add system to game.

    _game.addSystem(HK_SYSTEM_ID.kGraphics, this);

    _game.graphics = this;

    // Return result

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
    return;
  }
  
  /**
   * The HTML canvas element where the application is being drawn.
   */
  private _m_canvas: HTMLCanvasElement;

  /**
   * The Canvas's WebGL rendering context.
   */
  private _m_context: HkWebGLContext;

  /**
   * The graphics API version of this system.
   */
  private _m_APIVersion: HK_GRAPHICS_VERSION;
}