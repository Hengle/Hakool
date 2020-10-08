/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary 
 *
 * @file HkGraphicsConfig.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-08-2020
 */

import { HK_GRAPHICS_VERSION } from "../../utilities/hkEnums";
import { HkContextConfig } from "./HkContextConfig";

/**
 * Configures the graphics system.
 */
export class HkGraphicsConfig
{

  /**
   * Graphic configuration.
   *
   * @param _canvas_id The HTML Element Id where the application is going to be
   * drawn.
   * @param _api_version The graphics API version. Default :
   * HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental.
   * @param _context_configuration The graphics context configuration object.
   */
  constructor
  (
    _canvas_id : string = "",
    _api_version ?: HK_GRAPHICS_VERSION,
    _context_configuration ?: HkContextConfig
  )
  {
    // HTML canvas element ID.

    this.canvas_id = _canvas_id;

    // Graphics API version.

    if(_api_version !== undefined)
    {
      this.api_version = _api_version;
    }
    else
    {
      this.api_version = HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental;
    }

    // Graphics context configuration.

    if(_context_configuration !== undefined)
    {
      this.context_configuration = _context_configuration;
    }
    else
    {
      this.context_configuration = new HkContextConfig;
    }

    return;
  }

  /**
   * The HTML Element Id where the application is going to be drawn.
   */
  canvas_id : string;

  /**
   * The graphics context configuration.
   */
  context_configuration : HkContextConfig;

  /**
   * The Graphics API version ID.
   */
  api_version : HK_GRAPHICS_VERSION;
}