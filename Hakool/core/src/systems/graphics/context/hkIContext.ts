/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary 
 *
 * @file HkIContext.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-11-2020
 */

import { HkColor } from "../../../utilities/hkColor";
import { HK_GRAPHICS_VERSION } from "../../../utilities/hkEnums";

export interface HkIContext
{
  /****************************************************/
  /* Public                                           */
  /****************************************************/
  
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