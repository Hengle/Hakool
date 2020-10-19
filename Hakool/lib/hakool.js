/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file hakool.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since August-17-2020
 */
define("hakool", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hakool = void 0;
    var Hakool = /** @class */ (function () {
        function Hakool() {
            console.log("Hakool class.");
            return;
        }
        return Hakool;
    }());
    exports.Hakool = Hakool;
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file hkEnums.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-08-2020
 */
define("utilities/hkEnums", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HK_SYSTEM_ID = exports.HK_OPRESULT = exports.HK_POWER_PREFERENCE = exports.HK_GRAPHICS_VERSION = void 0;
    exports.HK_GRAPHICS_VERSION = Object.freeze({
        /**
         * WebGL 1 (Open GL ES 2.0).
         */
        kWebGL: 0,
        /**
         * WebGL Experimental (Open GL ES 2.0).
         */
        kWebGLExperimental: 1,
        /**
         * WebGL 2 (Open GL ES 3.0).
         */
        kWebGL2: 2,
        /**
         * WebGL 2 Experimental (Open GL ES 3.0).
         */
        kWebGL2Experimental: 3,
        /**
         * WebGL 1 or WebGL 1 Experimental (Open GL ES 2.0).
         */
        KWebGL_or_WebGLExperimental: 4,
        /**
         * WebGL 2 or WebGL 2 Experimental (Open GL ES 3.0).
         */
        kWebGL2_or_WebGL2Experimental: 5
    });
    exports.HK_POWER_PREFERENCE = Object.freeze({
        /**
         * The user agent decide which GPU configuration is most suitable.
         */
        kDefault: 0,
        /**
         * Prioritizes rendering performance over power consumption.
         */
        kHighPerformance: 1,
        /**
         * Prioritizes power saving over rendering performance.
         */
        kLowPower: 2
    });
    exports.HK_OPRESULT = Object.freeze({
        /**
         * Undefined result.
         */
        kUndefined: -1,
        /**
         * The Operation was a failure.
         */
        kFail: 0,
        /**
         * The Operation was a success.
         */
        kSuccess: 1,
        /**
         * The operation couldn't found a file.
         */
        kFile_not_found: 2,
        /**
         * The operation couldn't found an object.
         */
        kObject_not_found: 3,
        /**
         * Incompatible format.
         */
        kIncompatible_format: 4,
        /**
         * The operation found a null type.
         */
        kNull_type: 5,
        /**
         * The operation found an invalid type.
         */
        kInvalid_type: 6,
        /**
         * An object already exists.
         */
        kObject_already_exists: 7,
        /**
         * The operation is not implemented yet.
         */
        kUnimplemented_operation: 8
    });
    exports.HK_SYSTEM_ID = Object.freeze({
        /**
         * Undefined.
         */
        kUndefined: -1,
        /**
         * Graphics System.
         */
        kGraphics: 0
    });
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file hkCommons.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-08-2020
 */
define("utilities/hkCommons", ["require", "exports", "utilities/hkEnums"], function (require, exports, hkEnums_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StringifyPowerPreference = void 0;
    function StringifyPowerPreference(_id) {
        switch (_id) {
            case hkEnums_1.HK_POWER_PREFERENCE.kDefault:
                return "default";
            case hkEnums_1.HK_POWER_PREFERENCE.kHighPerformance:
                return "high-performance";
            case hkEnums_1.HK_POWER_PREFERENCE.kLowPower:
                return "low-power";
        }
    }
    exports.StringifyPowerPreference = StringifyPowerPreference;
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file hkVector4.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since October-19-2020
 */
define("utilities/hkVector4", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkVector4 = void 0;
    var HkVector4 = /** @class */ (function () {
        function HkVector4(_x, _y, _z, _w) {
            if (_x !== undefined) {
                this.x = _x;
            }
            if (_y !== undefined) {
                this.y = _y;
            }
            else {
                this.y = 0.0;
            }
            if (_z !== undefined) {
                this.z = _z;
            }
            else {
                this.z = 0.0;
            }
            if (_w !== undefined) {
                this.w = _w;
            }
            else {
                this.w = 0.0;
            }
            return;
        }
        HkVector4.prototype.set = function (_x, _y, _z, _w) {
            if (_x !== undefined) {
                this.x = _x;
            }
            if (_y !== undefined) {
                this.y = _y;
            }
            if (_z !== undefined) {
                this.z = _z;
            }
            if (_w !== undefined) {
                this.w = _w;
            }
            return;
        };
        HkVector4.prototype.scale = function (_scalar) {
            this.x *= _scalar;
            this.y *= _scalar;
            this.z *= _scalar;
            this.w *= _scalar;
            return;
        };
        return HkVector4;
    }());
    exports.HkVector4 = HkVector4;
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file hkColor.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since October-19-2020
 */
define("utilities/hkColor", ["require", "exports", "utilities/hkVector4"], function (require, exports, hkVector4_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkColor = void 0;
    var HkColor = /** @class */ (function () {
        function HkColor(_r, _g, _b, _a) {
            this.color = new hkVector4_1.HkVector4(_r, _g, _b, _a);
            return;
        }
        HkColor.prototype.set = function (_r, _g, _b, _a) {
            this.color.set(_r, _g, _b, _a);
            return;
        };
        HkColor.prototype.normalize = function () {
            this.color.scale(1.0 / 255);
            return;
        };
        return HkColor;
    }());
    exports.HkColor = HkColor;
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file HkIContext.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-11-2020
 */
define("systems/graphics/context/hkIContext", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file HkWebGLContext.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-11-2020
 */
define("systems/graphics/context/hkWebGLContext", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkWebGLContext = void 0;
    var HkWebGLContext = /** @class */ (function () {
        function HkWebGLContext() {
        }
        /****************************************************/
        /* Public                                           */
        /****************************************************/
        HkWebGLContext.prototype.init = function (_context, _apiVersion) {
            this._m_context = _context;
            this._m_apiVersion = _apiVersion;
            return;
        };
        HkWebGLContext.prototype.getContext = function () {
            return this._m_context;
        };
        HkWebGLContext.prototype.getAPIVersion = function () {
            return this._m_apiVersion;
        };
        HkWebGLContext.prototype.setClearColor = function (_color) {
            var color = _color.color;
            this._m_context.clearColor(color.x, color.y, color.z, color.w);
            return;
        };
        HkWebGLContext.prototype.clear = function () {
            var context = this._m_context;
            context.clear(context.COLOR_BUFFER_BIT);
            return;
        };
        return HkWebGLContext;
    }());
    exports.HkWebGLContext = HkWebGLContext;
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file HkContextConfig.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-08-2020
 */
define("systems/graphics/HkContextConfig", ["require", "exports", "utilities/hkColor", "utilities/hkEnums"], function (require, exports, hkColor_1, hkEnums_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkContextConfig = void 0;
    var HkContextConfig = /** @class */ (function () {
        /**
         * Create a context configuration object.
         *
         * @param _bAlpha Boolean that indicates whether the canvas contains an alpha
         * buffer. Default : true.
         * @param _bDepth Boolean that indicates if the drawing buffer has a depth
         * buffer of at least16 bits. Default : true.
         * @param _bStencil Boolean that indicates that the drawing buffer has a
         * stencil buffer of at least 8 bits. Default : false.
         * @param _bAntialias Boolean that indicates whether or not to perform
         * anti-aliasing. Default : true.
         * @param _powerPreference A hint to the user agent indicating what
         * configuration of GPU is suitable for the WebGL context. Default :
         * HK_POWER_PREFERENCE.kDefault.
         */
        function HkContextConfig(_bAlpha, _bDepth, _bStencil, _bAntialias, _clearColor, _powerPreference) {
            // Alpha buffer.
            if (_bAlpha !== undefined) {
                this.alpha = _bAlpha;
            }
            else {
                this.alpha = true;
            }
            // Depth buffer.
            if (_bDepth !== undefined) {
                this.depth = _bDepth;
            }
            else {
                this.depth = true;
            }
            // Stencil buffer.
            if (_bStencil !== undefined) {
                this.stencil = _bStencil;
            }
            else {
                this.stencil = false;
            }
            // Anti alias.
            if (_bAntialias !== undefined) {
                this.antialias = _bAntialias;
            }
            else {
                this.antialias = true;
            }
            // Back Color
            if (_clearColor !== undefined) {
                this.clearColor = _clearColor;
            }
            else {
                this.clearColor = new hkColor_1.HkColor(1.0, 0.0, 1.0, 1.0);
            }
            // Power preference.
            if (_powerPreference !== undefined) {
                this.powerPreference = _powerPreference;
            }
            else {
                this.powerPreference = hkEnums_2.HK_POWER_PREFERENCE.kDefault;
            }
        }
        return HkContextConfig;
    }());
    exports.HkContextConfig = HkContextConfig;
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file HkGraphicsConfig.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-08-2020
 */
define("systems/graphics/hkGraphicsConfig", ["require", "exports", "utilities/hkEnums", "systems/graphics/HkContextConfig"], function (require, exports, hkEnums_3, HkContextConfig_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkGraphicsConfig = void 0;
    /**
     * Configures the graphics system.
     */
    var HkGraphicsConfig = /** @class */ (function () {
        /**
         * Graphic configuration.
         *
         * @param _canvas_id The HTML Element Id where the application is going to be
         * drawn.
         * @param _api_version The graphics API version. Default :
         * HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental.
         * @param _context_configuration The graphics context configuration object.
         */
        function HkGraphicsConfig(_canvasId, _apiVersion, _contextConfiguration) {
            // HTML canvas element ID.
            this.canvasId = _canvasId;
            // Graphics API version.
            if (_apiVersion !== undefined) {
                this.apiVersion = _apiVersion;
            }
            else {
                this.apiVersion = hkEnums_3.HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental;
            }
            // Graphics context configuration.
            if (_contextConfiguration !== undefined) {
                this.contextConfiguration = _contextConfiguration;
            }
            else {
                this.contextConfiguration = new HkContextConfig_1.HkContextConfig();
            }
            return;
        }
        return HkGraphicsConfig;
    }());
    exports.HkGraphicsConfig = HkGraphicsConfig;
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file HkISystem.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-08-2020
 */
define("systems/hkISystem", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file hkGraphics.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-08-2020
 */
define("systems/graphics/HkIGraphics", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file HkGraphicsWebGL.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-08-2020
 */
define("systems/graphics/HkGraphicsWebGL", ["require", "exports", "utilities/hkCommons", "utilities/hkEnums", "systems/graphics/context/hkWebGLContext"], function (require, exports, hkCommons_1, hkEnums_4, hkWebGLContext_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkGraphicsWebGL = void 0;
    var HkGraphicsWebGL = /** @class */ (function () {
        /****************************************************/
        /* Private                                          */
        /****************************************************/
        /**
         * Private constructor.
         */
        function HkGraphicsWebGL() {
            return;
        }
        /**
         * Create a Graphic System.
         */
        HkGraphicsWebGL.Create = function () {
            var graphics = new HkGraphicsWebGL();
            return graphics;
        };
        /**
         * Initialize the Graphic System.
         *
         * Possible results :
         *
         * * kObject_not_found : The canvas was not found in the active HTML document.
         * * kIncompatible_format : This graphics module doesn't support the given
         * WebGL API version.
         * * kSuccess : Operation was a success.
         *
         * @param _config System configuration.
         *
         * @returns Operation result.
         */
        HkGraphicsWebGL.prototype.init = function (_config, _game) {
            this._m_APIVersion = _config.apiVersion;
            ///////////////////////////////////
            // Canvas Element
            var element = document.getElementById(_config.canvasId);
            if (element === null) {
                // Log error
                _game.logger.logError('No HTML Element found with an ID of : '
                    + _config.canvasId);
                // Return result.
                return hkEnums_4.HK_OPRESULT.kObject_not_found;
            }
            if (!(element instanceof HTMLCanvasElement)) {
                _game.logger.logError("The HTML Element with an ID of : "
                    + _config.canvasId
                    + " is not a canvas element");
                // Return result
                return hkEnums_4.HK_OPRESULT.kIncompatible_format;
            }
            var canvas = element;
            this._m_canvas = canvas;
            ///////////////////////////////////
            // Context Configuration
            // Get the power preference string.
            var strPowerPreference = hkCommons_1.StringifyPowerPreference(_config.contextConfiguration.powerPreference);
            // Create the context attributes object.
            var contextConfig = {
                alpha: _config.contextConfiguration.alpha,
                depth: _config.contextConfiguration.depth,
                stencil: _config.contextConfiguration.stencil,
                antialias: _config.contextConfiguration.antialias,
                powerPreference: strPowerPreference
            };
            ///////////////////////////////////
            // Graphics Context
            var apiVersion = _config.apiVersion;
            var context;
            if (apiVersion === hkEnums_4.HK_GRAPHICS_VERSION.kWebGL
                || apiVersion === hkEnums_4.HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental) {
                // Try to get the WebGL context.
                context = canvas.getContext('webgl', contextConfig);
                // or the Experimental WebGL context.
                if (context === null) {
                    context = canvas.getContext('experimental-webgl', contextConfig);
                }
            }
            else if (apiVersion === hkEnums_4.HK_GRAPHICS_VERSION.kWebGLExperimental) {
                // Get the experimental context.
                context = canvas.getContext('experimental-webgl', contextConfig);
            }
            else {
                // This Graphics module doesn't support the Graphics Version
                _game.logger.logError("Graphics WebGL Module doesn't support the given version");
                return hkEnums_4.HK_OPRESULT.kIncompatible_format;
            }
            // Check if it have the context.
            if (context === null) {
                _game.logger.logError("Browser doesn't support WebGL.");
                return hkEnums_4.HK_OPRESULT.kFail;
            }
            // Create context object.
            var iContext = new hkWebGLContext_1.HkWebGLContext();
            iContext.init(context, _config.apiVersion);
            // Clear color.
            iContext.setClearColor(_config.contextConfiguration.clearColor);
            iContext.clear();
            this._m_context = iContext;
            // Add system to game.
            _game.addSystem(hkEnums_4.HK_SYSTEM_ID.kGraphics, this);
            _game.graphics = this;
            // Return result
            return hkEnums_4.HK_OPRESULT.kSuccess;
        };
        HkGraphicsWebGL.prototype.getID = function () {
            return hkEnums_4.HK_SYSTEM_ID.kGraphics;
        };
        /**
         * Get the Graphics API version of this system.
         *
         * @returns Graphics API version ID.
         */
        HkGraphicsWebGL.prototype.getAPIVersion = function () {
            return this._m_APIVersion;
        };
        /**
         * Get the canvas's graphics context.
         */
        HkGraphicsWebGL.prototype.getContext = function () {
            return this._m_context;
        };
        /**
         * Get the HTML canvas element where the application is being drawn.
         */
        HkGraphicsWebGL.prototype.getCanvas = function () {
            return this._m_canvas;
        };
        return HkGraphicsWebGL;
    }());
    exports.HkGraphicsWebGL = HkGraphicsWebGL;
});
define("systems/logger/hkILogger", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file HkGameConfig.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-11-2020
 */
define("game/hkGameConfig", ["require", "exports", "systems/graphics/hkGraphicsConfig"], function (require, exports, hkGraphicsConfig_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkGameConfig = void 0;
    /**
     * Configuration object for the game.
     */
    var HkGameConfig = /** @class */ (function () {
        function HkGameConfig() {
            this.graphics = new hkGraphicsConfig_1.HkGraphicsConfig("");
            return;
        }
        return HkGameConfig;
    }());
    exports.HkGameConfig = HkGameConfig;
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file HkLogger.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-12-2020
 */
define("systems/logger/hkLogger", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkLogger = void 0;
    var HkLogger = /** @class */ (function () {
        /**
         * Private constructor.
         */
        function HkLogger() {
        }
        /****************************************************/
        /* Public                                           */
        /****************************************************/
        HkLogger.Create = function (_config) {
            var logger = new HkLogger();
            logger._init(_config);
            return logger;
        };
        HkLogger.prototype.log = function (_msg) {
            console.log(_msg);
            return;
        };
        HkLogger.prototype.logError = function (_msg) {
            console.error(_msg);
            return;
        };
        HkLogger.prototype.logWarning = function (_msg) {
            console.warn(_msg);
            return;
        };
        /****************************************************/
        /* Private                                          */
        /****************************************************/
        /**
         *
         * @param _config
         */
        HkLogger.prototype._init = function (_config) {
            // TODO.
            return;
        };
        return HkLogger;
    }());
    exports.HkLogger = HkLogger;
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file HkGame.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-11-2020
 */
define("game/hkGame", ["require", "exports", "systems/graphics/HkGraphicsWebGL", "systems/logger/hkLogger", "utilities/hkEnums"], function (require, exports, HkGraphicsWebGL_1, hkLogger_1, hkEnums_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkGame = void 0;
    var HkGame = /** @class */ (function () {
        /****************************************************/
        /* Private                                          */
        /****************************************************/
        /**
         * Private constructor.
         */
        function HkGame() {
        }
        /****************************************************/
        /* Public                                           */
        /****************************************************/
        /**
         * Create a new Hakool Game.
         */
        HkGame.Create = function (_config) {
            var game = new HkGame();
            // Create system map.
            game._m_hSystems = new Map();
            // Initialize the game.
            var oResult = game._init(_config);
            // Check operation result.
            if (oResult !== hkEnums_5.HK_OPRESULT.kSuccess) {
                throw new Error("Game couldn't be created.");
            }
            return game;
        };
        /**
         * Adds a system to this game.
         *
         * @param _id The system ID.
         * @param _system System.
         */
        HkGame.prototype.addSystem = function (_id, _system) {
            this._m_hSystems.set(_id, _system);
            return;
        };
        /**
         * Initialize this Game.
         */
        HkGame.prototype._init = function (_config) {
            ///////////////////////////////////
            // Logger
            // Create the game logger.
            this.logger = hkLogger_1.HkLogger.Create(_config);
            ///////////////////////////////////
            // Graphic System
            var graphicsAPIv = _config.graphics.apiVersion;
            var graphics = null;
            var oPresult;
            if (graphicsAPIv === hkEnums_5.HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental
                || graphicsAPIv === hkEnums_5.HK_GRAPHICS_VERSION.kWebGLExperimental
                || graphicsAPIv === hkEnums_5.HK_GRAPHICS_VERSION.kWebGL) {
                // WebGL 1 Graphics System.
                graphics = HkGraphicsWebGL_1.HkGraphicsWebGL.Create();
            }
            else {
                // TODO
            }
            // Initialize Graphics.
            oPresult = graphics.init(_config.graphics, this);
            // Success operation ?
            if (oPresult !== hkEnums_5.HK_OPRESULT.kSuccess) {
                return oPresult;
            }
            ///////////////////////////////////
            // TODO    
            return hkEnums_5.HK_OPRESULT.kSuccess;
        };
        return HkGame;
    }());
    exports.HkGame = HkGame;
});
define("index", ["require", "exports", "hakool", "game/hkGame", "game/hkGameConfig", "systems/graphics/hkGraphicsConfig", "systems/graphics/HkContextConfig", "utilities/hkVector4", "utilities/hkColor", "utilities/hkEnums"], function (require, exports, hakool_1, hkGame_1, hkGameConfig_1, hkGraphicsConfig_2, hkContextConfig_1, hkVector4_2, hkColor_2, hkEnums_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Object.defineProperty(exports, "Hakool", { enumerable: true, get: function () { return hakool_1.Hakool; } });
    Object.defineProperty(exports, "HkGame", { enumerable: true, get: function () { return hkGame_1.HkGame; } });
    Object.defineProperty(exports, "HkGameConfig", { enumerable: true, get: function () { return hkGameConfig_1.HkGameConfig; } });
    Object.defineProperty(exports, "HkGraphicsConfig", { enumerable: true, get: function () { return hkGraphicsConfig_2.HkGraphicsConfig; } });
    Object.defineProperty(exports, "HkContextConfig", { enumerable: true, get: function () { return hkContextConfig_1.HkContextConfig; } });
    Object.defineProperty(exports, "HkVector4", { enumerable: true, get: function () { return hkVector4_2.HkVector4; } });
    Object.defineProperty(exports, "HkColor", { enumerable: true, get: function () { return hkColor_2.HkColor; } });
    Object.defineProperty(exports, "HK_GRAPHICS_VERSION", { enumerable: true, get: function () { return hkEnums_6.HK_GRAPHICS_VERSION; } });
    Object.defineProperty(exports, "HK_POWER_PREFERENCE", { enumerable: true, get: function () { return hkEnums_6.HK_POWER_PREFERENCE; } });
    Object.defineProperty(exports, "HK_OPRESULT", { enumerable: true, get: function () { return hkEnums_6.HK_OPRESULT; } });
    Object.defineProperty(exports, "HK_SYSTEM_ID", { enumerable: true, get: function () { return hkEnums_6.HK_SYSTEM_ID; } });
});
//# sourceMappingURL=hakool.js.map