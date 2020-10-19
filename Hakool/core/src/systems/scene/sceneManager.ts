import { HK_SYSTEM_ID } from "../../utilities/hkEnums";
import { HkISystem } from "../hkISystem";

export class SceneManager
  implements HkISystem
{
  getID()
    : HK_SYSTEM_ID
  {
    return HK_SYSTEM_ID.kSceneManager;
  }
}