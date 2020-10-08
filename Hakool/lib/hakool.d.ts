declare module "hakool" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file hakool.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since August-17-2020
     */
    export class Hakool {
        constructor();
    }
}
declare module "index" {
    export { Hakool } from "hakool";
}
declare module "utilities/hkEnums" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file hkEnums.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since September-08-2020
     */
    type EnumLiteralsOf<T extends object> = T[keyof T];
    /****************************************************/
    /****************************************************/
    /**
     * Used to configure the Graphic API version.
     */
    export type HK_GRAPHICS_VERSION = EnumLiteralsOf<typeof HK_GRAPHICS_VERSION>;
    export const HK_GRAPHICS_VERSION: Readonly<{
        /**
         * WebGL 1 (Open GL ES 2.0).
         */
        kWebGL: 0;
        /**
         * WebGL Experimental (Open GL ES 2.0).
         */
        kWebGLExperimental: 1;
        /**
         * WebGL 2 (Open GL ES 3.0).
         */
        kWebGL2: 2;
        /**
         * WebGL 2 Experimental (Open GL ES 3.0).
         */
        kWebGL2Experimental: 3;
        /**
         * WebGL 1 or WebGL 1 Experimental (Open GL ES 2.0).
         */
        KWebGL_or_WebGLExperimental: 4;
        /**
         * WebGL 2 or WebGL 2 Experimental (Open GL ES 3.0).
         */
        kWebGL2_or_WebGL2Experimental: 5;
    }>;
    /****************************************************/
    /****************************************************/
    /**
     * Used to configure the GPU power consumption for the application.
     */
    export type HK_POWER_PREFERENCE = EnumLiteralsOf<typeof HK_POWER_PREFERENCE>;
    export const HK_POWER_PREFERENCE: Readonly<{
        /**
         * The user agent decide which GPU configuration is most suitable.
         */
        kDefault: 0;
        /**
         * Prioritizes rendering performance over power consumption.
         */
        kHighPerformance: 1;
        /**
         * Prioritizes power saving over rendering performance.
         */
        kLowPower: 2;
    }>;
    /****************************************************/
    /****************************************************/
    /**
     * A result identifier, useful for keeping track of what happened during the
     * operation.
     */
    export type HK_OPRESULT = EnumLiteralsOf<typeof HK_OPRESULT>;
    export const HK_OPRESULT: Readonly<{
        /**
         * Undefined result.
         */
        kUndefined: -1;
        /**
         * The Operation was a failure.
         */
        kFail: 0;
        /**
         * The Operation was a success.
         */
        kSuccess: 1;
        /**
         * The operation couldn't found a file.
         */
        kFile_not_found: 2;
        /**
         * The operation couldn't found an object.
         */
        kObject_not_found: 3;
        /**
         * Incompatible format.
         */
        kIncompatible_format: 4;
        /**
         * The operation found a null type.
         */
        kNull_type: 5;
        /**
         * The operation found an invalid type.
         */
        kInvalid_type: 6;
        /**
         * An object already exists.
         */
        kObject_already_exists: 7;
        /**
         * The operation is not implemented yet.
         */
        kUnimplemented_operation: 8;
    }>;
    /****************************************************/
    /****************************************************/
    export type HK_SYSTEM_ID = EnumLiteralsOf<typeof HK_SYSTEM_ID>;
    export const HK_SYSTEM_ID: Readonly<{
        /**
         * Undefined.
         */
        kUndefined: -1;
        /**
         * Graphics System.
         */
        kGraphics: 0;
    }>;
}
declare module "utilities/hkCommons" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file hkCommons.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since September-08-2020
     */
    import { HK_POWER_PREFERENCE } from "utilities/hkEnums";
    export function StringifyPowerPreference(_id: HK_POWER_PREFERENCE): string;
}
declare module "systems/graphics/context/hkIContext" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file hkIContext.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since September-11-2020
     */
    import { HK_GRAPHICS_VERSION } from "utilities/hkEnums";
    export interface hkIContext {
        /****************************************************/
        /****************************************************/
        /**
         * Get the wrapped context.
         */
        getContext<T>(): T;
        /**
         * Get the API version of this context.
         */
        getAPIVersion(): HK_GRAPHICS_VERSION;
    }
}
declare module "systems/graphics/context/hkWebGLContext" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file hkWebGLContext.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since September-11-2020
     */
    import { HK_GRAPHICS_VERSION } from "utilities/hkEnums";
    import { hkIContext } from "systems/graphics/context/hkIContext";
    export class hkWebGLContext implements hkIContext {
        /****************************************************/
        /****************************************************/
        init(_context: WebGLRenderingContext, _api_v: HK_GRAPHICS_VERSION): void;
        getContext<T>(): T;
        getAPIVersion(): HK_GRAPHICS_VERSION;
        /****************************************************/
        /****************************************************/
        /**
         * The API Version of WebGL.
         */
        private _m_api_version;
        /**
         * The WebGL Rendering Context.
         */
        private _m_context;
    }
}
declare module "systems/graphics/hkContextConfig" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file hkContextConfig.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since September-08-2020
     */
    import { HK_POWER_PREFERENCE } from "utilities/hkEnums";
    export class hkContextConfig {
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
        constructor(_bAlpha?: boolean, _bDepth?: boolean, _bStencil?: boolean, _bAntialias?: boolean, _powerPreference?: HK_POWER_PREFERENCE);
        /**
         * Boolean that indicates whether the canvas contains an alpha buffer.
         */
        alpha: boolean;
        /**
         * Boolean that indicates if the drawing buffer has a depth buffer of at least
         * 16 bits.
         */
        depth: boolean;
        /**
         * Boolean that indicates that the drawing buffer has a stencil buffer of at
         * least 8 bits.
         */
        stencil: boolean;
        /**
         * Boolean that indicates whether or not to perform anti-aliasing.
         */
        antialias: boolean;
        /**
         * A hint to the user agent indicating what configuration of GPU is suitable
         * for the WebGL context.
         */
        powerPreference: HK_POWER_PREFERENCE;
    }
}
declare module "systems/graphics/hkGraphicsConfig" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file hkGraphicsConfig.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since September-08-2020
     */
    import { HK_GRAPHICS_VERSION } from "utilities/hkEnums";
    import { hkContextConfig } from "systems/graphics/hkContextConfig";
    /**
     * Configures the graphics system.
     */
    export class hkGraphicsConfig {
        /**
         * Graphic configuration.
         *
         * @param _canvas_id The HTML Element Id where the application is going to be
         * drawn.
         * @param _api_version The graphics API version. Default :
         * HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental.
         * @param _context_configuration The graphics context configuration object.
         */
        constructor(_canvas_id?: string, _api_version?: HK_GRAPHICS_VERSION, _context_configuration?: hkContextConfig);
        /**
         * The HTML Element Id where the application is going to be drawn.
         */
        canvas_id: string;
        /**
         * The graphics context configuration.
         */
        context_configuration: hkContextConfig;
        /**
         * The Graphics API version ID.
         */
        api_version: HK_GRAPHICS_VERSION;
    }
}
declare module "systems/hkISystem" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file hkISystem.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since September-08-2020
     */
    import { HK_SYSTEM_ID } from "utilities/hkEnums";
    export interface hkISystem {
        /**
         * Get the system identifier.
         *
         * @returns System id.
         */
        getID(): HK_SYSTEM_ID;
    }
}
declare module "systems/graphics/hkIGraphics" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file hkGraphics.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since September-08-2020
     */
    import { HK_GRAPHICS_VERSION, HK_OPRESULT } from "utilities/hkEnums";
    import { hkISystem } from "systems/hkISystem";
    import { hkIContext } from "systems/graphics/context/hkIContext";
    import { hkGraphicsConfig } from "systems/graphics/hkGraphicsConfig";
    export interface hkIGraphics extends hkISystem {
        /**
         * Initialize the Graphic System.
         *
         * Possible results :
         *
         * * kObject_not_found : The canvas was not found in the active HTML document.
         * * kSuccess : Operation was a success.
         *
         * @param _config System configuration.
         *
         * @returns Operation result.
         */
        init(_config: hkGraphicsConfig): HK_OPRESULT;
        /**
         * Get the HTML canvas element where the application is being drawn.
         */
        getCanvas(): HTMLCanvasElement;
        /**
         * Get the canvas's graphics context.
         */
        getContext(): hkIContext;
        /**
         * Get the Graphics API version of this system.
         */
        getAPIVersion(): HK_GRAPHICS_VERSION;
    }
}
declare module "systems/graphics/hkGraphicsWebGL" {
    import { HK_GRAPHICS_VERSION, HK_OPRESULT, HK_SYSTEM_ID } from "utilities/hkEnums";
    import { hkIContext } from "systems/graphics/context/hkIContext";
    import { hkGraphicsConfig } from "systems/graphics/hkGraphicsConfig";
    import { hkIGraphics } from "systems/graphics/hkIGraphics";
    export class hkGraphicsWebGL implements hkIGraphics {
        /**
         * Create a Graphic System.
         */
        static Create(): hkGraphicsWebGL;
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
        init(_config: hkGraphicsConfig): HK_OPRESULT;
        getID(): HK_SYSTEM_ID;
        /**
         * Get the Graphics API version of this system.
         *
         * @returns Graphics API version ID.
         */
        getAPIVersion(): HK_GRAPHICS_VERSION;
        /**
         * Get the canvas's graphics context.
         */
        getContext(): hkIContext;
        /**
         * Get the HTML canvas element where the application is being drawn.
         */
        getCanvas(): HTMLCanvasElement;
        /****************************************************/
        /****************************************************/
        /**
         * Private constructor.
         */
        constructor();
        /**
         * The HTML canvas element where the application is being drawn.
         */
        private _m_canvas;
        /**
         * The Canvas's WebGL rendering context.
         */
        private _m_context;
        /**
         * The graphics API version of this system.
         */
        private _m_APIVersion;
    }
}
declare module "game/hkGameConfig" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file hkGameConfig.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since September-11-2020
     */
    import { hkGraphicsConfig } from "systems/graphics/hkGraphicsConfig";
    /**
     * Configuration object for the game.
     */
    export class hkGameConfig {
        /**
         * Configuration object for the Graphics Module..
         */
        graphics: hkGraphicsConfig;
    }
}
declare module "game/hkGame" {
    import { hkGameConfig } from "game/hkGameConfig";
    export class hkGame {
        /****************************************************/
        /****************************************************/
        /**
         * Create a new Hakool Game.
         */
        static Create(_config: hkGameConfig): hkGame;
        /****************************************************/
        /****************************************************/
        /**
         * Private constructor.
         */
        private constructor();
        /**
         * Initialize this Game.
         */
        private _init;
        /**
         * Reference to the graphics system, also saved in the table of systems.
         */
        private _m_graphics;
        /**
         * Table of the engine systems.
         */
        private _m_hSystems;
    }
}
declare module "logger/hkLogger" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file hkLogger.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since September-12-2020
     */
    import { hkGameConfig } from "game/hkGameConfig";
    export class hkLogger {
        /****************************************************/
        /****************************************************/
        Create(_config: hkGameConfig): hkLogger;
        /****************************************************/
        /****************************************************/
        /**
         *
         * @param _config
         */
        private _init;
        /**
         * Private constructor.
         */
        private constructor();
        private _m_;
    }
}
