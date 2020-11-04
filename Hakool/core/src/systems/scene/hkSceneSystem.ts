import { HkGame } from "../../game/hkGame";
import { HkScene } from "./hkScene";

export interface HkISceneSystem
{

  init(_game: HkGame, _scene: HkScene)
  : void;

  start(_game: HkGame, _scene: HkScene)
  : void;

  update()
  : void;

  draw()
  : void;

  destroy()
  : void;

}