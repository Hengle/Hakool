/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary 
 *
 * @file HkGame.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-11-2020
 */

import { hkGraphicsWebGL } from "../systems/graphics/hkGraphicsWebGL";
import { hkIGraphics } from "../systems/graphics/hkIGraphics";
import { hkISystem } from "../systems/hkISystem";
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
  static Create(_config : HkGameConfig)
  : HkGame
  {
    let game : HkGame = new HkGame();

    // Initialize the game.
    
    let oResult : HK_OPRESULT;

    oResult = game._init(_config);

    // Check operation result.

    if(oResult !== HK_OPRESULT.kSuccess)
    {
      throw new Error("Game couldn't be created.");
    }

    return game;
  }

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
  private _init(_config : HkGameConfig)
  : HK_OPRESULT
  {
    ///////////////////////////////////
    // Logger



    ///////////////////////////////////
    // Graphic System

    let graphicsAPIv = _config.graphics.api_version

    let graphics : hkIGraphics = null;

    let oPresult : HK_OPRESULT;

    if
    (
      graphicsAPIv === HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental
      || graphicsAPIv === HK_GRAPHICS_VERSION.kWebGLExperimental
      || graphicsAPIv === HK_GRAPHICS_VERSION.kWebGL
    )
    {
      // WebGL 1 Graphics System.
      
      graphics = hkGraphicsWebGL.Create();      
    }
    else
    {
      // TODO
    }

    let hSystems = this._m_hSystems;

    hSystems.set(graphics.getID(), graphics);

    // Save graphics in a quick reference.

    this._m_graphics = graphics;

    ///////////////////////////////////
    // TODO    

    return HK_OPRESULT.kSuccess;
  }

  /**
   * Reference to the graphics system, also saved in the table of systems.
   */
  private _m_graphics : hkIGraphics;

  /**
   * Table of the engine systems.
   */
  private _m_hSystems : Map<HK_SYSTEM_ID, hkISystem>;
}