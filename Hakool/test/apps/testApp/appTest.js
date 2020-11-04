var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "index"], function (require, exports, index_1) {
    "use strict";
    var MainScene = (function (_super) {
        __extends(MainScene, _super);
        function MainScene() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MainScene.prototype.onStart = function () {
            this.time = 0.0;
            this.duration = 5.0;
            this.colorA = new index_1.HkColor(0.5, 0.0, 0.0, 1.0);
            this.colorB = new index_1.HkColor(0.0, 0.5, 0.0, 1.0);
            this.colorC = new index_1.HkColor();
            return;
        };
        MainScene.prototype.onUpdate = function (_deltaTime) {
            this.time += _deltaTime;
            if (this.time <= this.duration) {
                var t = this.time / this.duration;
                index_1.HkColor.LinearInterpolation(this.colorA, this.colorB, t, this.colorC);
                this.game.graphics.getContext().setClearColor(this.colorC);
            }
            else {
                this.time = 0;
                this.swapColors();
            }
            return;
        };
        MainScene.prototype.onDestroy = function () {
            return;
        };
        MainScene.prototype.onDraw = function () {
            return;
        };
        MainScene.prototype.swapColors = function () {
            this.colorC.color.copy(this.colorA.color);
            this.colorA.color.copy(this.colorB.color);
            this.colorB.color.copy(this.colorC.color);
            return;
        };
        return MainScene;
    }(index_1.HkScene));
    var App = (function () {
        function App() {
        }
        App.prototype.start = function () {
            var config = new index_1.HkGameConfig();
            config.graphics.canvasId = "appBox";
            config.graphics.apiVersion = index_1.HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental;
            var contextConfig = config.graphics.contextConfiguration;
            contextConfig.clearColor.set(1.0, 0.0, 0.0);
            contextConfig.antialias = true;
            contextConfig.powerPreference
                = index_1.HK_POWER_PREFERENCE.kHighPerformance;
            var game = index_1.HkGame.Create(config);
            game.scene.addScene("main", new MainScene());
            game.start("main");
            return;
        };
        return App;
    }());
    return App;
});
//# sourceMappingURL=appTest.js.map