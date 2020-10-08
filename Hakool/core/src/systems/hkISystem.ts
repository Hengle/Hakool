/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary 
 *
 * @file HkISystem.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-08-2020
 */

import { HK_SYSTEM_ID } from "../utilities/hkEnums";

export interface HkISystem
{
  
  /**
   * Get the system identifier.
   * 
   * @returns System id.
   */
  getID()
  : HK_SYSTEM_ID;
} 