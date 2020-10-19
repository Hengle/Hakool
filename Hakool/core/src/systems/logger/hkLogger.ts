/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary 
 *
 * @file HkLogger.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-12-2020
 */

import { HkGameConfig } from "../../game/hkGameConfig";
import { HkILogger } from "./hkILogger";

export class HkLogger
  implements HkILogger
{
  /****************************************************/
  /* Public                                           */
  /****************************************************/
  
  static Create(_config: HkGameConfig)
  : HkLogger
  {
    const logger: HkLogger = new HkLogger();

    logger._init(_config);

    return logger;
  }

  log(_msg: string)
    : void {

    console.log(_msg);
    return;
  }

  logError(_msg: string)
    : void {

    console.error(_msg);
    return;
  }

  logWarning(_msg: string)
    : void {

    console.warn(_msg);
    return;
  }

  /****************************************************/
  /* Private                                          */
  /****************************************************/
  
  /**
   * 
   * @param _config 
   */
  private _init(_config: HkGameConfig)
  : void
  {
    // TODO.

    return;
  }

  /**
   * Private constructor.
   */
  private constructor()
  { }
}