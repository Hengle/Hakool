import
{
    HkColor,
  HkContextConfig,
  HkGame,
  HkGameConfig,
  HkScene,
  HK_GRAPHICS_VERSION,
  HK_POWER_PREFERENCE
} from "index";

class MainScene
  extends HkScene
{

  onStart()
    : void
  {

    this.time = 0.0;

    this.duration = 5.0;

    this.colorA = new HkColor(0.5, 0.0, 0.0, 1.0);
    this.colorB = new HkColor(0.0, 0.5, 0.0, 1.0);
    this.colorC = new HkColor();

    return;

  }

  onUpdate(_deltaTime: number)
    : void
  {

    this.time += _deltaTime;

    if (this.time <= this.duration)
    {

      const t = this.time / this.duration;

      HkColor.LinearInterpolation(this.colorA, this.colorB, t, this.colorC);

      this.game.graphics.getContext().setClearColor(this.colorC);

    }
    else
    {

      this.time = 0;

      this.swapColors();

    }
      
    return;

  }

  onDestroy()
    : void
  {    

    return;

  }

  onDraw()
    : void
  {

    return;

  }

  swapColors()
    : void
  {

    this.colorC.color.copy(this.colorA.color);

    this.colorA.color.copy(this.colorB.color);

    this.colorB.color.copy(this.colorC.color);

    return;

  }


  time: number;

  duration: number;

  colorA: HkColor;

  colorB: HkColor;

  colorC: HkColor;

}

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

    // Create the game.

    const game: HkGame = HkGame.Create(config);

    // Create Scene.

    game.scene.addScene("main", new MainScene());

    // Start Engine.

    game.start("main");

    return;
  }
}

export = App;