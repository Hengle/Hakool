/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary 
 *
 * @file HkISystem.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-08-2020
 */

import { HkGame } from "../game/hkGame";
import { HK_OPRESULT, HK_SYSTEM_ID } from "../utilities/hkEnums";

export interface HkISystem
{

  /**
   * Initialize the System.
   * 
   * @param _game
   * @param _config
   */
  init(_game: HkGame, _config: any)
    : HK_OPRESULT;

  /**
   * 
   * */
  update()
  : void;

  /**
   * 
   * */
  draw()
  : void;

  /**
   * Get the system identifier.
   * 
   * @returns System id.
   */
  getID()
    : HK_SYSTEM_ID;  
} 