/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary 
 *
 * @file HkLogger.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-12-2020
 */

import { HkGameConfig } from "../game/hkGameConfig";

export class HkLogger
{
  /****************************************************/
  /* Public                                           */
  /****************************************************/
  
  Create(_config : HkGameConfig)
  : HkLogger
  {
    let logger : HkLogger = new HkLogger();

    return logger;
  }

  /****************************************************/
  /* Private                                          */
  /****************************************************/
  
  /**
   * 
   * @param _config 
   */
  private _init(_config : HkGameConfig)
  : void
  {
    return;
  }

  /**
   * Private constructor.
   */
  private constructor()
  { }
}