import { HkScene } from "../systems/scene/hkScene";
import { HkMatrix4 } from "../utilities/math/hkMatrix4";
import { HkObject } from "../utilities/hkNode";
import { HkVector3 } from "../utilities/math/HkVector3";
import { HkIComponent } from "./hkIComponent";
import { HkGame } from "../game/hkGame";

export class HkGameObject
  extends HkObject
{
  constructor(_name : string)
  {

    super();

    this.name = _name;

    this._m_hComponents = new Array<HkIComponent>();

    this._m_position = new HkVector3();
    this._m_rotation = new HkVector3();
    this._m_scale = new HkVector3();

    this._m_matrix = new HkMatrix4();
    this._m_auxMat = new HkMatrix4();

    this._m_isDirty = true;

  }  

  init(_game: HkGame, _scene: HkScene)
  : void
  {

    for (let component of this._m_hComponents)
    {

      component._init(_game, _scene);

    }

    return;
  }

  start(_scene: HkScene)
  : void
  {

    for (let component of this._m_hComponents)
    {

      component._start(_scene);

    }

    return;
  }

  update()
  : void
  {

    for (let component of this._m_hComponents)
    {

      component._update();

    }

    return;
  }

  draw()
  : void
  {

    for (let component of this._m_hComponents)
    {

      component._draw();

    }

    return;
  }

  addComponent(_component: HkIComponent)
    : void
  {

    this._m_hComponents.push(_component);

  }

  setPosition(_x: number, _y?: number, _z?: number)
  : void
  {

    this._m_position.set(_x, _y, _z);

    this._m_isDirty = true;

    return;
  }

  getPosition()
  : HkVector3
  {
    return this._m_position;
  }

  setScale(_x: number, _y?: number, _z?: number)
  : void
  {

    this._m_scale.set(_x, _y, _z);

    this._m_isDirty = true;

    return;
  }

  getScale()
  : HkVector3
  {
    return this._m_scale;
  }

  setRotation(_x: number, _y?: number, _z?: number)
  : void
  {

    this._m_rotation.set(_x, _y, _z);

    this._m_isDirty = true;

    return;
  }

  getRotation()
  : HkVector3
  {
    return this._m_rotation;
  }

  getMatrix()
  : HkMatrix4
  {

    if (this._m_isDirty)
    {
      this._updateMatrix();
    }

    return this._m_matrix;
  }

  destroy()
  : void
  {

    for (let component of this._m_hComponents)
    {

      component._destroy();

    }

    return;
  }

  name: string;

  private _updateMatrix()
  : void
  {

    const mat = this._m_matrix;
    const aux = this._m_auxMat;

    mat.identity();

    mat.multiply(aux.makeTranslation(this._m_position));

    const rotation = this._m_rotation;

    mat.multiply(aux.makeRotationX(rotation.x));
    mat.multiply(aux.makeRotationY(rotation.y));
    mat.multiply(aux.makeRotationZ(rotation.z));

    mat.multiply(aux.makeScale(this._m_scale));

    this._m_isDirty = false;

  }

  private _m_position: HkVector3;

  private _m_rotation: HkVector3;

  private _m_scale: HkVector3;

  private _m_matrix: HkMatrix4;

  private _m_auxMat: HkMatrix4;

  private _m_isDirty: boolean;

  private _m_hComponents: Array<HkIComponent>;

  private _m_children: Array<HkGameObject>;
}