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
declare module "utilities/hkVector4" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file hkVector4.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since October-19-2020
     */
    export class HkVector4 {
        constructor(_x?: number, _y?: number, _z?: number, _w?: number);
        set(_x?: number, _y?: number, _z?: number, _w?: number): void;
        scale(_scalar: number): void;
        x: number;
        y: number;
        z: number;
        w: number;
    }
}
declare module "utilities/hkColor" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file hkColor.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since October-19-2020
     */
    import { HkVector4 } from "utilities/hkVector4";
    export class HkColor {
        constructor(_r?: number, _g?: number, _b?: number, _a?: number);
        set(_r?: number, _g?: number, _b?: number, _a?: number): void;
        normalize(): void;
        color: HkVector4;
    }
}
declare module "systems/graphics/context/hkIContext" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file HkIContext.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since September-11-2020
     */
    import { HkColor } from "utilities/hkColor";
    import { HK_GRAPHICS_VERSION } from "utilities/hkEnums";
    export interface HkIContext {
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
        /**
         * Set the context clear color.
         *
         * @param _color color.
         */
        setClearColor(_color: HkColor): void;
    }
}
declare module "systems/graphics/context/hkWebGLContext" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file HkWebGLContext.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since September-11-2020
     */
    import { HkColor } from "utilities/hkColor";
    import { HK_GRAPHICS_VERSION } from "utilities/hkEnums";
    import { HkIContext } from "systems/graphics/context/hkIContext";
    export class HkWebGLContext implements HkIContext {
        /****************************************************/
        /****************************************************/
        init(_context: WebGLRenderingContext, _apiVersion: HK_GRAPHICS_VERSION): void;
        getContext<T>(): T;
        getAPIVersion(): HK_GRAPHICS_VERSION;
        setClearColor(_color: HkColor): void;
        clear(): void;
        /****************************************************/
        /****************************************************/
        /**
         * The API Version of WebGL.
         */
        private _m_apiVersion;
        /**
         * The WebGL Rendering Context.
         */
        private _m_context;
    }
}
declare module "systems/graphics/HkContextConfig" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file HkContextConfig.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since September-08-2020
     */
    import { HkColor } from "utilities/hkColor";
    import { HK_POWER_PREFERENCE } from "utilities/hkEnums";
    export class HkContextConfig {
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
        constructor(_bAlpha?: boolean, _bDepth?: boolean, _bStencil?: boolean, _bAntialias?: boolean, _clearColor?: HkColor, _powerPreference?: HK_POWER_PREFERENCE);
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
        /**
         * Clear color.
         **/
        clearColor: HkColor;
    }
}
declare module "systems/graphics/hkGraphicsConfig" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file HkGraphicsConfig.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since September-08-2020
     */
    import { HK_GRAPHICS_VERSION } from "utilities/hkEnums";
    import { HkContextConfig } from "systems/graphics/HkContextConfig";
    /**
     * Configures the graphics system.
     */
    export class HkGraphicsConfig {
        /**
         * Graphic configuration.
         *
         * @param _canvas_id The HTML Element Id where the application is going to be
         * drawn.
         * @param _api_version The graphics API version. Default :
         * HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental.
         * @param _context_configuration The graphics context configuration object.
         */
        constructor(_canvasId: string, _apiVersion?: HK_GRAPHICS_VERSION, _contextConfiguration?: HkContextConfig);
        /**
         * The HTML Element Id where the application is going to be drawn.
         */
        canvasId: string;
        /**
         * The graphics context configuration.
         */
        contextConfiguration: HkContextConfig;
        /**
         * The Graphics API version ID.
         */
        apiVersion: HK_GRAPHICS_VERSION;
    }
}
declare module "systems/hkISystem" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file HkISystem.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since September-08-2020
     */
    import { HK_SYSTEM_ID } from "utilities/hkEnums";
    export interface HkISystem {
        /**
         * Get the system identifier.
         *
         * @returns System id.
         */
        getID(): HK_SYSTEM_ID;
    }
}
declare module "systems/graphics/HkIGraphics" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file hkGraphics.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since September-08-2020
     */
    import { HkGame } from "game/hkGame";
    import { HK_GRAPHICS_VERSION, HK_OPRESULT } from "utilities/hkEnums";
    import { HkISystem } from "systems/hkISystem";
    import { HkIContext } from "systems/graphics/context/hkIContext";
    import { HkGraphicsConfig } from "systems/graphics/hkGraphicsConfig";
    export interface HkIGraphics extends HkISystem {
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
        init(_config: HkGraphicsConfig, _game: HkGame): HK_OPRESULT;
        /**
         * Get the HTML canvas element where the application is being drawn.
         */
        getCanvas(): HTMLCanvasElement;
        /**
         * Get the canvas's graphics context.
         */
        getContext(): HkIContext;
        /**
         * Get the Graphics API version of this system.
         */
        getAPIVersion(): HK_GRAPHICS_VERSION;
    }
}
declare module "systems/graphics/HkGraphicsWebGL" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file HkGraphicsWebGL.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since September-08-2020
     */
    import { HkGame } from "game/hkGame";
    import { HK_GRAPHICS_VERSION, HK_OPRESULT, HK_SYSTEM_ID } from "utilities/hkEnums";
    import { HkIContext } from "systems/graphics/context/hkIContext";
    import { HkGraphicsConfig } from "systems/graphics/hkGraphicsConfig";
    import { HkIGraphics } from "systems/graphics/HkIGraphics";
    export class HkGraphicsWebGL implements HkIGraphics {
        /**
         * Create a Graphic System.
         */
        static Create(): HkGraphicsWebGL;
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
        init(_config: HkGraphicsConfig, _game: HkGame): HK_OPRESULT;
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
        getContext(): HkIContext;
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
declare module "systems/logger/hkILogger" {
    export interface HkILogger {
        log(_msg: string): void;
        logError(_msg: string): void;
        logWarning(_msg: string): void;
    }
}
declare module "game/hkGameConfig" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file HkGameConfig.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since September-11-2020
     */
    import { HkGraphicsConfig } from "systems/graphics/hkGraphicsConfig";
    /**
     * Configuration object for the game.
     */
    export class HkGameConfig {
        constructor();
        /**
         * Configuration object for the Graphics Module..
         */
        graphics: HkGraphicsConfig;
    }
}
declare module "systems/logger/hkLogger" {
    /**
     * HummingFlight Software Technologies - 2020
     *
     * @summary
     *
     * @file HkLogger.ts
     * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
     * @since September-12-2020
     */
    import { HkGameConfig } from "game/hkGameConfig";
    import { HkILogger } from "systems/logger/hkILogger";
    export class HkLogger implements HkILogger {
        /****************************************************/
        /****************************************************/
        static Create(_config: HkGameConfig): HkLogger;
        log(_msg: string): void;
        logError(_msg: string): void;
        logWarning(_msg: string): void;
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
    }
}
declare module "game/hkGame" {
    import { HkIGraphics } from "systems/graphics/HkIGraphics";
    import { HkISystem } from "systems/hkISystem";
    import { HkILogger } from "systems/logger/hkILogger";
    import { HK_SYSTEM_ID } from "utilities/hkEnums";
    import { HkGameConfig } from "game/hkGameConfig";
    export class HkGame {
        /****************************************************/
        /****************************************************/
        /**
         * Create a new Hakool Game.
         */
        static Create(_config: HkGameConfig): HkGame;
        /**
         * Adds a system to this game.
         *
         * @param _id The system ID.
         * @param _system System.
         */
        addSystem(_id: HK_SYSTEM_ID, _system: HkISystem): void;
        /**
         * The Logger Manager of the Game.
         * */
        logger: HkILogger;
        /**
         * Reference to the graphics system.
         */
        graphics: HkIGraphics;
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
         * Table of the engine systems.
         */
        private _m_hSystems;
    }
}
declare module "index" {
    export { Hakool } from "hakool";
    export { HkGame } from "game/hkGame";
    export { HkGameConfig } from "game/hkGameConfig";
    export { HkGraphicsConfig } from "systems/graphics/hkGraphicsConfig";
    export { HkContextConfig } from "systems/graphics/HkContextConfig";
    export { HkVector4 } from "utilities/hkVector4";
    export { HkColor } from "utilities/hkColor";
    export { HK_GRAPHICS_VERSION, HK_POWER_PREFERENCE, HK_OPRESULT, HK_SYSTEM_ID } from "utilities/hkEnums";
}
