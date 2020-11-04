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
    /**
     * Used to specify the graphics capability to enable.
     */
    export type HK_GRAPHICS_CAPABILITY = EnumLiteralsOf<typeof HK_GRAPHICS_CAPABILITY>;
    export const HK_GRAPHICS_CAPABILITY: Readonly<{
        /**
         * Activates blending of the computed fragment color value.
         */
        kBlend: 0;
        /**
         * Activates depth culling of polygons.
         */
        kCullFace: 1;
        /**
         * Activates depth comparisons.
         */
        kDepthTest: 2;
        /**
         * Activates dithering of color components before they get written to the
         * color buffer.
         */
        kDither: 3;
        /**
         * Activates adding an offset to depth values of polygon's fragments.
         */
        kPolygonOffsetFill: 4;
        /**
         * Activates the computation of a temporary coverage value determined by
         * the alpha value.
         */
        kSampleAlphaToCoverage: 5;
        /**
         * Activates ANDing the fragment's coverage with the temporary coverage
         * value.
         */
        kSampleCoverage: 6;
        /**
         * Activates scissor test
         * */
        kScissorTest: 7;
        /**
         * Activates stencil testing.
         * */
        kStencilTest: 8;
    }>;
    /****************************************************/
    /****************************************************/
    /****************************************************/
    /****************************************************/
    export type HK_PRIMITIVE_TYPE = EnumLiteralsOf<typeof HK_PRIMITIVE_TYPE>;
    export const HK_PRIMITIVE_TYPE: Readonly<{
        /**
         * Draws a single dot.
         */
        kPoints: 0;
        /**
         * Draws a straight line to the next vertex.
         * */
        kLineStrip: 1;
        /**
         * Draws a straight line to the next vertex, and connects the last vertex
         * back to the first.
         * */
        kLineLoop: 2;
        /**
         * Draws a line between a pair of vertices.
         * */
        kLines: 3;
        /**
         *
         * */
        kTriangleStrip: 4;
        /**
         *
         * */
        kTriangleFan: 5;
        /**
         * Draws a triangle for a group of three vertices.
         * */
        kTriangles: 6;
    }>;
    /****************************************************/
    /****************************************************/
    export type HK_DATA_TYPE = EnumLiteralsOf<typeof HK_DATA_TYPE>;
    export const HK_DATA_TYPE: Readonly<{
        /**
         * Signed 8-bit integer, values in [-128, 127].
         */
        kByte: 0;
        /**
         * Signed 16-bit integer, values in [-32,768, 32,767].
         * */
        kShort: 1;
        /**
         * Unsigned 8-bit integer, values in [0, 255].
         * */
        kUnsignedByte: 2;
        /**
         * Unsigned 16-bit integer, with values in [0, 65,535].
         * */
        kUnsignedShort: 3;
        /**
         * 32 bit IEEE floating point number.
         * */
        kFloat: 4;
        /**
         * 16 bit IEEE floating point number. (only for WebGL 2).
         * */
        kHalfFloat: 5;
        /**
         * Unsigned 32-bit integer, with values in [0, 65,535] or [0, 4,294.967,295].
         * */
        kUnsignedInt: 6;
    }>;
    /****************************************************/
    /****************************************************/
    export type HK_SHADER_PARAMETER = EnumLiteralsOf<typeof HK_SHADER_PARAMETER>;
    export const HK_SHADER_PARAMETER: Readonly<{
        /**
         * Check if the shader is flagged for deletion.
         */
        kDeleteStatus: 0;
        /**
         * Check if last shader compilation was successful.
         * */
        kCompileStatus: 1;
    }>;
    /****************************************************/
    /****************************************************/
    export type HK_PROGRAM_PARAMETER = EnumLiteralsOf<typeof HK_PROGRAM_PARAMETER>;
    export const HK_PROGRAM_PARAMETER: Readonly<{
        /**
         * Check if the program is flagged for deletion.
         */
        kDeleteStatus: 0;
        /**
         * Check if the last link operation was successful.
         * */
        kLinkStatus: 1;
        /**
         * Check if the las validation operation was successful.
         * */
        kValidateStatus: 2;
    }>;
    /****************************************************/
    /****************************************************/
    export type HK_BUFFER_TARGET = EnumLiteralsOf<typeof HK_BUFFER_TARGET>;
    export const HK_BUFFER_TARGET: Readonly<{
        /**
         * Used for vertex attributes. Example: Vertex coordinates, texture coordinates
         * color coordinates.
         */
        kArray: 0;
        /**
         * Used for element indices.
         * */
        kElementArray: 1;
    }>;
    /****************************************************/
    /****************************************************/
    export type HK_SHADER_TYPE = EnumLiteralsOf<typeof HK_SHADER_TYPE>;
    export const HK_SHADER_TYPE: Readonly<{
        /**
         * Specified once by the application, and used many times as the source
         * for WebGL drawing and image specification commands.
         */
        kFragment: 0;
        /**
         * Specified repeatedly by the application, an used as many times as the
         * source for WebGL drawing and image specification commands.
         * */
        kVertex: 1;
    }>;
    /****************************************************/
    /****************************************************/
    export type HK_DATA_USAGE = EnumLiteralsOf<typeof HK_DATA_USAGE>;
    export const HK_DATA_USAGE: Readonly<{
        /**
         * Specified once by the application, and used many times as the source
         * for WebGL drawing and image specification commands.
         */
        kStaticDraw: 0;
        /**
         * Specified repeatedly by the application, an used as many times as the
         * source for WebGL drawing and image specification commands.
         * */
        kDynamicDraw: 1;
        /**
         * Specified once by the application, and used a few times as the source
         * for WebGL drawing and image specification commands.
         * */
        kStreamDraw: 2;
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
        /**
         * Scene manager.
         * */
        kSceneManager: 1;
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
declare module "utilities/math/hkVector4" {
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
        static LinearInterpolation(_a: HkVector4, _b: HkVector4, _t: number, _out: HkVector4): void;
        copy(_vector: HkVector4): HkVector4;
        set(_x?: number, _y?: number, _z?: number, _w?: number): HkVector4;
        scale(_scalar: number): HkVector4;
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
    import { HkVector4 } from "utilities/math/hkVector4";
    export class HkColor {
        constructor(_r?: number, _g?: number, _b?: number, _a?: number);
        static LinearInterpolation(_a: HkColor, _b: HkColor, _t: number, _out: HkColor): void;
        set(_r?: number, _g?: number, _b?: number, _a?: number): void;
        normalize(): void;
        color: HkVector4;
    }
}
declare module "systems/graphics/hkIBuffer" {
    export interface HkIBuffer {
        getBuffer<T>(): T;
    }
}
declare module "systems/graphics/hkIShader" {
    export interface HkIShader {
        /**
         * Get the wrapped object.
         * */
        getShader<T>(): T;
    }
}
declare module "systems/graphics/hkIProgram" {
    import { HkIShader } from "systems/graphics/hkIShader";
    export interface HkIProgram {
        getProgram<T>(): T;
        setVertexShader(_shader: HkIShader): void;
        getVertexShader(_shader: HkIShader): HkIShader;
        setFragmentShader(_shader: HkIShader): void;
        getFragmentShader(_shader: HkIShader): HkIShader;
    }
}
declare module "systems/graphics/hkIUniformLocation" {
    export interface HkIUniformLocation {
        GetUniformLocation<T>(): T;
    }
}
declare module "systems/graphics/hkIContext" {
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
    import { HK_BUFFER_TARGET, HK_DATA_TYPE, HK_DATA_USAGE, HK_GRAPHICS_CAPABILITY, HK_GRAPHICS_VERSION, HK_PRIMITIVE_TYPE, HK_PROGRAM_PARAMETER, HK_SHADER_PARAMETER, HK_SHADER_TYPE } from "utilities/hkEnums";
    import { HkIBuffer } from "systems/graphics/hkIBuffer";
    import { HkIProgram } from "systems/graphics/hkIProgram";
    import { HkIShader } from "systems/graphics/hkIShader";
    import { HkIUniformLocation } from "systems/graphics/hkIUniformLocation";
    export interface HkIContext {
        /****************************************************/
        /****************************************************/
        drawElements(_mode: HK_PRIMITIVE_TYPE, _count: number, _type: HK_DATA_TYPE, _offset: number): void;
        enable(_capability: HK_GRAPHICS_CAPABILITY): void;
        createShader(type: HK_SHADER_TYPE): HkIShader;
        shaderSource(_shader: HkIShader, _source: string): void;
        compileShader(_shader: HkIShader): void;
        createBuffer(): HkIBuffer;
        createIndexBuffer(): HkIBuffer;
        createVertexBuffer(): HkIBuffer;
        getShaderParameter(_shader: HkIShader, _parameter: HK_SHADER_PARAMETER): boolean;
        getShaderType(_shader: HkIShader): HK_SHADER_TYPE;
        getShaderInfoLog(_shader: HkIShader): string;
        createProgram(): HkIProgram;
        attachShader(_program: HkIProgram, _shader: HkIShader): void;
        linkProgram(_program: HkIProgram): void;
        useProgram(_program: HkIProgram): void;
        getProgramParameter(_program: HkIProgram, _parameter: HK_PROGRAM_PARAMETER): boolean;
        bindBuffer(_type: HK_BUFFER_TARGET, _buffer: HkIBuffer): void;
        bufferData(_type: HK_BUFFER_TARGET, _data: Float32Array, _usage: HK_DATA_USAGE): void;
        bufferData(_type: HK_BUFFER_TARGET, _data: Uint16Array, _usage: HK_DATA_USAGE): void;
        getAttribLocation(_program: HkIProgram, _name: string): number;
        enableVertexAtrribArray(_index: number): void;
        vertexAtrribPointer(_index: number, _size: number, _type: HK_DATA_TYPE, _normalized: boolean, _stride: number, _offset: number): void;
        getUniformLocation(_program: HkIProgram, _name: string): HkIUniformLocation;
        uniformMatrix4fv(_location: HkIUniformLocation, _transpose: boolean, _data: Float32List, _srcOffset?: number, _srcLength?: number): void;
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
    import { HkGame } from "game/hkGame";
    import { HK_OPRESULT, HK_SYSTEM_ID } from "utilities/hkEnums";
    export interface HkISystem {
        /**
         * Initialize the System.
         *
         * @param _game
         * @param _config
         */
        init(_game: HkGame, _config: any): HK_OPRESULT;
        /**
         *
         * */
        update(): void;
        /**
         *
         * */
        draw(): void;
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
    import { HK_GRAPHICS_VERSION } from "utilities/hkEnums";
    import { HkISystem } from "systems/hkISystem";
    import { HkIContext } from "systems/graphics/hkIContext";
    import { HkIProgram } from "systems/graphics/hkIProgram";
    export interface HkIGraphics extends HkISystem {
        /**
         * Get the HTML canvas element where the application is being drawn.
         */
        getCanvas(): HTMLCanvasElement;
        /**
         * Get the canvas's graphics context.
         */
        getContext(): HkIContext;
        getProgram(): HkIProgram;
        /**
         * Get the Graphics API version of this system.
         */
        getAPIVersion(): HK_GRAPHICS_VERSION;
    }
}
declare module "systems/graphics/WebGL/hkWebGLProgram" {
    import { HkIProgram } from "systems/graphics/hkIProgram";
    import { HkIShader } from "systems/graphics/hkIShader";
    export class HkWebGLProgram implements HkIProgram {
        static Create(_context: WebGLRenderingContext): HkWebGLProgram;
        getProgram<T>(): T;
        setVertexShader(_shader: HkIShader): void;
        getVertexShader(_shader: HkIShader): HkIShader;
        setFragmentShader(_shader: HkIShader): void;
        getFragmentShader(_shader: HkIShader): HkIShader;
        private _m_program;
        private _m_fragment;
        private _m_vertex;
    }
}
declare module "systems/graphics/hkShaderFactory" {
    import { HkIContext } from "systems/graphics/hkIContext";
    import { HkIShader } from "systems/graphics/hkIShader";
    export class HkShaderFactory {
        static CreateDefaultVertex(_context: HkIContext): HkIShader;
        static CreateDefaultFragment(_context: HkIContext): HkIShader;
    }
}
declare module "systems/graphics/hkProgramFactory" {
    import { HkIContext } from "systems/graphics/hkIContext";
    import { HkIProgram } from "systems/graphics/hkIProgram";
    export class HkProgramFactory {
        static CreateDefault(_context: HkIContext): HkIProgram;
    }
}
declare module "systems/graphics/WebGL/hkWebGLBuffer" {
    export class HkWebGLBuffer {
        static Create(_context: WebGLRenderingContext): HkWebGLBuffer;
        getBuffer<T>(): T;
        protected constructor();
        protected _m_buffer: WebGLBuffer;
    }
}
declare module "systems/graphics/WebGL/hkWebGLIndexBuffer" {
    import { HkWebGLBuffer } from "systems/graphics/WebGL/hkWebGLBuffer";
    export class HkWebGLIndexBuffer extends HkWebGLBuffer {
        static Create(_context: WebGLRenderingContext): HkWebGLIndexBuffer;
    }
}
declare module "systems/graphics/WebGL/hkWebGLEnums" {
    import { HK_BUFFER_TARGET, HK_DATA_TYPE, HK_DATA_USAGE, HK_GRAPHICS_CAPABILITY, HK_PRIMITIVE_TYPE, HK_PROGRAM_PARAMETER, HK_SHADER_PARAMETER, HK_SHADER_TYPE } from "utilities/hkEnums";
    export class HkWebGLEnums {
        static PrimitiveType(_type: HK_PRIMITIVE_TYPE): number;
        static GraphicsCapability(_type: HK_GRAPHICS_CAPABILITY): number;
        static BufferType(_type: HK_BUFFER_TARGET): number;
        static DataUsage(_type: HK_DATA_USAGE): number;
        static ShaderType(_type: HK_SHADER_TYPE): number;
        static DataType(_type: HK_DATA_TYPE): number;
        static ShaderParameter(_type: HK_SHADER_PARAMETER): number;
        static ProgramParameter(_type: HK_PROGRAM_PARAMETER): number;
    }
}
declare module "systems/graphics/WebGL/hkWebGLVertexBuffer" {
    import { HkWebGLBuffer } from "systems/graphics/WebGL/hkWebGLBuffer";
    export class HkWebGLVertexBuffer extends HkWebGLBuffer {
        static Create(_context: WebGLRenderingContext): HkWebGLVertexBuffer;
    }
}
declare module "systems/graphics/WebGL/hkWebGLShader" {
    import { HK_SHADER_TYPE } from "utilities/hkEnums";
    import { HkIShader } from "systems/graphics/hkIShader";
    export class HkWebGLShader implements HkIShader {
        static Create(_context: WebGLRenderingContext, _type: HK_SHADER_TYPE): HkWebGLShader;
        getShader<T>(): T;
        private _m_shader;
    }
}
declare module "systems/graphics/WebGL/hkWebGLUniformLocation" {
    import { HkIUniformLocation } from "systems/graphics/hkIUniformLocation";
    export class HkWebGLUniformLocation implements HkIUniformLocation {
        constructor(_uniformLocation: WebGLUniformLocation);
        GetUniformLocation<T>(): T;
        private _m_uniformLocation;
    }
}
declare module "systems/graphics/WebGL/hkWebGLContext" {
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
    import { HK_BUFFER_TARGET, HK_DATA_TYPE, HK_DATA_USAGE, HK_GRAPHICS_CAPABILITY, HK_GRAPHICS_VERSION, HK_PRIMITIVE_TYPE, HK_PROGRAM_PARAMETER, HK_SHADER_PARAMETER, HK_SHADER_TYPE } from "utilities/hkEnums";
    import { HkIBuffer } from "systems/graphics/hkIBuffer";
    import { HkIContext } from "systems/graphics/hkIContext";
    import { HkIShader } from "systems/graphics/hkIShader";
    import { HkIProgram } from "systems/graphics/hkIProgram";
    import { HkIUniformLocation } from "systems/graphics/hkIUniformLocation";
    export class HkWebGLContext implements HkIContext {
        /****************************************************/
        /****************************************************/
        init(_context: WebGLRenderingContext, _apiVersion: HK_GRAPHICS_VERSION): void;
        enable(_capability: HK_GRAPHICS_CAPABILITY): void;
        drawElements(_mode: HK_PRIMITIVE_TYPE, _count: number, _type: HK_DATA_TYPE, _offset: number): void;
        createShader(_type: HK_SHADER_TYPE): HkIShader;
        shaderSource(_shader: HkIShader, _source: string): void;
        compileShader(_shader: HkIShader): void;
        getShaderParameter(_shader: HkIShader, _parameter: HK_SHADER_PARAMETER): boolean;
        getShaderType(_shader: HkIShader): HK_SHADER_TYPE;
        getShaderInfoLog(_shader: HkIShader): string;
        createProgram(): HkIProgram;
        attachShader(_program: HkIProgram, _shader: HkIShader): void;
        linkProgram(_program: HkIProgram): void;
        useProgram(_program: HkIProgram): void;
        getProgramParameter(_program: HkIProgram, _parameter: HK_PROGRAM_PARAMETER): boolean;
        getAttribLocation(_program: HkIProgram, _name: string): number;
        enableVertexAtrribArray(_index: number): void;
        vertexAtrribPointer(_index: number, _size: number, _type: HK_DATA_TYPE, _normalized: boolean, _stride: number, _offset: number): void;
        getUniformLocation(_program: HkIProgram, _name: string): HkIUniformLocation;
        uniformMatrix4fv(_location: HkIUniformLocation, _transpose: boolean, _data: Float32List, _srcOffset?: number, _srcLength?: number): void;
        /**
         *
         * */
        createBuffer(): HkIBuffer;
        /**
         *
         * */
        createIndexBuffer(): HkIBuffer;
        /**
         *
         * */
        createVertexBuffer(): HkIBuffer;
        /**
         *
         * @param _type
         * @param _buffer
         */
        bindBuffer(_type: HK_BUFFER_TARGET, _buffer: HkIBuffer): void;
        bufferData(_type: HK_BUFFER_TARGET, _data: Float32Array, _usage: HK_DATA_USAGE): void;
        bufferData(_type: HK_BUFFER_TARGET, _data: Uint16Array, _usage: HK_DATA_USAGE): void;
        /**
         *
         * */
        getContext<T>(): T;
        /**
         *
         * */
        getAPIVersion(): HK_GRAPHICS_VERSION;
        /**
         *
         * @param _color
         */
        setClearColor(_color: HkColor): void;
        /**
         *
         * */
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
    import { HkIContext } from "systems/graphics/hkIContext";
    import { HkIGraphics } from "systems/graphics/HkIGraphics";
    import { HkIProgram } from "systems/graphics/hkIProgram";
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
        init(_game: HkGame, _config: any): HK_OPRESULT;
        update(): void;
        draw(): void;
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
        getProgram(): HkIProgram;
        /**
         * Get the HTML canvas element where the application is being drawn.
         */
        getCanvas(): HTMLCanvasElement;
        /****************************************************/
        /****************************************************/
        /**
         * Private constructor.
         */
        private constructor();
        /**
         * The HTML canvas element where the application is being drawn.
         */
        private _m_canvas;
        /**
         * The Canvas's WebGL rendering context.
         */
        private _m_context;
        /**
         *
         */
        private _m_program;
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
declare module "utilities/math/HkVector3" {
    export class HkVector3 {
        constructor(_x?: number, _y?: number, _z?: number);
        static Cross(_a: HkVector3, _b: HkVector3, _out: HkVector3): HkVector3;
        static Substract(_a: HkVector3, _b: HkVector3, _out: HkVector3): HkVector3;
        static Add(_a: HkVector3, _b: HkVector3, _out: HkVector3): HkVector3;
        static Normalize(_a: HkVector3, _out: HkVector3): HkVector3;
        set(_x: number, _y?: number, _z?: number): HkVector3;
        copy(_vector: HkVector3): HkVector3;
        add(_vector: HkVector3): HkVector3;
        substract(_vector: HkVector3): HkVector3;
        cross(_vector: HkVector3): HkVector3;
        magnitudeSqr(): number;
        magnitude(): number;
        normalize(): HkVector3;
        divideScalar(_scalar: number): HkVector3;
        scale(_scalar: number): HkVector3;
        static A: HkVector3;
        static B: HkVector3;
        static C: HkVector3;
        x: number;
        y: number;
        z: number;
    }
}
declare module "utilities/math/hkMatrix4" {
    import { HkVector3 } from "utilities/math/HkVector3";
    export class HkMatrix4 {
        constructor();
        static MultiplyMatrices(_matA: HkMatrix4, _matB: HkMatrix4): HkMatrix4;
        multiply(_mat4: HkMatrix4): HkMatrix4;
        multiplyScalar(_s: number): HkMatrix4;
        /**
         *
         * @param _matrix
         */
        copy(_matrix: HkMatrix4): HkMatrix4;
        /**
         * */
        clone(): HkMatrix4;
        /**
         * Set this matrix an identity matrix (also called the unit matrix).
         * */
        identity(): HkMatrix4;
        /**
         *
         * @param _col
         * @param _row
         */
        get(_col: number, _row: number): number;
        makeTranslation(_x: HkVector3): HkMatrix4;
        makeTranslation(_x: number, _y?: number, _z?: number): HkMatrix4;
        makeScale(_x: HkVector3): HkMatrix4;
        makeScale(_x: number, _y?: number, _z?: number): HkMatrix4;
        makeRotationX(_radians: number): HkMatrix4;
        makeRotationY(_radians: number): HkMatrix4;
        makeRotationZ(_radians: number): HkMatrix4;
        makePerspective(_fov: number, _aspect: number, _near: number, _far: number): HkMatrix4;
        lookAt(_position: HkVector3, _target: HkVector3, _up: HkVector3): HkMatrix4;
        setByValue(_n11: number, _n12: number, _n13: number, _n14: number, _n21: number, _n22: number, _n23: number, _n24: number, _n31: number, _n32: number, _n33: number, _n34: number, _n41: number, _n42: number, _n43: number, _n44: number): HkMatrix4;
        /**
         *
         * @param _col
         * @param _row
         * @param _value
         */
        set(_col: number, _row: number, _value: number): void;
        /**
         *
         * */
        getValues(): Float32Array;
        /**
         *
         * */
        private _m_aValues;
    }
}
declare module "objects/hkCamera" {
    import { HkMatrix4 } from "utilities/math/hkMatrix4";
    import { HkVector3 } from "utilities/math/HkVector3";
    export class HkCamera {
        constructor();
        setUp(_x: HkVector3): void;
        setUp(_x: number, _y?: number, _z?: number): void;
        setTarget(_x: HkVector3): void;
        setTarget(_x: number, _y?: number, _z?: number): void;
        setPosition(_x: HkVector3): void;
        setPosition(_x: number, _y?: number, _z?: number): void;
        setPerspective(_fovy: number, _ratio: number, _near: number, _far: number): void;
        getViewMatrix(): HkMatrix4;
        getProjectionMatrix(): HkMatrix4;
        getUp(): HkVector3;
        getTarget(): HkVector3;
        getForward(): HkVector3;
        updateMatrix(): void;
        isDirty(): boolean;
        private _m_position;
        private _m_up;
        private _m_forward;
        private _m_target;
        private _m_viewMatrix;
        private _m_projMatrix;
        private _m_isDirty;
    }
}
declare module "systems/scene/hkSceneSystem" {
    import { HkGame } from "game/hkGame";
    import { HkScene } from "systems/scene/hkScene";
    export interface HkISceneSystem {
        init(_game: HkGame, _scene: HkScene): void;
        start(_game: HkGame, _scene: HkScene): void;
        update(): void;
        draw(): void;
        destroy(): void;
    }
}
declare module "systems/scene/cameraManager/hkCameraManager" {
    import { HkGame } from "game/hkGame";
    import { HkCamera } from "objects/hkCamera";
    import { HkScene } from "systems/scene/hkScene";
    import { HkISceneSystem } from "systems/scene/hkSceneSystem";
    export class HkCameraManager implements HkISceneSystem {
        init(_game: HkGame, _scene: HkScene): void;
        start(_game: HkGame, _scene: HkScene): void;
        update(): void;
        draw(): void;
        setActiveCamera(_camera: HkCamera): void;
        createCamera(): HkCamera;
        addCamera(_camera: HkCamera): void;
        destroy(): void;
        game: HkGame;
        scene: HkScene;
        private _m_viewLocation;
        private _m_projectionLocation;
        private _m_context;
        private _m_active;
        private _m_aCameras;
    }
}
declare module "components/hkIComponent" {
    import { HkGame } from "game/hkGame";
    import { HkScene } from "systems/scene/hkScene";
    export interface HkIComponent {
        _init(_game: HkGame, _scene: HkScene): void;
        _start(_scene: HkScene): void;
        _update(): void;
        _draw(): void;
        _destroy(): void;
    }
}
declare module "components/hkCmpCamera" {
    import { HkGame } from "game/hkGame";
    import { HkScene } from "systems/scene/hkScene";
    import { HkIComponent } from "components/hkIComponent";
    export class HkCmpCamera implements HkIComponent {
        _init(_game: HkGame, _scene: HkScene): void;
        _start(_scene: HkScene): void;
        _update(): void;
        _draw(): void;
        _destroy(): void;
        private _m_camera;
    }
}
declare module "utilities/hkNode" {
    export class HkObject {
    }
}
declare module "components/hkGameObject" {
    import { HkScene } from "systems/scene/hkScene";
    import { HkMatrix4 } from "utilities/math/hkMatrix4";
    import { HkObject } from "utilities/hkNode";
    import { HkVector3 } from "utilities/math/HkVector3";
    import { HkIComponent } from "components/hkIComponent";
    import { HkGame } from "game/hkGame";
    export class HkGameObject extends HkObject {
        constructor(_name: string);
        init(_game: HkGame, _scene: HkScene): void;
        start(_scene: HkScene): void;
        update(): void;
        draw(): void;
        addComponent(_component: HkIComponent): void;
        setPosition(_x: number, _y?: number, _z?: number): void;
        getPosition(): HkVector3;
        setScale(_x: number, _y?: number, _z?: number): void;
        getScale(): HkVector3;
        setRotation(_x: number, _y?: number, _z?: number): void;
        getRotation(): HkVector3;
        getMatrix(): HkMatrix4;
        destroy(): void;
        name: string;
        private _updateMatrix;
        private _m_position;
        private _m_rotation;
        private _m_scale;
        private _m_matrix;
        private _m_auxMat;
        private _m_isDirty;
        private _m_hComponents;
        private _m_children;
    }
}
declare module "systems/scene/gameObjectsManager/hkGameObjectsManager" {
    import { HkGameObject } from "components/hkGameObject";
    import { HkGame, HkScene } from "index";
    import { HkISceneSystem } from "systems/scene/hkSceneSystem";
    export class HkGameObjectsManager implements HkISceneSystem {
        init(_game: HkGame, _scene: HkScene): void;
        start(_game: HkGame, _scene: HkScene): void;
        update(): void;
        draw(): void;
        createGameObject(_name: string): HkGameObject;
        hasGameObject(_name: string): boolean;
        getGameObject(_name: string): HkGameObject;
        destroy(): void;
        private _updateGameObject;
        private _drawGameObject;
        private _m_hGameObjects;
        private _m_game;
        private _m_scene;
    }
}
declare module "systems/scene/hkScene" {
    import { HkGame } from "game/hkGame";
    import { HkCameraManager } from "systems/scene/cameraManager/hkCameraManager";
    import { HkGameObjectsManager } from "systems/scene/gameObjectsManager/hkGameObjectsManager";
    export class HkScene {
        /**
         * */
        onStart(): void;
        /**
         *
         * @param _deltaTime
         */
        onUpdate(_deltaTime: number): void;
        onDraw(): void;
        /**
         * */
        onClose(): void;
        /**
         * */
        onDestroy(): void;
        /**
         * Get the scene name.
         * */
        getName(): string;
        _init(_game: HkGame, _name: string): void;
        _update(_dt: number): void;
        _draw(): void;
        _destroy(): void;
        _close(): void;
        game: HkGame;
        cameras: HkCameraManager;
        gameObjects: HkGameObjectsManager;
        private _m_name;
    }
}
declare module "systems/scene/hkNullScene" {
    import { HkGame } from "game/hkGame";
    import { HkScene } from "systems/scene/hkScene";
    export class HkNullScene extends HkScene {
        onStart(): void;
        onUpdate(_deltaTime: number): void;
        onClose(): void;
        onDestroy(): void;
        _init(_game: HkGame, _name: string): void;
        _update(_dt: number): void;
        _draw(): void;
        _destroy(): void;
        _close(): void;
    }
}
declare module "systems/scene/hkSceneManager" {
    import { HkGame } from "index";
    import { HK_OPRESULT, HK_SYSTEM_ID } from "utilities/hkEnums";
    import { HkISystem } from "systems/hkISystem";
    import { HkScene } from "systems/scene/hkScene";
    export class HkSceneManager implements HkISystem {
        static Create(): HkSceneManager;
        init(_game: HkGame, _config: any): HK_OPRESULT;
        update(): void;
        draw(): void;
        getID(): HK_SYSTEM_ID;
        startScene(_key: string): HkScene;
        addScene(_key: string, _scene: HkScene): HK_OPRESULT;
        hasScene(_key: string): boolean;
        getScene(_key: string): HkScene;
        private constructor();
        private _m_hScenes;
        private _m_active;
        private _m_game;
    }
}
declare module "game/hkGame" {
    import { HkIGraphics } from "systems/graphics/HkIGraphics";
    import { HkISystem } from "systems/hkISystem";
    import { HkILogger } from "systems/logger/hkILogger";
    import { HkSceneManager } from "systems/scene/hkSceneManager";
    import { HK_SYSTEM_ID } from "utilities/hkEnums";
    import { HkGameConfig } from "game/hkGameConfig";
    export class HkGame {
        /****************************************************/
        /****************************************************/
        /**
         * Create a new Hakool Game.
         */
        static Create(_config: HkGameConfig): HkGame;
        static GameLoop(): void;
        /**
         * Start the engine, with the main scene.
         *
         * @param _name the main scene name.
         */
        start(_name: string): void;
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
        /**
         * The scene manager of the game.
         * **/
        scene: HkSceneManager;
        /**
         * Game loop delta time.
         * */
        deltaTime: number;
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
        private _loop;
        private _update;
        private _updateSystem;
        private _draw;
        private _drawSystem;
        private static _INSTANCE;
        /**
         * Table of the engine systems.
         */
        private _m_hSystems;
        /**
         * Indicates if the game is running.
         * */
        private _m_isRunning;
        /**
         * Last time.
         * */
        private _m_lastTimeStamp;
    }
}
declare module "index" {
    export { Hakool } from "hakool";
    export { HkGame } from "game/hkGame";
    export { HkGameConfig } from "game/hkGameConfig";
    export { HkScene } from "systems/scene/hkScene";
    export { HkSceneManager } from "systems/scene/hkSceneManager";
    export { HkGraphicsConfig } from "systems/graphics/hkGraphicsConfig";
    export { HkContextConfig } from "systems/graphics/HkContextConfig";
    export { HkMatrix4 } from "utilities/math/hkMatrix4";
    export { HkVector4 } from "utilities/math/hkVector4";
    export { HkColor } from "utilities/hkColor";
    export { HK_GRAPHICS_VERSION, HK_POWER_PREFERENCE, HK_OPRESULT, HK_SYSTEM_ID } from "utilities/hkEnums";
}
declare module "systems/graphics/hkMesh" {
    import { HkIBuffer } from "systems/graphics/hkIBuffer";
    import { HkIContext } from "systems/graphics/hkIContext";
    import { HkIGraphics } from "systems/graphics/HkIGraphics";
    import { HkIProgram } from "systems/graphics/hkIProgram";
    export class HkMesh {
        init(_graphics: HkIGraphics, _vertices: Float32Array, _indices: Uint16Array, _program: HkIProgram): void;
        draw(_context: HkIContext): void;
        getVerticesSize(): number;
        getIndicesSize(): number;
        getVertexBuffer(): HkIBuffer;
        getIndexBuffer(): HkIBuffer;
        private _m_numVertices;
        private _m_aVertices;
        private _m_aIndices;
        private _m_vertexBuffer;
        private _m_indexBuffer;
    }
}
declare module "systems/graphics/hkMeshFactory" {
    import { HkIGraphics } from "systems/graphics/HkIGraphics";
    import { HkIProgram } from "systems/graphics/hkIProgram";
    import { HkMesh } from "systems/graphics/hkMesh";
    export class HkMeshFactory {
        static Cube(_graphics: HkIGraphics, _program: HkIProgram): HkMesh;
    }
}
declare module "systems/graphics/hkModel" {
    export class HkModel {
        init(): void;
        private _m_aMesh;
    }
}
declare module "systems/graphics/hkModelFactory" {
    import { HkModel } from "systems/graphics/hkModel";
    export class HkModelFactory {
        static CreateCube(): HkModel;
    }
}
declare module "utilities/hkInterpolation" {
    export class HkInterpolation {
        static Linear(_a: number, _b: number, _t: number): number;
    }
}
