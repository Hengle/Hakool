/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary 
 *
 * @file HkGame.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-11-2020
 */

import { HkGraphicsWebGL } from "../systems/graphics/HkGraphicsWebGL";
import { HkIGraphics } from "../systems/graphics/HkIGraphics";
import { HkISystem } from "../systems/HkISystem";
import { HkILogger } from "../systems/logger/hkILogger";
import { HkLogger } from "../systems/logger/hkLogger";
import { HkSceneManager } from "../systems/scene/hkSceneManager";
import { HK_GRAPHICS_VERSION, HK_OPRESULT, HK_SYSTEM_ID } from "../utilities/hkEnums";
import { HkGameConfig } from "./hkGameConfig";

export class HkGame
{
  /****************************************************/
  /* Public                                           */
  /****************************************************/
  
  /**
   * Create a new Hakool Game.
   */
  static Create(_config: HkGameConfig)
  : HkGame
  {

    if (HkGame._INSTANCE !== undefined)
    {

      throw new Error("There is already an instance of a Hakool Game.");

    }

    // Create instance.

    const game: HkGame = new HkGame();

    HkGame._INSTANCE = game;

    // Create system map.

    game._m_hSystems = new Map<HK_SYSTEM_ID, HkISystem>();

    // Initialize the game.
    
    const oResult: HK_OPRESULT = game._init(_config);

    // Check operation result.

    if(oResult !== HK_OPRESULT.kSuccess)
    {

      throw new Error("Game couldn't be created.");

    }

    game.deltaTime = 0;

    game._m_isRunning = false;

    game._m_lastTimeStamp = 0;

    return game;

  }

  static GameLoop()
  : void
  {

    HkGame._INSTANCE._loop();

    requestAnimationFrame(HkGame.GameLoop);

    return;
    
  }

  /**
   * Start the engine, with the main scene.
   * 
   * @param _name the main scene name.
   */
  start(_name: string)
  : void
  {

    if (!this._m_isRunning)
    {

      this.scene.startScene(_name);

      this._m_isRunning = true;

      this._m_lastTimeStamp = Date.now();

      HkGame.GameLoop();

    }

    return;
  }

  /**
   * Adds a system to this game.
   * 
   * @param _id The system ID.
   * @param _system System.
   */
  addSystem(_id: HK_SYSTEM_ID, _system: HkISystem)
  : void
  {

    this._m_hSystems.set(_id, _system);

    return;

  }

  /**
   * The Logger Manager of the Game.
   * */
  logger: HkILogger;

  /**
   * Reference to the graphics system.
   */
  graphics: HkIGraphics;

  /**
   * The scene manager of the game.
   * **/
  scene: HkSceneManager;

  /**
   * Game loop delta time.
   * */
  deltaTime: number;

  /****************************************************/
  /* Private                                          */
  /****************************************************/
  
  /**
   * Private constructor.
   */
  private constructor()
  { }

  /**
   * Initialize this Game.
   */
  private _init(_config: HkGameConfig)
  : HK_OPRESULT
  {
    ///////////////////////////////////
    // Logger

    // Create the game logger.

    this.logger = HkLogger.Create(_config);

    ///////////////////////////////////
    // Graphic System

    const graphicsAPIv = _config.graphics.apiVersion

    let graphics: HkIGraphics = null;

    let oPresult: HK_OPRESULT;

    if
    (
      graphicsAPIv === HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental
      || graphicsAPIv === HK_GRAPHICS_VERSION.kWebGLExperimental
      || graphicsAPIv === HK_GRAPHICS_VERSION.kWebGL
    )
    {
      // WebGL 1 Graphics System.
      
      graphics = HkGraphicsWebGL.Create();

    }
    else
    {
      // TODO
    }

    // Initialize Graphics.

    oPresult = graphics.init(this, _config.graphics);

    // Success operation ?

    if (oPresult !== HK_OPRESULT.kSuccess)
    {
      return oPresult;
    }

    this.addSystem(HK_SYSTEM_ID.kGraphics, graphics);

    ///////////////////////////////////
    // Scene Manager

    const sceneManager: HkSceneManager = HkSceneManager.Create();

    this.scene = sceneManager;

    sceneManager.init(this, undefined);

    this.addSystem(HK_SYSTEM_ID.kSceneManager, sceneManager);

    ///////////////////////////////////
    // TODO    

    return HK_OPRESULT.kSuccess;
  }  

  private _loop()
  : void
  {

    // Calculate delta time.

    const now = Date.now();

    this.deltaTime = (now - this._m_lastTimeStamp) * 0.001;

    this._m_lastTimeStamp = now;

    // update.

    this._update();

    // draw.

    this._draw();

    return;

  }

  private _update()
  : void
  {

    this._m_hSystems.forEach
    (
      this._updateSystem,
      this
    );

    return;

  }

  private _updateSystem(_system: HkISystem)
  : void
  {

    _system.update();

    return;

  }

  private _draw()
  : void
  {

    this._m_hSystems.forEach
    (
      this._drawSystem,
      this
    );

    return;

  }

  private _drawSystem(_system: HkISystem)
  : void
  {

    _system.draw();

    return;

  }

  private static _INSTANCE: HkGame;

  /**
   * Table of the engine systems.
   */
  private _m_hSystems: Map<HK_SYSTEM_ID, HkISystem>;  

  /**
   * Indicates if the game is running.
   * */
  private _m_isRunning: boolean;

  /**
   * Last time.
   * */
  private _m_lastTimeStamp: number;
}