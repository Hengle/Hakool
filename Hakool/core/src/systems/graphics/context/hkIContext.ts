/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary 
 *
 * @file hkIContext.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-11-2020
 */

import { HK_GRAPHICS_VERSION } from "../../../utilities/hkEnums";

export interface hkIContext
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
}