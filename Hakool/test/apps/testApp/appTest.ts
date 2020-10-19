import
{
  HkContextConfig,
  HkGame,
  HkGameConfig,
  HK_GRAPHICS_VERSION,
  HK_POWER_PREFERENCE
} from "index";

class App
{
  start()
  {
    const config: HkGameConfig = new HkGameConfig();

    // Graphics Configurations

    config.graphics.canvasId = "appBox";
    config.graphics.apiVersion = HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental;

    // Context Configurations

    const contextConfig: HkContextConfig = config.graphics.contextConfiguration;

    contextConfig.clearColor.set(1.0, 0.0, 0.0);  // Red clear color.
    contextConfig.antialias = true;               // Anti-alias is cool
    contextConfig.powerPreference
      = HK_POWER_PREFERENCE.kHighPerformance;     // Render performance vs Power consumption

    // Create the Game !!

    HkGame.Create(config);

    return;
  }
}

export = App;