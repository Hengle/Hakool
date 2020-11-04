import { HkGame } from "../../game/hkGame";
import { HkCameraManager } from "./cameraManager/hkCameraManager";
import { HkGameObjectsManager } from "./gameObjectsManager/hkGameObjectsManager";

export class HkScene
{

  /**
   * */
  onStart()
  : void
  {
    return;
  }

  /**
   * 
   * @param _deltaTime
   */
  onUpdate(_deltaTime: number)
  : void
  {
    return;
  }

  onDraw()
  : void
  {

  }

  /**
   * */
  onClose()
  : void
  {
    return;
  }

  /**
   * */
  onDestroy()
  : void
  {
    return;
  }

  /**
   * Get the scene name.
   * */
  getName()
  : string
  {

    return this._m_name;

  }

  _init(_game: HkGame, _name: string)
  : void
  {

    this.game = _game;

    this._m_name = _name;

    // Initialize each scene system.

    const cameras = new HkCameraManager();
    this.cameras = cameras;

    cameras.init(_game, this);

    const gameObjects = new HkGameObjectsManager();
    this.gameObjects = gameObjects;

    gameObjects.init(_game, this);

    // Start each scene system.

    cameras.start(_game, this);

    gameObjects.start(_game, this);

    return;

  }

  _update(_dt: number)
  : void
  {

    this.cameras.update();

    this.gameObjects.update();

    this.onUpdate(_dt);

    return;
  }

  _draw()
  : void
  {

    this.cameras.draw();

    this.gameObjects.draw();

    this.onDraw();

    return;

  }

  _destroy()
  : void
  {

    this.onDestroy();

    this.gameObjects.destroy();
    this.gameObjects = null;

    this.cameras.destroy();
    this.cameras = null;   

    return;

  }

  _close()
  : void
  {

    this.onClose();

    return;

  }

  public game: HkGame;

  public cameras: HkCameraManager;

  public gameObjects: HkGameObjectsManager;

  private _m_name;

}