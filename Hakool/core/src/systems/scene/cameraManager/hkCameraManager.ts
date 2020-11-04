import { HkGame } from "../../../game/hkGame";
import { HkCamera } from "../../../objects/hkCamera";
import { HkIContext } from "../../graphics/hkIContext";
import { HkIGraphics } from "../../graphics/HkIGraphics";
import { HkIUniformLocation } from "../../graphics/hkIUniformLocation";
import { HkScene } from "../hkScene";
import { HkISceneSystem } from "../hkSceneSystem";

export class HkCameraManager
  implements HkISceneSystem
{

  init(_game: HkGame, _scene: HkScene)
  : void
  {

    this._m_aCameras = new Array<HkCamera>();

    this.game = _game;
    this.scene = _scene

    return;

  }

  start(_game: HkGame, _scene: HkScene)
  : void
  {    

    this.game = _game;

    this.scene = _scene;

    const graphics: HkIGraphics = _game.graphics;

    const context = graphics.getContext();

    const program = graphics.getProgram();    

    this._m_context = context;

    this._m_viewLocation = context.getUniformLocation(program, "viewMatrix");

    this._m_projectionLocation
      = context.getUniformLocation(program, "projectionMatrix");

    return;

  }

  update()
  : void
  {

    return;

  }

  draw()
  : void
  {

    const viewMatrix = this._m_active.getViewMatrix();

    this._m_context.uniformMatrix4fv
    (
      this._m_viewLocation,
      false,
      viewMatrix.getValues()
    );

    return;

  }

  setActiveCamera(_camera: HkCamera)
  : void
  {

    const context = this._m_context;

    context.uniformMatrix4fv
    (
      this._m_projectionLocation,
      false,
      _camera.getProjectionMatrix().getValues()
    );

    context.uniformMatrix4fv
    (
      this._m_viewLocation,
      false,
      _camera.getViewMatrix().getValues()
    );

    this._m_active = _camera;

    return;

  }

  createCamera()
  : HkCamera
  {

    const camera = new HkCamera();

    this.addCamera(camera);

    return camera;

  }

  addCamera(_camera: HkCamera)
  : void
  {

    this._m_aCameras.push(_camera);

    return;

  }

  destroy()
  : void
  {

    return;

  }

  public game: HkGame;

  public scene: HkScene;

  private _m_viewLocation: HkIUniformLocation;

  private _m_projectionLocation: HkIUniformLocation;

  private _m_context: HkIContext;

  private _m_active: HkCamera;

  private _m_aCameras: HkCamera[];

}