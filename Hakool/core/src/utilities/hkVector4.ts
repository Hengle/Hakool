/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file hkVector4.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since October-19-2020
 */

export class HkVector4
{
  constructor(_x?: number, _y?: number, _z?: number, _w?: number)
  {
    if (_x !== undefined) {
      this.x = _x;
    }
    if (_y !== undefined) {
      this.y = _y;
    }
    else {
      this.y = 0.0;
    }

    if (_z !== undefined) {
      this.z = _z;
    }
    else {
      this.z = 0.0;
    }

    if (_w !== undefined) {
      this.w = _w;
    }
    else {
      this.w = 0.0;
    }

    return;
  }

  set(_x?: number, _y?: number, _z?: number, _w?: number)
    : void
  {
    if (_x !== undefined) {
      this.x = _x;
    }

    if (_y !== undefined) {
      this.y = _y;
    }

    if (_z !== undefined) {
      this.z = _z;
    }

    if (_w !== undefined) {
      this.w = _w;
    }

    return;
  }

  scale(_scalar: number)
    : void
  {
    this.x *= _scalar;
    this.y *= _scalar;
    this.z *= _scalar;
    this.w *= _scalar;
    return;
  }

  x: number;

  y: number;

  z: number;

  w: number;
}