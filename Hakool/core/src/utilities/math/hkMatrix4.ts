import { HkVector3 } from "./HkVector3";

export class HkMatrix4
{
  constructor()
  {

    this._m_aValues = new Float32Array(16);

    return;
  }

  static MultiplyMatrices(_matA: HkMatrix4, _matB: HkMatrix4)
  : HkMatrix4
  {

    const mat4: HkMatrix4 = new HkMatrix4();

    const aV = _matA._m_aValues;

    const a11 = aV[0], a21 = aV[4], a31 = aV[8], a41 = aV[12];
    const a12 = aV[1], a22 = aV[5], a32 = aV[9], a42 = aV[13];
    const a13 = aV[2], a23 = aV[6], a33 = aV[10], a43 = aV[14];
    const a14 = aV[3], a24 = aV[7], a34 = aV[11], a44 = aV[15];

    const bV = _matB._m_aValues;

    const b11 = bV[0], b21 = bV[4], b31 = bV[8], b41 = bV[12];
    const b12 = bV[1], b22 = bV[5], b32 = bV[9], b42 = bV[13];
    const b13 = bV[2], b23 = bV[6], b33 = bV[10], b43 = bV[14];
    const b14 = bV[3], b24 = bV[7], b34 = bV[11], b44 = bV[15];

    const cV = mat4._m_aValues;

    cV[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    cV[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    cV[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    cV[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

    cV[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    cV[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    cV[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    cV[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

    cV[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    cV[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    cV[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    cV[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

    cV[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    cV[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    cV[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    cV[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

    return mat4;

  }

  multiply(_mat4: HkMatrix4)
  : HkMatrix4
  {

    const aV = this._m_aValues;

    const a11 = aV[0], a21 = aV[4], a31 = aV[8], a41 = aV[12];
    const a12 = aV[1], a22 = aV[5], a32 = aV[9], a42 = aV[13];
    const a13 = aV[2], a23 = aV[6], a33 = aV[10], a43 = aV[14];
    const a14 = aV[3], a24 = aV[7], a34 = aV[11], a44 = aV[15];

    const bV = _mat4._m_aValues;

    const b11 = bV[0], b21 = bV[4], b31 = bV[8], b41 = bV[12];
    const b12 = bV[1], b22 = bV[5], b32 = bV[9], b42 = bV[13];
    const b13 = bV[2], b23 = bV[6], b33 = bV[10], b43 = bV[14];
    const b14 = bV[3], b24 = bV[7], b34 = bV[11], b44 = bV[15];

    aV[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    aV[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    aV[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    aV[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

    aV[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    aV[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    aV[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    aV[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

    aV[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    aV[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    aV[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    aV[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

    aV[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    aV[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    aV[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    aV[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

    return this;

  }

  multiplyScalar(_s: number)
  : HkMatrix4
  {

    const aV = this._m_aValues;

    aV[0] *= _s; aV[4] *= _s; aV[8] *= _s; aV[12] *= _s;
    aV[1] *= _s; aV[5] *= _s; aV[9] *= _s; aV[13] *= _s;
    aV[2] *= _s; aV[6] *= _s; aV[10] *= _s; aV[14] *= _s;
    aV[3] *= _s; aV[7] *= _s; aV[11] *= _s; aV[15] *= _s;

    return this;

  }

  /**
   * 
   * @param _matrix
   */
  copy(_matrix: HkMatrix4)
  : HkMatrix4
  {

    this._m_aValues.set(_matrix._m_aValues);

    return this;

  }

  /**
   * */
  clone()
  : HkMatrix4
  {

    const clone: HkMatrix4 = new HkMatrix4();    

    return clone.copy(this);

  }

  /**
   * Set this matrix an identity matrix (also called the unit matrix).
   * */
  identity()
  : HkMatrix4
  {

    const aV = this._m_aValues;

    this.setByValue
    (
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    );

    return this;

  }

  /**
   * 
   * @param _col
   * @param _row
   */
  get(_col: number, _row: number)
  : number
  {

    return this._m_aValues[(_col * 4) + _row];

  }

  makeTranslation(_x: HkVector3)
  : HkMatrix4;

  makeTranslation(_x: number, _y?: number, _z?: number)
  : HkMatrix4;  

  makeTranslation(_x: number | HkVector3, _y?: number, _z?: number)
  : HkMatrix4
  {

    if (typeof _x === "number") {

      this.setByValue
      (
        0, 0, 0, _x,
        0, 0, 0, _y,
        0, 0, 0, _z,
        0, 0, 0, 1
      );

    }
    else {

      this.setByValue
      (
        0, 0, 0, _x.x,
        0, 0, 0, _x.y,
        0, 0, 0, _x.z,
        0, 0, 0, 1
      );

    }

    return this;
  }

  makeScale(_x: HkVector3)
  : HkMatrix4;

  makeScale(_x: number, _y?: number, _z?: number)
  : HkMatrix4;

  makeScale(_x: number | HkVector3, _y?: number, _z?: number)
  : HkMatrix4
  {

    if (typeof _x === "number")
    {

      this.setByValue
      (
        _x, 0, 0, 0,
        0, _y, 0, 0,
        0, 0, _z, 0,
        0, 0, 0, 1
      );

    }
    else
    {

      this.setByValue
      (
        _x.x, 0, 0, 0,
        0, _x.y, 0, 0,
        0, 0, _x.z, 0,
        0, 0, 0, 1
      );

    }

    return this;
  }

  makeRotationX(_radians: number)
  : HkMatrix4
  {

    const c = Math.cos(_radians);
    const s = Math.sin(_radians);

    this.setByValue
    (
      1, 0, 0, 0,
      0, c, -s, 0,
      0, s, c, 0,
      0, 0, 0, 1
    );

    return this;
  }

  makeRotationY(_radians: number)
  : HkMatrix4
  {

    const c = Math.cos(_radians);
    const s = Math.sin(_radians);

    this.setByValue
    (
      c, 0, s, 0,
      0, 1, 0, 0,
      -s, 0, c, 0,
      0, 0, 0, 1
    );

    return this;

  }

  makeRotationZ(_radians: number)
  : HkMatrix4
  {

    const c = Math.cos(_radians);
    const s = Math.sin(_radians);

    this.setByValue
    (
      c, -s, 0, 0,
      s, c, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    );

    return this;

  }

  makePerspective(_fov: number, _aspect: number, _near: number, _far: number)
  : HkMatrix4
  {

    // Based on https://webglfundamentals.org/webgl/lessons/webgl-3d-perspective.html

    const f = Math.tan((Math.PI * 0.5) - (0.5 * _fov));

    const rangeInv = 1.0 / (_near - _far);

    this.setByValue
    (
      f / _aspect, 0, 0, 0,
      0, f, 0, 0,
      0, 0, (_near + _far) * rangeInv, -1,
      0, 0, _near * _far * rangeInv * 2, 0
    );

    return this;

  }

  lookAt(_position: HkVector3, _target: HkVector3, _up: HkVector3)
  : HkMatrix4
  {

    const forward = HkVector3.A;

    HkVector3.Substract(_target, _position, forward);

    if (forward.magnitudeSqr() === 0)
    {

      forward.z = 1;

    }

    forward.normalize();

    const right = HkVector3.B;

    HkVector3.Cross(_up, forward, right);

    if (right.magnitudeSqr() === 0)
    {

      if (Math.abs(_up.z) === 1)
      {

        forward.x += 0.0001;

      }
      else
      {

        forward.z += 0.0001;

      }

      forward.normalize();

      HkVector3.Cross(_up, forward, right);

    }

    right.normalize();

    const fixedUp = HkVector3.C;

    HkVector3.Cross(forward, right, fixedUp);

    this.setByValue
    (

      right.x, fixedUp.x, forward.x, 0,
      right.y, fixedUp.y, forward.y, 0,
      right.z, fixedUp.z, forward.z, 0,
      0,0,0,1

    );

    return this;
  }

  setByValue
  (
    _n11: number, _n12: number, _n13: number, _n14: number,
    _n21: number, _n22: number, _n23: number, _n24: number,
    _n31: number, _n32: number, _n33: number, _n34: number,
    _n41: number, _n42: number, _n43: number, _n44: number
  )
  : HkMatrix4
  {

    const aV = this._m_aValues;

    aV[0] = _n11; aV[4] = _n21; aV[8] = _n31; aV[12] = _n44;
    aV[1] = _n12; aV[5] = _n22; aV[9] = _n32; aV[13] = _n42;
    aV[2] = _n13; aV[6] = _n23; aV[10] = _n33; aV[14] = _n43;
    aV[3] = _n14; aV[7] = _n24; aV[11] = _n34; aV[15] = _n44;

    return this;

  }

  /**
   * 
   * @param _col
   * @param _row
   * @param _value
   */
  set(_col: number, _row: number, _value: number)
  : void
  {

    this._m_aValues[(_col * 4) + _row] = _value;

    return;

  }

  /**
   * 
   * */
  getValues()
  : Float32Array
  {

    return this._m_aValues;

  }

  /**
   * 
   * */
  private _m_aValues: Float32Array;
}