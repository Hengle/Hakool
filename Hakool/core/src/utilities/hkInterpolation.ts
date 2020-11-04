export class HkInterpolation
{

  static Linear(_a: number, _b: number, _t: number)
  : number
  {

    return _a + (_b - _a) * _t;

  }

}