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
    class Hakool {
        constructor() {
            console.log("Hakool class.");
            return;
        }
    }
    exports.Hakool = Hakool;
});
define("index", ["require", "exports", "hakool"], function (require, exports, hakool_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Object.defineProperty(exports, "Hakool", { enumerable: true, get: function () { return hakool_1.Hakool; } });
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
 * @file hkIContext.ts
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
 * @file hkWebGLContext.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-11-2020
 */
define("systems/graphics/context/hkWebGLContext", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hkWebGLContext = void 0;
    class hkWebGLContext {
        /****************************************************/
        /* Public                                           */
        /****************************************************/
        init(_context, _api_v) {
            this._m_context = _context;
            this._m_api_version = _api_v;
            return;
        }
        getContext() {
            return this._m_context;
        }
        getAPIVersion() {
            return this._m_api_version;
        }
    }
    exports.hkWebGLContext = hkWebGLContext;
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file hkContextConfig.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-08-2020
 */
define("systems/graphics/hkContextConfig", ["require", "exports", "utilities/hkEnums"], function (require, exports, hkEnums_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hkContextConfig = void 0;
    class hkContextConfig {
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
        constructor(_bAlpha, _bDepth, _bStencil, _bAntialias, _powerPreference) {
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
            // Antialias.
            if (_bAntialias !== undefined) {
                this.antialias = _bAntialias;
            }
            else {
                this.antialias = true;
            }
            // Power preference.
            if (_powerPreference !== undefined) {
                this.powerPreference = _powerPreference;
            }
            else {
                this.powerPreference = hkEnums_2.HK_POWER_PREFERENCE.kDefault;
            }
        }
    }
    exports.hkContextConfig = hkContextConfig;
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file hkGraphicsConfig.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-08-2020
 */
define("systems/graphics/hkGraphicsConfig", ["require", "exports", "utilities/hkEnums", "systems/graphics/hkContextConfig"], function (require, exports, hkEnums_3, hkContextConfig_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hkGraphicsConfig = void 0;
    /**
     * Configures the graphics system.
     */
    class hkGraphicsConfig {
        /**
         * Graphic configuration.
         *
         * @param _canvas_id The HTML Element Id where the application is going to be
         * drawn.
         * @param _api_version The graphics API version. Default :
         * HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental.
         * @param _context_configuration The graphics context configuration object.
         */
        constructor(_canvas_id = "", _api_version, _context_configuration) {
            // HTML canvas element ID.
            this.canvas_id = _canvas_id;
            // Graphics API version.
            if (_api_version !== undefined) {
                this.api_version = _api_version;
            }
            else {
                this.api_version = hkEnums_3.HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental;
            }
            // Graphics context configuration.
            if (_context_configuration !== undefined) {
                this.context_configuration = _context_configuration;
            }
            else {
                this.context_configuration = new hkContextConfig_1.hkContextConfig;
            }
            return;
        }
    }
    exports.hkGraphicsConfig = hkGraphicsConfig;
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file hkISystem.ts
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
define("systems/graphics/hkIGraphics", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file hkGraphicsWebGL.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-08-2020
 */
define("systems/graphics/hkGraphicsWebGL", ["require", "exports", "utilities/hkCommons", "utilities/hkEnums", "systems/graphics/context/hkWebGLContext"], function (require, exports, hkCommons_1, hkEnums_4, hkWebGLContext_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hkGraphicsWebGL = void 0;
    class hkGraphicsWebGL {
        /****************************************************/
        /* Private                                          */
        /****************************************************/
        /**
         * Private constructor.
         */
        constructor() {
            this._m_canvas = new HTMLCanvasElement();
            return;
        }
        /**
         * Create a Graphic System.
         */
        static Create() {
            let graphics = new hkGraphicsWebGL();
            return graphics;
        }
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
        init(_config) {
            ///////////////////////////////////
            // Canvas Element
            let canvas = document.getElementById(_config.canvas_id);
            if (canvas === null) {
                // Log error
                console.error('No canvas (HTML Element) with the specified ID exists. ID : '
                    + _config.canvas_id);
                // Return result.
                return hkEnums_4.HK_OPRESULT.kObject_not_found;
            }
            ///////////////////////////////////
            // Context Configuration
            // Get the power preference string.
            let strPowerPreference = hkCommons_1.StringifyPowerPreference(_config.context_configuration.powerPreference);
            // Create the context attributes object.
            let contextConfig = {
                alpha: _config.context_configuration.alpha,
                depth: _config.context_configuration.depth,
                stencil: _config.context_configuration.stencil,
                antialias: _config.context_configuration.antialias,
                powerPreference: strPowerPreference
            };
            ///////////////////////////////////
            // Graphics Context
            let api_v = _config.api_version;
            let context;
            if (api_v == hkEnums_4.HK_GRAPHICS_VERSION.kWebGL
                || api_v == hkEnums_4.HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental) {
                // Try to get the WebGL context.
                context = canvas.getContext('webgl', contextConfig);
                // or the Experimental WebGL context.
                if (context === null) {
                    context = canvas.getContext('experimental-webgl', contextConfig);
                }
            }
            else if (api_v == hkEnums_4.HK_GRAPHICS_VERSION.kWebGLExperimental) {
                // Get the experimental context.
                context = canvas.getContext('experimental-webgl', contextConfig);
            }
            else {
                // This Graphics module doesn't support the Graphics Version
                console.error("Graphics WebGL Module doesn't support the given version");
                return hkEnums_4.HK_OPRESULT.kIncompatible_format;
            }
            // Check if it have the context.
            if (context === null) {
                throw new Error("Browser doesn't support WebGL.");
            }
            // Save the context.
            let iContext = new hkWebGLContext_1.hkWebGLContext();
            iContext.init(context, this._m_APIVersion);
            this._m_context = iContext;
            return hkEnums_4.HK_OPRESULT.kSuccess;
        }
        getID() {
            return hkEnums_4.HK_SYSTEM_ID.kGraphics;
        }
        /**
         * Get the Graphics API version of this system.
         *
         * @returns Graphics API version ID.
         */
        getAPIVersion() {
            return this._m_APIVersion;
        }
        /**
         * Get the canvas's graphics context.
         */
        getContext() {
            return this._m_context;
        }
        /**
         * Get the HTML canvas element where the application is being drawn.
         */
        getCanvas() {
            return this._m_canvas;
        }
    }
    exports.hkGraphicsWebGL = hkGraphicsWebGL;
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file hkGameConfig.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-11-2020
 */
define("game/hkGameConfig", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hkGameConfig = void 0;
    /**
     * Configuration object for the game.
     */
    class hkGameConfig {
    }
    exports.hkGameConfig = hkGameConfig;
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file hkGame.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-11-2020
 */
define("game/hkGame", ["require", "exports", "systems/graphics/hkGraphicsWebGL", "utilities/hkEnums"], function (require, exports, hkGraphicsWebGL_1, hkEnums_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hkGame = void 0;
    class hkGame {
        /****************************************************/
        /* Private                                          */
        /****************************************************/
        /**
         * Private constructor.
         */
        constructor() { }
        /****************************************************/
        /* Public                                           */
        /****************************************************/
        /**
         * Create a new Hakool Game.
         */
        static Create(_config) {
            let game = new hkGame();
            // Initialize the game.
            let oResult;
            oResult = game._init(_config);
            // Check operation result.
            if (oResult !== hkEnums_5.HK_OPRESULT.kSuccess) {
                throw new Error("Game couldn't be created.");
            }
            return game;
        }
        /**
         * Initialize this Game.
         */
        _init(_config) {
            ///////////////////////////////////
            // Logger
            ///////////////////////////////////
            // Graphic System
            let graphicsAPIv = _config.graphics.api_version;
            let graphics = null;
            let oPresult;
            if (graphicsAPIv === hkEnums_5.HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental
                || graphicsAPIv === hkEnums_5.HK_GRAPHICS_VERSION.kWebGLExperimental
                || graphicsAPIv === hkEnums_5.HK_GRAPHICS_VERSION.kWebGL) {
                // WebGL 1 Graphics System.
                graphics = hkGraphicsWebGL_1.hkGraphicsWebGL.Create();
            }
            else {
                // TODO
            }
            let hSystems = this._m_hSystems;
            hSystems.set(graphics.getID(), graphics);
            // Save graphics in a quick reference.
            this._m_graphics = graphics;
            ///////////////////////////////////
            // TODO    
            return hkEnums_5.HK_OPRESULT.kSuccess;
        }
    }
    exports.hkGame = hkGame;
});
/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary
 *
 * @file hkLogger.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-12-2020
 */
define("logger/hkLogger", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hkLogger = void 0;
    class hkLogger {
        /**
         * Private constructor.
         */
        constructor() { }
        /****************************************************/
        /* Public                                           */
        /****************************************************/
        Create(_config) {
            let logger = new hkLogger();
            return logger;
        }
        /****************************************************/
        /* Private                                          */
        /****************************************************/
        /**
         *
         * @param _config
         */
        _init(_config) {
        }
    }
    exports.hkLogger = hkLogger;
});
//# sourceMappingURL=hakool.js.map