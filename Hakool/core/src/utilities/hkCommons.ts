/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary 
 *
 * @file hkCommons.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-08-2020
 */

import { HK_POWER_PREFERENCE } from "./hkEnums";

export function StringifyPowerPreference(_id : HK_POWER_PREFERENCE)
: string
{
  switch(_id)
  {
    case HK_POWER_PREFERENCE.kDefault:
    return "default";

    case HK_POWER_PREFERENCE.kHighPerformance:
    return "high-performance";

    case HK_POWER_PREFERENCE.kLowPower:
    return "low-power";
  }
}