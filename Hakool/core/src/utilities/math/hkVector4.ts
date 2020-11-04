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

  static LinearInterpolation
  (
    _a: HkVector4,
    _b: HkVector4,
    _t: number,
    _out: HkVector4
  )
  : void
  {

    _out.x = _a.x + (_b.x - _a.x) * _t;
    _out.y = _a.y + (_b.y - _a.y) * _t;
    _out.z = _a.z + (_b.z - _a.z) * _t;
    _out.w = _a.w + (_b.w - _a.w) * _t;

    return;

  }

  copy(_vector: HkVector4)
  : HkVector4
  {

    this.x = _vector.x;
    this.y = _vector.y;
    this.z = _vector.z;
    this.w = _vector.w;

    return this;

  }

  set(_x?: number, _y?: number, _z?: number, _w?: number)
  : HkVector4
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

    return this;
  }

  scale(_scalar: number)
  : HkVector4
  {

    this.x *= _scalar;
    this.y *= _scalar;
    this.z *= _scalar;
    this.w *= _scalar;

    return this;

  }

  x: number;

  y: number;

  z: number;

  w: number;
}