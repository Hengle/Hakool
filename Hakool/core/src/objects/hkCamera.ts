import { HkIContext } from "../systems/graphics/hkIContext";
import { HkIProgram } from "../systems/graphics/hkIProgram";
import { HkIUniformLocation } from "../systems/graphics/hkIUniformLocation";
import { HkMatrix4 } from "../utilities/math/hkMatrix4";
import { HkVector3 } from "../utilities/math/HkVector3";

export class HkCamera
{

  constructor()
  {

    this._m_position = new HkVector3();

    this._m_up = new HkVector3(0, 1, 0);

    this._m_forward = new HkVector3(0, 0, 1);

    this._m_target = new HkVector3();

    this._m_viewMatrix = new HkMatrix4();

    this._m_projMatrix = new HkMatrix4();

    this._m_isDirty = true;

    return;
  }

  setUp(_x: HkVector3)
  : void;

  setUp(_x: number, _y?: number, _z?: number)
  : void;

  setUp(_x: number | HkVector3, _y?: number, _z?: number)
  : void
  {

    const up = this._m_up;

    if (typeof _x === "number")
    {

      up.x = _x;
      up.y = _y;
      up.z = _z;

    }
    else
    {

      up.x = _x.x;
      up.y = _x.y;
      up.z = _x.z;

    }

    this._m_isDirty = true;

    return;

  }

  setTarget(_x: HkVector3)
    : void;

  setTarget(_x: number, _y?: number, _z?: number)
    : void;

  setTarget(_x: number | HkVector3, _y?: number, _z?: number)
    : void
  {

    const target = this._m_target;

    if (typeof _x === "number") {

      target.x = _x;
      target.y = _y;
      target.z = _z;

    }
    else {

      target.x = _x.x;
      target.y = _x.y;
      target.z = _x.z;

    }

    this._m_isDirty = true;

    return;

  }

  setPosition(_x: HkVector3)
    : void;

  setPosition(_x: number, _y?: number, _z?: number)
    : void;

  setPosition(_x: number | HkVector3, _y?: number, _z?: number)
    : void
  {

    const position = this._m_position;

    if (typeof _x === "number")
    {

      position.x = _x;
      position.y = _y;
      position.z = _z;

    }
    else
    {

      position.x = _x.x;
      position.y = _x.y;
      position.z = _x.z;

    }

    this._m_isDirty = true;

    return;

  }

  setPerspective
  (
    _fovy: number,
    _ratio: number,
    _near: number,
    _far: number
  )
  : void
  {

    this._m_projMatrix.makePerspective
    (
      _fovy,
      _ratio,
      _near,
      _far
    );

    return;

  }

  getViewMatrix()
  : HkMatrix4
  {

    if (this._m_isDirty)
    {

      this.updateMatrix();

    }

    return this._m_viewMatrix;

  }

  getProjectionMatrix()
  : HkMatrix4
  {

    return this._m_projMatrix;

  }

  getUp()
  : HkVector3
  {
    return this._m_up;
  }

  getTarget()
  : HkVector3
  {
    return this._m_target;
  }

  getForward()
  : HkVector3
  {
    return this._m_forward;
  }

  updateMatrix()
  : void
  {

    // Calculate the forward direction.

    const target = this._m_target;

    const forward = this._m_forward;

    const position = this._m_position;

    HkVector3.Substract(target, position, forward);

    forward.normalize();

    // Calculate view matrix.

    this._m_viewMatrix.lookAt(position, target, this._m_up);

    this._m_isDirty = false;

    return;

  }

  isDirty()
  : boolean
  {
    return this._m_isDirty;
  }

  private _m_position: HkVector3;

  private _m_up: HkVector3;

  private _m_forward: HkVector3;

  private _m_target: HkVector3;

  private _m_viewMatrix: HkMatrix4;

  private _m_projMatrix: HkMatrix4;

  private _m_isDirty: boolean;

}