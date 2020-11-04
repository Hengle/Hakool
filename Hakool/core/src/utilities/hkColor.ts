﻿/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file hkColor.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since October-19-2020
 */

import { HkVector4 } from "./math/hkVector4";

export class HkColor
{
  constructor(_r?: number, _g?: number, _b?: number, _a?: number)
  {
    this.color = new HkVector4(_r, _g, _b, _a);
    return;
  }

  static LinearInterpolation
  (
    _a: HkColor,
    _b: HkColor,
    _t: number,
    _out: HkColor
  )
  : void
  {

    HkVector4.LinearInterpolation
    (
      _a.color,
      _b.color,
      _t,
      _out.color
    );

    return;

  }

  set(_r?: number, _g?: number, _b?: number, _a?: number)
    : void
  {
    this.color.set(_r, _g, _b, _a);
    return;
  }

  normalize()
    : void
  {
    this.color.scale(1.0 / 255);
    return;
  }

  color: HkVector4;
}