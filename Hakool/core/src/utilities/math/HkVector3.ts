export class HkVector3
{

  constructor(_x?: number, _y?: number, _z?: number)
  {

    if (_x !== undefined)
    {

      this.x = _x;

    }
    else
    {

      this.x = 0.0;

    }

    if (_y !== undefined)
    {

      this.y = _y;

    }
    else
    {

      this.y = 0.0;

    }

    if (_z !== undefined)
    {

      this.z = _z;

    }
    else
    {

      this.z = 0.0;

    }

    return;

  }

  static Cross(_a: HkVector3, _b: HkVector3, _out: HkVector3)
  : HkVector3
  {

    const ax = _a.x;
    const ay = _a.y;
    const az = _a.z;

    const bx = _b.x;
    const by = _b.y;
    const bz = _b.z;

    _out.x = (ay * bz) - (az * by);
    _out.y = (az * bx) - (ax * bz);
    _out.z = (ax * by) - (ay * bx);

    return _out;

  }

  static Substract(_a: HkVector3, _b: HkVector3, _out: HkVector3)
  : HkVector3
  {

    _out.x = _a.x - _b.x;

    _out.y = _a.y - _b.y;

    _out.z = _a.z - _b.z;

    return _out;

  }

  static Add(_a: HkVector3, _b: HkVector3, _out: HkVector3)
  : HkVector3
  {

    _out.x = _a.x + _b.x;

    _out.y = _a.y + _b.y;

    _out.z = _a.z + _b.z;

    return _out;

  }

  static Normalize(_a: HkVector3, _out: HkVector3)
  : HkVector3
  {

    const mag = _a.magnitude();

    if (mag === 0) {

      _out.copy(_a);

      return _out;
    }

    const factor = 1 / mag;

    _out.x = _a.x * factor;

    _out.y = _a.y * factor;

    _out.z = _a.z * factor;

    return _out;

  }

  set(_x: number, _y?: number, _z?: number)
  : HkVector3
  {

    this.x = _x;

    if (_y !== undefined)
    {

      this.y = _y;

    }

    if (_z !== undefined)
    {

      this.z = _z;

    }

    return this;
  }

  copy(_vector: HkVector3)
  : HkVector3
  {

    this.x = _vector.x;

    this.y = _vector.y;

    this.z = _vector.z;

    return this;
  }

  add(_vector: HkVector3)
  : HkVector3
  {

    this.x += _vector.x;

    this.y += _vector.y;

    this.z += _vector.z;

    return this;

  }

  substract(_vector: HkVector3)
  : HkVector3
  {

    this.x -= _vector.x;

    this.y -= _vector.y;

    this.z -= _vector.z;

    return this;

  }

  cross(_vector: HkVector3)
  : HkVector3
  {

    const ax = this.x;
    const ay = this.y;
    const az = this.z;

    const bx = _vector.x;
    const by = _vector.y;
    const bz = _vector.z;

    this.x = (ay * bz) - (az * by);
    this.y = (az * bx) - (ax * bz);
    this.z = (ax * by) - (ay * bx);

    return this;

  }

  magnitudeSqr()
  : number
  {

    const x = this.x;
    const y = this.y;
    const z = this.z;

    return (x * x) + (y * y) + (z * z);

  }

  magnitude()
  : number
  {

    const x = this.x;
    const y = this.y;
    const z = this.z;

    return Math.sqrt((x * x) + (y * y) + (z * z));
  }

  normalize()
  : HkVector3
  {

    const mag = this.magnitude();

    if (mag === 0)
    {
      return this;
    }

    this.divideScalar(mag);

    return this;

  }

  divideScalar(_scalar: number)
  : HkVector3
  {

    this.scale( 1 / _scalar );

    return this;

  }


  scale(_scalar: number)
  : HkVector3
  {

    this.x *= _scalar;

    this.y *= _scalar;

    this.z *= _scalar;

    return this;

  }

  static A: HkVector3 = new HkVector3();

  static B: HkVector3 = new HkVector3();

  static C: HkVector3 = new HkVector3();

  x: number;

  y: number;

  z: number;

}