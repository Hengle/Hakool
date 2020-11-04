import { HkCmpCamera } from "../../../components/hkCmpCamera";
import { HkGameObject } from "../../../components/hkGameObject";
import { HkGame, HkScene } from "../../../index";
import { HkISceneSystem } from "../hkSceneSystem";

export class HkGameObjectsManager
  implements HkISceneSystem
{

  init(_game: HkGame, _scene: HkScene)
  : void
  {

    this._m_game = _game;

    this._m_scene = _scene;

    this._m_hGameObjects = new Map<string, HkGameObject>();

    // Create Default Camera.

    const cameraGO: HkGameObject = this.createGameObject("Camera");

    cameraGO.addComponent(new HkCmpCamera());

    return;

  }

  start(_game: HkGame, _scene: HkScene)
  : void
  {

    // Init each gameObject.

    this._m_hGameObjects.forEach
    (
      function (_gameObject: HkGameObject)
      {

        _gameObject.init(_game, _scene);

        return;

      },
      this
    );

    // Start each gameObject.

    this._m_hGameObjects.forEach
    (
      function (_gameObject: HkGameObject)
      {

        _gameObject.start(_scene);

        return;

      },
      this
    )

    return;

  }

  update()
  : void
  {

    // Update each gameObject.

    this._m_hGameObjects.forEach
    (
      this._updateGameObject,
      this
    );

    return;

  }

  draw()
  : void
  {

    // Draw each gameObject.

    this._m_hGameObjects.forEach
    (
      this._drawGameObject,
      this
    );

    return;

  }

  createGameObject(_name: string)
  : HkGameObject
  {

    if (!this.hasGameObject(_name))
    {

      const gameObject = new HkGameObject(_name);

      this._m_hGameObjects.set(_name, gameObject);

      return gameObject;

    }

    this._m_game.logger.logError
    (
      "Already exists a gameObject with name: " + _name
    );

    return null;

  }

  hasGameObject(_name: string)
  : boolean
  {

    return this._m_hGameObjects.has(_name);

  }

  getGameObject(_name: string)
  : HkGameObject
  {

    return this._m_hGameObjects.get(_name);

  }

  destroy()
  : void
  {

    // Destroy each gameObject.

    this._m_hGameObjects.forEach
    (
      function (_gameObject: HkGameObject)
      {

        _gameObject.destroy();

        return;

      },
      this
    );

    return;

  }

  private _updateGameObject(_gameObject: HkGameObject)
  : void
  {

    _gameObject.update();

    return;

  }

  private _drawGameObject(_gameObject: HkGameObject)
  : void
  {

    _gameObject.draw();

    return;

  }

  private _m_hGameObjects: Map<string, HkGameObject>;

  private _m_game: HkGame;

  private _m_scene: HkScene;

}