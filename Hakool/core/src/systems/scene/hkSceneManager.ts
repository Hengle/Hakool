import { HkGame } from "../../index";
import { HK_OPRESULT, HK_SYSTEM_ID } from "../../utilities/hkEnums";
import { HkISystem } from "../hkISystem";
import { HkNullScene } from "./hkNullScene";
import { HkScene } from "./hkScene";

export class HkSceneManager
  implements HkISystem
{

  static Create()
    : HkSceneManager
  {

    let sceneManager: HkSceneManager = new HkSceneManager();

    sceneManager._m_hScenes = new Map<string, HkScene>();

    sceneManager._m_active = new HkNullScene();

    return sceneManager;

  }

  init(_game: HkGame, _config: any)
  : HK_OPRESULT
  {

    this._m_game = _game;

    return HK_OPRESULT.kSuccess;

  }

  update()
  : void
  {

    this._m_active._update(this._m_game.deltaTime);

    return;

  }

  draw()
  : void
  {

    this._m_active._draw();

    return;

  }

  getID()
    : HK_SYSTEM_ID
  {

    return HK_SYSTEM_ID.kSceneManager;

  }

  startScene(_key: string)
  : HkScene
  {

    const scene = this.getScene(_key);

    if (scene !== null)
    {

      this._m_active._close();

      this._m_active._destroy();

      this._m_active = scene;

      this._m_active._init(this._m_game, _key);

      this._m_active.onStart();

    }

    return scene;

  }

  addScene(_key: string, _scene: HkScene)
    : HK_OPRESULT
  {

    if (this.hasScene(_key))
    {

      this._m_game.logger.logError
      (
        "There is already a scene with the key : " + _key
      );

      return HK_OPRESULT.kObject_already_exists;

    }

    this._m_hScenes.set(_key, _scene);

    return HK_OPRESULT.kSuccess;

  }

  hasScene(_key: string)
    : boolean
  {

    return this._m_hScenes.has(_key);

  }

  getScene(_key: string)
  : HkScene
  {

    const hScenes = this._m_hScenes;

    if (hScenes.has(_key))
    {

      return hScenes.get(_key);

    }
    else
    {

      this._m_game.logger.logError("Scene not found: " + _key);

    }

    return null;

  }

  private constructor()
  { }    

  private _m_hScenes: Map<string, HkScene>;

  private _m_active: HkScene;

  private _m_game: HkGame;
}