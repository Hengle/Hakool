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
    _canvasId: string,
    _apiVersion?: HK_GRAPHICS_VERSION,
    _contextConfiguration?: HkContextConfig
  )
  {
    // HTML canvas element ID.

    this.canvasId = _canvasId;

    // Graphics API version.

    if(_apiVersion !== undefined)
    {
      this.apiVersion = _apiVersion;
    }
    else
    {
      this.apiVersion = HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental;
    }

    // Graphics context configuration.

    if(_contextConfiguration !== undefined)
    {
      this.contextConfiguration = _contextConfiguration;
    }
    else
    {
      this.contextConfiguration = new HkContextConfig();
    }

    return;
  }

  /**
   * The HTML Element Id where the application is going to be drawn.
   */
  canvasId: string;

  /**
   * The graphics context configuration.
   */
  contextConfiguration: HkContextConfig;

  /**
   * The Graphics API version ID.
   */
  apiVersion: HK_GRAPHICS_VERSION;
}