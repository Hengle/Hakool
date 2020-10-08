/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary 
 *
 * @file hkGraphics.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-08-2020
 */

import { HK_GRAPHICS_VERSION, HK_OPRESULT } from "../../utilities/hkEnums";
import { HkISystem } from "../hkISystem";
import { HkIContext } from "./context/hkIContext";
import { HkGraphicsConfig } from "./hkGraphicsConfig";

export interface HkIGraphics
extends HkISystem
{
  /**
   * Initialize the Graphic System. 
   * 
   * Possible results :
   * 
   * * kObject_not_found : The canvas was not found in the active HTML document.
   * * kSuccess : Operation was a success.
   * 
   * @param _config System configuration.
   * 
   * @returns Operation result. 
   */
  init(_config : HkGraphicsConfig)
  : HK_OPRESULT;

  /**
   * Get the HTML canvas element where the application is being drawn.
   */
  getCanvas()
  : HTMLCanvasElement;

  /**
   * Get the canvas's graphics context.
   */
  getContext()
  : HkIContext;

  /**
   * Get the Graphics API version of this system.
   */
  getAPIVersion()
  : HK_GRAPHICS_VERSION;
}