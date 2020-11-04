import { HkGame } from "../game/hkGame";
import { HkCamera } from "../objects/hkCamera";
import { HkScene } from "../systems/scene/hkScene";
import { HkIComponent } from "./hkIComponent";

export class HkCmpCamera
  implements HkIComponent  
{

  _init(_game: HkGame, _scene: HkScene)
  : void
  {

    // Create Camera.

    const camera: HkCamera = _scene.cameras.createCamera();

    this._m_camera = camera;

    const canvas = _game.graphics.getCanvas();

    camera.setPerspective
    (
      0.78539,
      canvas.width / canvas.height,
      0.1,
      100.0
    );

    return;

  }

  _start(_scene: HkScene)
  : void
  {

    _scene.cameras.setActiveCamera(this._m_camera);

    return;

  }

  _update()
  : void
  {

    return;

  }

  _draw()
  : void
  {

    return;
  }

  _destroy()
  : void
  {
    return;
  }

  private _m_camera: HkCamera;

}