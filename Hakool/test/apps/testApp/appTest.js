define(["require", "exports", "index"], function (require, exports, index_1) {
    "use strict";
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
            index_1.HkGame.Create(config);
            return;
        };
        return App;
    }());
    return App;
});
//# sourceMappingURL=appTest.js.map