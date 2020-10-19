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
    const game: HkGame = new HkGame();

    // Create system map.

    game._m_hSystems = new Map<HK_SYSTEM_ID, HkISystem>();

    // Initialize the game.
    
    let oResult: HK_OPRESULT = game._init(_config);

    // Check operation result.

    if(oResult !== HK_OPRESULT.kSuccess)
    {
      throw new Error("Game couldn't be created.");
    }

    return game;
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

    oPresult = graphics.init(_config.graphics, this);

    // Success operation ?

    if (oPresult !== HK_OPRESULT.kSuccess)
    {
      return oPresult;
    }

    ///////////////////////////////////
    // TODO    

    return HK_OPRESULT.kSuccess;
  }  

  /**
   * Table of the engine systems.
   */
  private _m_hSystems: Map<HK_SYSTEM_ID, HkISystem>;  
}