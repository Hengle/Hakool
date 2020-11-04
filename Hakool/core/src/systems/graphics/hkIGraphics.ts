/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary 
 *
 * @file hkGraphics.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-08-2020
 */

import { HK_GRAPHICS_VERSION } from "../../utilities/hkEnums";
import { HkISystem } from "../hkISystem";
import { HkIContext } from "./hkIContext";
import { HkIProgram } from "./hkIProgram";

export interface HkIGraphics
  extends HkISystem
{
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

  getProgram()
    : HkIProgram;

  /**
   * Get the Graphics API version of this system.
   */
  getAPIVersion()
  : HK_GRAPHICS_VERSION;
}