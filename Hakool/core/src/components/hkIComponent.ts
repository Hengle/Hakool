import { HkGame } from "../game/hkGame";
import { HkScene } from "../systems/scene/hkScene";

export interface HkIComponent
{
  _init(_game: HkGame, _scene: HkScene)
  : void;

  _start(_scene: HkScene)
  : void;

  _update()
  : void;

  _draw()
  : void;

  _destroy()
  : void;
}