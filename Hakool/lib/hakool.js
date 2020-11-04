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
    exports.HK_SYSTEM_ID = exports.HK_DATA_USAGE = exports.HK_SHADER_TYPE = exports.HK_BUFFER_TARGET = exports.HK_PROGRAM_PARAMETER = exports.HK_SHADER_PARAMETER = exports.HK_DATA_TYPE = exports.HK_PRIMITIVE_TYPE = exports.HK_GRAPHICS_CAPABILITY = exports.HK_OPRESULT = exports.HK_POWER_PREFERENCE = exports.HK_GRAPHICS_VERSION = void 0;
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
    exports.HK_GRAPHICS_CAPABILITY = Object.freeze({
        /**
         * Activates blending of the computed fragment color value.
         */
        kBlend: 0,
        /**
         * Activates depth culling of polygons.
         */
        kCullFace: 1,
        /**
         * Activates depth comparisons.
         */
        kDepthTest: 2,
        /**
         * Activates dithering of color components before they get written to the
         * color buffer.
         */
        kDither: 3,
        /**
         * Activates adding an offset to depth values of polygon's fragments.
         */
        kPolygonOffsetFill: 4,
        /**
         * Activates the computation of a temporary coverage value determined by
         * the alpha value.
         */
        kSampleAlphaToCoverage: 5,
        /**
         * Activates ANDing the fragment's coverage with the temporary coverage
         * value.
         */
        kSampleCoverage: 6,
        /**
         * Activates scissor test
         * */
        kScissorTest: 7,
        /**
         * Activates stencil testing.
         * */
        kStencilTest: 8
    });
    exports.HK_PRIMITIVE_TYPE = Object.freeze({
        /**
         * Draws a single dot.
         */
        kPoints: 0,
        /**
         * Draws a straight line to the next vertex.
         * */
        kLineStrip: 1,
        /**
         * Draws a straight line to the next vertex, and connects the last vertex
         * back to the first.
         * */
        kLineLoop: 2,
        /**
         * Draws a line between a pair of vertices.
         * */
        kLines: 3,
        /**
         *
         * */
        kTriangleStrip: 4,
        /**
         *
         * */
        kTriangleFan: 5,
        /**
         * Draws a triangle for a group of three vertices.
         * */
        kTriangles: 6
    });
    exports.HK_DATA_TYPE = Object.freeze({
        /**
         * Signed 8-bit integer, values in [-128, 127].
         */
        kByte: 0,
        /**
         * Signed 16-bit integer, values in [-32,768, 32,767].
         * */
        kShort: 1,
        /**
         * Unsigned 8-bit integer, values in [0, 255].
         * */
        kUnsignedByte: 2,
        /**
         * Unsigned 16-bit integer, with values in [0, 65,535].
         * */
        kUnsignedShort: 3,
        /**
         * 32 bit IEEE floating point number.
         * */
        kFloat: 4,
        /**
         * 16 bit IEEE floating point number. (only for WebGL 2).
         * */
        kHalfFloat: 5,
        /**
         * Unsigned 32-bit integer, with values in [0, 65,535] or [0, 4,294.967,295].
         * */
        kUnsignedInt: 6
    });
    exports.HK_SHADER_PARAMETER = Object.freeze({
        /**
         * Check if the shader is flagged for deletion.
         */
        kDeleteStatus: 0,
        /**
         * Check if last shader compilation was successful.
         * */
        kCompileStatus: 1
    });
    exports.HK_PROGRAM_PARAMETER = Object.freeze({
        /**
         * Check if the program is flagged for deletion.
         */
        kDeleteStatus: 0,
        /**
         * Check if the last link operation was successful.
         * */
        kLinkStatus: 1,
        /**
         * Check if the las validation operation was successful.
         * */
        kValidateStatus: 2
    });
    exports.HK_BUFFER_TARGET = Object.freeze({
        /**
         * Used for vertex attributes. Example: Vertex coordinates, texture coordinates
         * color coordinates.
         */
        kArray: 0,
        /**
         * Used for element indices.
         * */
        kElementArray: 1
    });
    exports.HK_SHADER_TYPE = Object.freeze({
        /**
         * Specified once by the application, and used many times as the source
         * for WebGL drawing and image specification commands.
         */
        kFragment: 0,
        /**
         * Specified repeatedly by the application, an used as many times as the
         * source for WebGL drawing and image specification commands.
         * */
        kVertex: 1
    });
    exports.HK_DATA_USAGE = Object.freeze({
        /**
         * Specified once by the application, and used many times as the source
         * for WebGL drawing and image specification commands.
         */
        kStaticDraw: 0,
        /**
         * Specified repeatedly by the application, an used as many times as the
         * source for WebGL drawing and image specification commands.
         * */
        kDynamicDraw: 1,
        /**
         * Specified once by the application, and used a few times as the source
         * for WebGL drawing and image specification commands.
         * */
        kStreamDraw: 2
    });
    exports.HK_SYSTEM_ID = Object.freeze({
        /**
         * Undefined.
         */
        kUndefined: -1,
        /**
         * Graphics System.
         */
        kGraphics: 0,
        /**
         * Scene manager.
         * */
        kSceneManager: 1
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
define("utilities/math/hkVector4", ["require", "exports"], function (require, exports) {
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
        HkVector4.LinearInterpolation = function (_a, _b, _t, _out) {
            _out.x = _a.x + (_b.x - _a.x) * _t;
            _out.y = _a.y + (_b.y - _a.y) * _t;
            _out.z = _a.z + (_b.z - _a.z) * _t;
            _out.w = _a.w + (_b.w - _a.w) * _t;
            return;
        };
        HkVector4.prototype.copy = function (_vector) {
            this.x = _vector.x;
            this.y = _vector.y;
            this.z = _vector.z;
            this.w = _vector.w;
            return this;
        };
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
            return this;
        };
        HkVector4.prototype.scale = function (_scalar) {
            this.x *= _scalar;
            this.y *= _scalar;
            this.z *= _scalar;
            this.w *= _scalar;
            return this;
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
define("utilities/hkColor", ["require", "exports", "utilities/math/hkVector4"], function (require, exports, hkVector4_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkColor = void 0;
    var HkColor = /** @class */ (function () {
        function HkColor(_r, _g, _b, _a) {
            this.color = new hkVector4_1.HkVector4(_r, _g, _b, _a);
            return;
        }
        HkColor.LinearInterpolation = function (_a, _b, _t, _out) {
            hkVector4_1.HkVector4.LinearInterpolation(_a.color, _b.color, _t, _out.color);
            return;
        };
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
define("systems/graphics/hkIBuffer", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("systems/graphics/hkIShader", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("systems/graphics/hkIProgram", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("systems/graphics/hkIUniformLocation", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
define("systems/graphics/hkIContext", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
define("systems/graphics/WebGL/hkWebGLProgram", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkWebGLProgram = void 0;
    var HkWebGLProgram = /** @class */ (function () {
        function HkWebGLProgram() {
        }
        HkWebGLProgram.Create = function (_context) {
            var program = new HkWebGLProgram();
            program._m_program = _context.createProgram();
            return program;
        };
        HkWebGLProgram.prototype.getProgram = function () {
            return this._m_program;
        };
        HkWebGLProgram.prototype.setVertexShader = function (_shader) {
            this._m_vertex = _shader;
            return;
        };
        HkWebGLProgram.prototype.getVertexShader = function (_shader) {
            return this._m_vertex;
        };
        HkWebGLProgram.prototype.setFragmentShader = function (_shader) {
            this._m_fragment = _shader;
            return;
        };
        HkWebGLProgram.prototype.getFragmentShader = function (_shader) {
            return this._m_fragment;
        };
        return HkWebGLProgram;
    }());
    exports.HkWebGLProgram = HkWebGLProgram;
});
define("systems/graphics/hkShaderFactory", ["require", "exports", "utilities/hkEnums"], function (require, exports, hkEnums_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkShaderFactory = void 0;
    var HkShaderFactory = /** @class */ (function () {
        function HkShaderFactory() {
        }
        HkShaderFactory.CreateDefaultVertex = function (_context) {
            var source = "#version 100\n"
                + "attribute vec3 position;\n"
                + "attribute vec4 color;\n"
                + "varying vec4 fcolor;\n"
                + "uniform mat4 modelMatrix;\n"
                + "uniform mat4 viewMatrix;\n"
                + "uniform mat4 projectionMatrix;\n"
                + "void main()\n"
                + "{\n"
                + "gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1);\n"
                + "fcolor = color;\n"
                + "}\n";
            var shader = _context.createShader(hkEnums_2.HK_SHADER_TYPE.kVertex);
            _context.shaderSource(shader, source);
            _context.compileShader(shader);
            if (!_context.getShaderParameter(shader, hkEnums_2.HK_SHADER_PARAMETER.kCompileStatus)) {
                throw new Error("A shader compiling error occurred : "
                    + _context.getShaderInfoLog(shader));
            }
            return shader;
        };
        HkShaderFactory.CreateDefaultFragment = function (_context) {
            var source = "#version 100\n"
                + "precision mediump float;\n"
                + "uniform vec4 fcolor;\n"
                + "void main()\n"
                + "{\n"
                + "gl_FragColor = fcolor;\n"
                + "}\n";
            var shader = _context.createShader(hkEnums_2.HK_SHADER_TYPE.kFragment);
            _context.shaderSource(shader, source);
            _context.compileShader(shader);
            if (!_context.getShaderParameter(shader, hkEnums_2.HK_SHADER_PARAMETER.kCompileStatus)) {
                throw new Error("A shader compiling error occurred : "
                    + _context.getShaderInfoLog(shader));
            }
            return shader;
        };
        return HkShaderFactory;
    }());
    exports.HkShaderFactory = HkShaderFactory;
});
define("systems/graphics/hkProgramFactory", ["require", "exports", "utilities/hkEnums", "systems/graphics/hkShaderFactory"], function (require, exports, hkEnums_3, hkShaderFactory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkProgramFactory = void 0;
    var HkProgramFactory = /** @class */ (function () {
        function HkProgramFactory() {
        }
        HkProgramFactory.CreateDefault = function (_context) {
            var program = _context.createProgram();
            var vShader = hkShaderFactory_1.HkShaderFactory.CreateDefaultVertex(_context);
            var fShader = hkShaderFactory_1.HkShaderFactory.CreateDefaultFragment(_context);
            _context.attachShader(program, vShader);
            program.setVertexShader(vShader);
            _context.attachShader(program, fShader);
            program.setFragmentShader(vShader);
            _context.linkProgram(program);
            if (!_context.getProgramParameter(program, hkEnums_3.HK_PROGRAM_PARAMETER.kLinkStatus)) {
                throw new Error("Error linking shader.");
            }
            return program;
        };
        return HkProgramFactory;
    }());
    exports.HkProgramFactory = HkProgramFactory;
});
define("systems/graphics/WebGL/hkWebGLBuffer", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkWebGLBuffer = void 0;
    var HkWebGLBuffer = /** @class */ (function () {
        function HkWebGLBuffer() {
        }
        HkWebGLBuffer.Create = function (_context) {
            var buffer = new HkWebGLBuffer();
            buffer._m_buffer = _context.createBuffer();
            return buffer;
        };
        HkWebGLBuffer.prototype.getBuffer = function () {
            return this._m_buffer;
        };
        return HkWebGLBuffer;
    }());
    exports.HkWebGLBuffer = HkWebGLBuffer;
});
define("systems/graphics/WebGL/hkWebGLIndexBuffer", ["require", "exports", "systems/graphics/WebGL/hkWebGLBuffer"], function (require, exports, hkWebGLBuffer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkWebGLIndexBuffer = void 0;
    var HkWebGLIndexBuffer = /** @class */ (function (_super) {
        __extends(HkWebGLIndexBuffer, _super);
        function HkWebGLIndexBuffer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HkWebGLIndexBuffer.Create = function (_context) {
            var buffer = new HkWebGLIndexBuffer();
            buffer._m_buffer = _context.createBuffer();
            return buffer;
        };
        return HkWebGLIndexBuffer;
    }(hkWebGLBuffer_1.HkWebGLBuffer));
    exports.HkWebGLIndexBuffer = HkWebGLIndexBuffer;
});
define("systems/graphics/WebGL/hkWebGLEnums", ["require", "exports", "utilities/hkEnums"], function (require, exports, hkEnums_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkWebGLEnums = void 0;
    var HkWebGLEnums = /** @class */ (function () {
        function HkWebGLEnums() {
        }
        HkWebGLEnums.PrimitiveType = function (_type) {
            switch (_type) {
                case hkEnums_4.HK_PRIMITIVE_TYPE.kLineLoop:
                    return WebGLRenderingContext.LINE_LOOP;
                case hkEnums_4.HK_PRIMITIVE_TYPE.kLines:
                    return WebGLRenderingContext.LINES;
                case hkEnums_4.HK_PRIMITIVE_TYPE.kLineStrip:
                    return WebGLRenderingContext.LINE_STRIP;
                case hkEnums_4.HK_PRIMITIVE_TYPE.kPoints:
                    return WebGLRenderingContext.POINTS;
                case hkEnums_4.HK_PRIMITIVE_TYPE.kTriangleFan:
                    return WebGLRenderingContext.TRIANGLE_FAN;
                case hkEnums_4.HK_PRIMITIVE_TYPE.kTriangles:
                    return WebGLRenderingContext.TRIANGLES;
                case hkEnums_4.HK_PRIMITIVE_TYPE.kTriangleStrip:
                    return WebGLRenderingContext.TRIANGLE_STRIP;
                default:
                    throw new Error("Primitive type not implemented.");
            }
        };
        HkWebGLEnums.GraphicsCapability = function (_type) {
            switch (_type) {
                case hkEnums_4.HK_GRAPHICS_CAPABILITY.kBlend:
                    return WebGLRenderingContext.BLEND;
                case hkEnums_4.HK_GRAPHICS_CAPABILITY.kCullFace:
                    return WebGLRenderingContext.CULL_FACE;
                case hkEnums_4.HK_GRAPHICS_CAPABILITY.kDepthTest:
                    return WebGLRenderingContext.DEPTH_TEST;
                case hkEnums_4.HK_GRAPHICS_CAPABILITY.kDither:
                    return WebGLRenderingContext.DITHER;
                case hkEnums_4.HK_GRAPHICS_CAPABILITY.kPolygonOffsetFill:
                    return WebGLRenderingContext.POLYGON_OFFSET_FILL;
                case hkEnums_4.HK_GRAPHICS_CAPABILITY.kSampleAlphaToCoverage:
                    return WebGLRenderingContext.SAMPLE_ALPHA_TO_COVERAGE;
                case hkEnums_4.HK_GRAPHICS_CAPABILITY.kSampleCoverage:
                    return WebGLRenderingContext.SAMPLE_COVERAGE;
                case hkEnums_4.HK_GRAPHICS_CAPABILITY.kScissorTest:
                    return WebGLRenderingContext.SCISSOR_TEST;
                case hkEnums_4.HK_GRAPHICS_CAPABILITY.kStencilTest:
                    return WebGLRenderingContext.STENCIL_TEST;
                default:
                    throw new Error("Graphics capability type not implemented.");
            }
        };
        HkWebGLEnums.BufferType = function (_type) {
            switch (_type) {
                case hkEnums_4.HK_BUFFER_TARGET.kArray:
                    return WebGLRenderingContext.ARRAY_BUFFER;
                case hkEnums_4.HK_BUFFER_TARGET.kElementArray:
                    return WebGLRenderingContext.ELEMENT_ARRAY_BUFFER;
                default:
                    throw new Error("Buffer type not implemented.");
            }
        };
        HkWebGLEnums.DataUsage = function (_type) {
            switch (_type) {
                case hkEnums_4.HK_DATA_USAGE.kStaticDraw:
                    return WebGLRenderingContext.STATIC_DRAW;
                case hkEnums_4.HK_DATA_USAGE.kDynamicDraw:
                    return WebGLRenderingContext.DYNAMIC_DRAW;
                case hkEnums_4.HK_DATA_USAGE.kStreamDraw:
                    return WebGLRenderingContext.STREAM_DRAW;
                default:
                    throw new Error("Data usage type not implemented.");
            }
        };
        HkWebGLEnums.ShaderType = function (_type) {
            switch (_type) {
                case hkEnums_4.HK_SHADER_TYPE.kFragment:
                    return WebGLRenderingContext.FRAGMENT_SHADER;
                case hkEnums_4.HK_SHADER_TYPE.kVertex:
                    return WebGLRenderingContext.VERTEX_SHADER;
                default:
                    throw new Error("Shader type not implemented.");
            }
        };
        HkWebGLEnums.DataType = function (_type) {
            switch (_type) {
                case hkEnums_4.HK_DATA_TYPE.kByte:
                    return WebGLRenderingContext.BYTE;
                case hkEnums_4.HK_DATA_TYPE.kFloat:
                    return WebGLRenderingContext.FLOAT;
                case hkEnums_4.HK_DATA_TYPE.kHalfFloat:
                    return WebGLRenderingContext.FLOAT;
                case hkEnums_4.HK_DATA_TYPE.kShort:
                    return WebGLRenderingContext.SHORT;
                case hkEnums_4.HK_DATA_TYPE.kUnsignedByte:
                    return WebGLRenderingContext.UNSIGNED_BYTE;
                case hkEnums_4.HK_DATA_TYPE.kUnsignedShort:
                    return WebGLRenderingContext.UNSIGNED_SHORT;
                case hkEnums_4.HK_DATA_TYPE.kUnsignedInt:
                    return WebGL2RenderingContext.UNSIGNED_INT;
                default:
                    throw new Error("Data type not implemented.");
            }
        };
        HkWebGLEnums.ShaderParameter = function (_type) {
            switch (_type) {
                case hkEnums_4.HK_SHADER_PARAMETER.kCompileStatus:
                    return WebGLRenderingContext.COMPILE_STATUS;
                case hkEnums_4.HK_SHADER_PARAMETER.kDeleteStatus:
                    return WebGLRenderingContext.DELETE_STATUS;
                default:
                    throw new Error("Shader Parameter not implemented.");
            }
        };
        HkWebGLEnums.ProgramParameter = function (_type) {
            switch (_type) {
                case hkEnums_4.HK_PROGRAM_PARAMETER.kDeleteStatus:
                    return WebGLRenderingContext.DELETE_STATUS;
                case hkEnums_4.HK_PROGRAM_PARAMETER.kLinkStatus:
                    return WebGLRenderingContext.LINK_STATUS;
                case hkEnums_4.HK_PROGRAM_PARAMETER.kValidateStatus:
                    return WebGLRenderingContext.VALIDATE_STATUS;
                default:
                    throw new Error("Shader type not implemented.");
            }
        };
        return HkWebGLEnums;
    }());
    exports.HkWebGLEnums = HkWebGLEnums;
});
define("systems/graphics/WebGL/hkWebGLVertexBuffer", ["require", "exports", "systems/graphics/WebGL/hkWebGLBuffer"], function (require, exports, hkWebGLBuffer_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkWebGLVertexBuffer = void 0;
    var HkWebGLVertexBuffer = /** @class */ (function (_super) {
        __extends(HkWebGLVertexBuffer, _super);
        function HkWebGLVertexBuffer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HkWebGLVertexBuffer.Create = function (_context) {
            var buffer = new HkWebGLVertexBuffer();
            buffer._m_buffer = _context.createBuffer();
            return buffer;
        };
        return HkWebGLVertexBuffer;
    }(hkWebGLBuffer_2.HkWebGLBuffer));
    exports.HkWebGLVertexBuffer = HkWebGLVertexBuffer;
});
define("systems/graphics/WebGL/hkWebGLShader", ["require", "exports", "systems/graphics/WebGL/hkWebGLEnums"], function (require, exports, hkWebGLEnums_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkWebGLShader = void 0;
    var HkWebGLShader = /** @class */ (function () {
        function HkWebGLShader() {
        }
        HkWebGLShader.Create = function (_context, _type) {
            var shader = new HkWebGLShader();
            shader._m_shader = _context.createShader(hkWebGLEnums_1.HkWebGLEnums.ShaderType(_type));
            return shader;
        };
        HkWebGLShader.prototype.getShader = function () {
            return this._m_shader;
        };
        return HkWebGLShader;
    }());
    exports.HkWebGLShader = HkWebGLShader;
});
define("systems/graphics/WebGL/hkWebGLUniformLocation", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkWebGLUniformLocation = void 0;
    var HkWebGLUniformLocation = /** @class */ (function () {
        function HkWebGLUniformLocation(_uniformLocation) {
            this._m_uniformLocation = _uniformLocation;
            return;
        }
        HkWebGLUniformLocation.prototype.GetUniformLocation = function () {
            return this._m_uniformLocation;
        };
        return HkWebGLUniformLocation;
    }());
    exports.HkWebGLUniformLocation = HkWebGLUniformLocation;
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
define("systems/graphics/WebGL/hkWebGLContext", ["require", "exports", "utilities/hkEnums", "systems/graphics/WebGL/hkWebGLBuffer", "systems/graphics/WebGL/hkWebGLIndexBuffer", "systems/graphics/WebGL/hkWebGLEnums", "systems/graphics/WebGL/hkWebGLVertexBuffer", "systems/graphics/WebGL/hkWebGLShader", "systems/graphics/WebGL/hkWebGLProgram", "systems/graphics/WebGL/hkWebGLUniformLocation"], function (require, exports, hkEnums_5, hkWebGLBuffer_3, hkWebGLIndexBuffer_1, hkWebGLEnums_2, hkWebGLVertexBuffer_1, hkWebGLShader_1, hkWebGLProgram_1, hkWebGLUniformLocation_1) {
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
        HkWebGLContext.prototype.enable = function (_capability) {
            this._m_context.enable(hkWebGLEnums_2.HkWebGLEnums.GraphicsCapability(_capability));
            return;
        };
        HkWebGLContext.prototype.drawElements = function (_mode, _count, _type, _offset) {
            this._m_context.drawElements(hkWebGLEnums_2.HkWebGLEnums.PrimitiveType(_mode), _count, hkWebGLEnums_2.HkWebGLEnums.DataType(_type), _offset);
            return;
        };
        HkWebGLContext.prototype.createShader = function (_type) {
            return hkWebGLShader_1.HkWebGLShader.Create(this._m_context, _type);
        };
        HkWebGLContext.prototype.shaderSource = function (_shader, _source) {
            this._m_context.shaderSource(_shader.getShader(), _source);
            return;
        };
        HkWebGLContext.prototype.compileShader = function (_shader) {
            this._m_context.compileShader(_shader.getShader());
        };
        HkWebGLContext.prototype.getShaderParameter = function (_shader, _parameter) {
            return this._m_context.getShaderParameter(_shader.getShader(), hkWebGLEnums_2.HkWebGLEnums.ShaderParameter(_parameter));
        };
        HkWebGLContext.prototype.getShaderType = function (_shader) {
            var shaderType = this._m_context.getShaderParameter(_shader.getShader(), WebGLRenderingContext.SHADER_TYPE);
            if (shaderType === WebGLRenderingContext.FRAGMENT_SHADER) {
                return hkEnums_5.HK_SHADER_TYPE.kFragment;
            }
            else {
                return hkEnums_5.HK_SHADER_TYPE.kVertex;
            }
        };
        HkWebGLContext.prototype.getShaderInfoLog = function (_shader) {
            return this._m_context.getShaderInfoLog(_shader.getShader());
        };
        HkWebGLContext.prototype.createProgram = function () {
            return hkWebGLProgram_1.HkWebGLProgram.Create(this._m_context);
        };
        HkWebGLContext.prototype.attachShader = function (_program, _shader) {
            this._m_context.attachShader(_program.getProgram(), _shader.getShader());
            return;
        };
        HkWebGLContext.prototype.linkProgram = function (_program) {
            this._m_context.linkProgram(_program.getProgram());
            return;
        };
        HkWebGLContext.prototype.useProgram = function (_program) {
            this._m_context.useProgram(_program.getProgram());
            return;
        };
        HkWebGLContext.prototype.getProgramParameter = function (_program, _parameter) {
            return this._m_context.getProgramParameter(_program.getProgram(), hkWebGLEnums_2.HkWebGLEnums.ProgramParameter(_parameter));
        };
        HkWebGLContext.prototype.getAttribLocation = function (_program, _name) {
            return this._m_context.getAttribLocation(_program.getProgram(), _name);
        };
        HkWebGLContext.prototype.enableVertexAtrribArray = function (_index) {
            this._m_context.enableVertexAttribArray(_index);
            return;
        };
        HkWebGLContext.prototype.vertexAtrribPointer = function (_index, _size, _type, _normalized, _stride, _offset) {
            this._m_context.vertexAttribPointer(_index, _size, hkWebGLEnums_2.HkWebGLEnums.DataType(_type), _normalized, _stride, _offset);
            return;
        };
        HkWebGLContext.prototype.getUniformLocation = function (_program, _name) {
            var uniform = this._m_context.getUniformLocation(_program.getProgram(), _name);
            if (uniform === null) {
                // TODO Log ERROR
                throw new Error("Cant Get Uniform Location: " + _name);
            }
            return new hkWebGLUniformLocation_1.HkWebGLUniformLocation(uniform);
        };
        HkWebGLContext.prototype.uniformMatrix4fv = function (_location, _transpose, _data, _srcOffset, _srcLength) {
            this._m_context.uniformMatrix4fv(_location.GetUniformLocation(), _transpose, _data);
            return;
        };
        /**
         *
         * */
        HkWebGLContext.prototype.createBuffer = function () {
            var buffer = hkWebGLBuffer_3.HkWebGLBuffer.Create(this._m_context);
            return buffer;
        };
        /**
         *
         * */
        HkWebGLContext.prototype.createIndexBuffer = function () {
            var buffer = hkWebGLIndexBuffer_1.HkWebGLIndexBuffer.Create(this._m_context);
            return buffer;
        };
        /**
         *
         * */
        HkWebGLContext.prototype.createVertexBuffer = function () {
            var buffer = hkWebGLVertexBuffer_1.HkWebGLVertexBuffer.Create(this._m_context);
            return buffer;
        };
        /**
         *
         * @param _type
         * @param _buffer
         */
        HkWebGLContext.prototype.bindBuffer = function (_type, _buffer) {
            this._m_context.bindBuffer(hkWebGLEnums_2.HkWebGLEnums.BufferType(_type), _buffer.getBuffer());
            return;
        };
        HkWebGLContext.prototype.bufferData = function (_type, _data, _usage) {
            this._m_context.bufferData(hkWebGLEnums_2.HkWebGLEnums.BufferType(_type), _data, hkWebGLEnums_2.HkWebGLEnums.DataUsage(_usage));
            return;
        };
        /**
         *
         * */
        HkWebGLContext.prototype.getContext = function () {
            return this._m_context;
        };
        /**
         *
         * */
        HkWebGLContext.prototype.getAPIVersion = function () {
            return this._m_apiVersion;
        };
        /**
         *
         * @param _color
         */
        HkWebGLContext.prototype.setClearColor = function (_color) {
            var color = _color.color;
            this._m_context.clearColor(color.x, color.y, color.z, color.w);
            return;
        };
        /**
         *
         * */
        HkWebGLContext.prototype.clear = function () {
            var context = this._m_context;
            context.clear(context.COLOR_BUFFER_BIT | context.DEPTH_BUFFER_BIT);
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
define("systems/graphics/HkContextConfig", ["require", "exports", "utilities/hkColor", "utilities/hkEnums"], function (require, exports, hkColor_1, hkEnums_6) {
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
                this.powerPreference = hkEnums_6.HK_POWER_PREFERENCE.kDefault;
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
define("systems/graphics/hkGraphicsConfig", ["require", "exports", "utilities/hkEnums", "systems/graphics/HkContextConfig"], function (require, exports, hkEnums_7, HkContextConfig_1) {
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
                this.apiVersion = hkEnums_7.HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental;
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
 * @file HkGraphicsWebGL.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-08-2020
 */
define("systems/graphics/HkGraphicsWebGL", ["require", "exports", "utilities/hkCommons", "utilities/hkEnums", "systems/graphics/hkProgramFactory", "systems/graphics/WebGL/hkWebGLContext"], function (require, exports, hkCommons_1, hkEnums_8, hkProgramFactory_1, hkWebGLContext_1) {
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
        HkGraphicsWebGL.prototype.init = function (_game, _config) {
            var config = _config;
            this._m_APIVersion = config.apiVersion;
            ///////////////////////////////////
            // Canvas Element
            var element = document.getElementById(config.canvasId);
            if (element === null) {
                // Log error
                _game.logger.logError('No HTML Element found with an ID of : '
                    + config.canvasId);
                // Return result.
                return hkEnums_8.HK_OPRESULT.kObject_not_found;
            }
            if (!(element instanceof HTMLCanvasElement)) {
                _game.logger.logError("The HTML Element with an ID of : "
                    + config.canvasId
                    + " is not a canvas element");
                // Return result
                return hkEnums_8.HK_OPRESULT.kIncompatible_format;
            }
            var canvas = element;
            this._m_canvas = canvas;
            ///////////////////////////////////
            // Context Configuration
            // Get the power preference string.
            var strPowerPreference = hkCommons_1.StringifyPowerPreference(config.contextConfiguration.powerPreference);
            // Create the context attributes object.
            var contextConfig = {
                alpha: config.contextConfiguration.alpha,
                depth: config.contextConfiguration.depth,
                stencil: config.contextConfiguration.stencil,
                antialias: config.contextConfiguration.antialias,
                powerPreference: strPowerPreference
            };
            ///////////////////////////////////
            // Graphics Context
            var apiVersion = config.apiVersion;
            var context;
            if (apiVersion === hkEnums_8.HK_GRAPHICS_VERSION.kWebGL
                || apiVersion === hkEnums_8.HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental) {
                // Try to get the WebGL context.
                context = canvas.getContext('webgl', contextConfig);
                // or the Experimental WebGL context.
                if (context === null) {
                    context = canvas.getContext('experimental-webgl', contextConfig);
                }
            }
            else if (apiVersion === hkEnums_8.HK_GRAPHICS_VERSION.kWebGLExperimental) {
                // Get the experimental context.
                context = canvas.getContext('experimental-webgl', contextConfig);
            }
            else {
                // This Graphics module doesn't support the Graphics Version
                _game.logger.logError("Graphics WebGL Module doesn't support the given version");
                return hkEnums_8.HK_OPRESULT.kIncompatible_format;
            }
            // Check if it have the context.
            if (context === null) {
                _game.logger.logError("Browser doesn't support WebGL.");
                return hkEnums_8.HK_OPRESULT.kFail;
            }
            // Create context object.
            var iContext = new hkWebGLContext_1.HkWebGLContext();
            iContext.init(context, config.apiVersion);
            this._m_context = iContext;
            // Clear color.
            iContext.setClearColor(config.contextConfiguration.clearColor);
            // Program
            var program = hkProgramFactory_1.HkProgramFactory.CreateDefault(iContext);
            this._m_program = program;
            iContext.useProgram(program);
            iContext.enable(hkEnums_8.HK_GRAPHICS_CAPABILITY.kDepthTest);
            _game.graphics = this;
            // Return result
            return hkEnums_8.HK_OPRESULT.kSuccess;
        };
        HkGraphicsWebGL.prototype.update = function () {
            return;
        };
        HkGraphicsWebGL.prototype.draw = function () {
            var context = this._m_context;
            context.clear();
            return;
        };
        HkGraphicsWebGL.prototype.getID = function () {
            return hkEnums_8.HK_SYSTEM_ID.kGraphics;
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
        HkGraphicsWebGL.prototype.getProgram = function () {
            return this._m_program;
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
define("utilities/math/HkVector3", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkVector3 = void 0;
    var HkVector3 = /** @class */ (function () {
        function HkVector3(_x, _y, _z) {
            if (_x !== undefined) {
                this.x = _x;
            }
            else {
                this.x = 0.0;
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
            return;
        }
        HkVector3.Cross = function (_a, _b, _out) {
            var ax = _a.x;
            var ay = _a.y;
            var az = _a.z;
            var bx = _b.x;
            var by = _b.y;
            var bz = _b.z;
            _out.x = (ay * bz) - (az * by);
            _out.y = (az * bx) - (ax * bz);
            _out.z = (ax * by) - (ay * bx);
            return _out;
        };
        HkVector3.Substract = function (_a, _b, _out) {
            _out.x = _a.x - _b.x;
            _out.y = _a.y - _b.y;
            _out.z = _a.z - _b.z;
            return _out;
        };
        HkVector3.Add = function (_a, _b, _out) {
            _out.x = _a.x + _b.x;
            _out.y = _a.y + _b.y;
            _out.z = _a.z + _b.z;
            return _out;
        };
        HkVector3.Normalize = function (_a, _out) {
            var mag = _a.magnitude();
            if (mag === 0) {
                _out.copy(_a);
                return _out;
            }
            var factor = 1 / mag;
            _out.x = _a.x * factor;
            _out.y = _a.y * factor;
            _out.z = _a.z * factor;
            return _out;
        };
        HkVector3.prototype.set = function (_x, _y, _z) {
            this.x = _x;
            if (_y !== undefined) {
                this.y = _y;
            }
            if (_z !== undefined) {
                this.z = _z;
            }
            return this;
        };
        HkVector3.prototype.copy = function (_vector) {
            this.x = _vector.x;
            this.y = _vector.y;
            this.z = _vector.z;
            return this;
        };
        HkVector3.prototype.add = function (_vector) {
            this.x += _vector.x;
            this.y += _vector.y;
            this.z += _vector.z;
            return this;
        };
        HkVector3.prototype.substract = function (_vector) {
            this.x -= _vector.x;
            this.y -= _vector.y;
            this.z -= _vector.z;
            return this;
        };
        HkVector3.prototype.cross = function (_vector) {
            var ax = this.x;
            var ay = this.y;
            var az = this.z;
            var bx = _vector.x;
            var by = _vector.y;
            var bz = _vector.z;
            this.x = (ay * bz) - (az * by);
            this.y = (az * bx) - (ax * bz);
            this.z = (ax * by) - (ay * bx);
            return this;
        };
        HkVector3.prototype.magnitudeSqr = function () {
            var x = this.x;
            var y = this.y;
            var z = this.z;
            return (x * x) + (y * y) + (z * z);
        };
        HkVector3.prototype.magnitude = function () {
            var x = this.x;
            var y = this.y;
            var z = this.z;
            return Math.sqrt((x * x) + (y * y) + (z * z));
        };
        HkVector3.prototype.normalize = function () {
            var mag = this.magnitude();
            if (mag === 0) {
                return this;
            }
            this.divideScalar(mag);
            return this;
        };
        HkVector3.prototype.divideScalar = function (_scalar) {
            this.scale(1 / _scalar);
            return this;
        };
        HkVector3.prototype.scale = function (_scalar) {
            this.x *= _scalar;
            this.y *= _scalar;
            this.z *= _scalar;
            return this;
        };
        HkVector3.A = new HkVector3();
        HkVector3.B = new HkVector3();
        HkVector3.C = new HkVector3();
        return HkVector3;
    }());
    exports.HkVector3 = HkVector3;
});
define("utilities/math/hkMatrix4", ["require", "exports", "utilities/math/HkVector3"], function (require, exports, HkVector3_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkMatrix4 = void 0;
    var HkMatrix4 = /** @class */ (function () {
        function HkMatrix4() {
            this._m_aValues = new Float32Array(16);
            return;
        }
        HkMatrix4.MultiplyMatrices = function (_matA, _matB) {
            var mat4 = new HkMatrix4();
            var aV = _matA._m_aValues;
            var a11 = aV[0], a21 = aV[4], a31 = aV[8], a41 = aV[12];
            var a12 = aV[1], a22 = aV[5], a32 = aV[9], a42 = aV[13];
            var a13 = aV[2], a23 = aV[6], a33 = aV[10], a43 = aV[14];
            var a14 = aV[3], a24 = aV[7], a34 = aV[11], a44 = aV[15];
            var bV = _matB._m_aValues;
            var b11 = bV[0], b21 = bV[4], b31 = bV[8], b41 = bV[12];
            var b12 = bV[1], b22 = bV[5], b32 = bV[9], b42 = bV[13];
            var b13 = bV[2], b23 = bV[6], b33 = bV[10], b43 = bV[14];
            var b14 = bV[3], b24 = bV[7], b34 = bV[11], b44 = bV[15];
            var cV = mat4._m_aValues;
            cV[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
            cV[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
            cV[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
            cV[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
            cV[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
            cV[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
            cV[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
            cV[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
            cV[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
            cV[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
            cV[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
            cV[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
            cV[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
            cV[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
            cV[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
            cV[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
            return mat4;
        };
        HkMatrix4.prototype.multiply = function (_mat4) {
            var aV = this._m_aValues;
            var a11 = aV[0], a21 = aV[4], a31 = aV[8], a41 = aV[12];
            var a12 = aV[1], a22 = aV[5], a32 = aV[9], a42 = aV[13];
            var a13 = aV[2], a23 = aV[6], a33 = aV[10], a43 = aV[14];
            var a14 = aV[3], a24 = aV[7], a34 = aV[11], a44 = aV[15];
            var bV = _mat4._m_aValues;
            var b11 = bV[0], b21 = bV[4], b31 = bV[8], b41 = bV[12];
            var b12 = bV[1], b22 = bV[5], b32 = bV[9], b42 = bV[13];
            var b13 = bV[2], b23 = bV[6], b33 = bV[10], b43 = bV[14];
            var b14 = bV[3], b24 = bV[7], b34 = bV[11], b44 = bV[15];
            aV[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
            aV[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
            aV[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
            aV[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
            aV[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
            aV[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
            aV[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
            aV[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
            aV[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
            aV[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
            aV[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
            aV[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
            aV[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
            aV[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
            aV[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
            aV[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
            return this;
        };
        HkMatrix4.prototype.multiplyScalar = function (_s) {
            var aV = this._m_aValues;
            aV[0] *= _s;
            aV[4] *= _s;
            aV[8] *= _s;
            aV[12] *= _s;
            aV[1] *= _s;
            aV[5] *= _s;
            aV[9] *= _s;
            aV[13] *= _s;
            aV[2] *= _s;
            aV[6] *= _s;
            aV[10] *= _s;
            aV[14] *= _s;
            aV[3] *= _s;
            aV[7] *= _s;
            aV[11] *= _s;
            aV[15] *= _s;
            return this;
        };
        /**
         *
         * @param _matrix
         */
        HkMatrix4.prototype.copy = function (_matrix) {
            this._m_aValues.set(_matrix._m_aValues);
            return this;
        };
        /**
         * */
        HkMatrix4.prototype.clone = function () {
            var clone = new HkMatrix4();
            return clone.copy(this);
        };
        /**
         * Set this matrix an identity matrix (also called the unit matrix).
         * */
        HkMatrix4.prototype.identity = function () {
            var aV = this._m_aValues;
            this.setByValue(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            return this;
        };
        /**
         *
         * @param _col
         * @param _row
         */
        HkMatrix4.prototype.get = function (_col, _row) {
            return this._m_aValues[(_col * 4) + _row];
        };
        HkMatrix4.prototype.makeTranslation = function (_x, _y, _z) {
            if (typeof _x === "number") {
                this.setByValue(0, 0, 0, _x, 0, 0, 0, _y, 0, 0, 0, _z, 0, 0, 0, 1);
            }
            else {
                this.setByValue(0, 0, 0, _x.x, 0, 0, 0, _x.y, 0, 0, 0, _x.z, 0, 0, 0, 1);
            }
            return this;
        };
        HkMatrix4.prototype.makeScale = function (_x, _y, _z) {
            if (typeof _x === "number") {
                this.setByValue(_x, 0, 0, 0, 0, _y, 0, 0, 0, 0, _z, 0, 0, 0, 0, 1);
            }
            else {
                this.setByValue(_x.x, 0, 0, 0, 0, _x.y, 0, 0, 0, 0, _x.z, 0, 0, 0, 0, 1);
            }
            return this;
        };
        HkMatrix4.prototype.makeRotationX = function (_radians) {
            var c = Math.cos(_radians);
            var s = Math.sin(_radians);
            this.setByValue(1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1);
            return this;
        };
        HkMatrix4.prototype.makeRotationY = function (_radians) {
            var c = Math.cos(_radians);
            var s = Math.sin(_radians);
            this.setByValue(c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1);
            return this;
        };
        HkMatrix4.prototype.makeRotationZ = function (_radians) {
            var c = Math.cos(_radians);
            var s = Math.sin(_radians);
            this.setByValue(c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            return this;
        };
        HkMatrix4.prototype.makePerspective = function (_fov, _aspect, _near, _far) {
            // Based on https://webglfundamentals.org/webgl/lessons/webgl-3d-perspective.html
            var f = Math.tan((Math.PI * 0.5) - (0.5 * _fov));
            var rangeInv = 1.0 / (_near - _far);
            this.setByValue(f / _aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (_near + _far) * rangeInv, -1, 0, 0, _near * _far * rangeInv * 2, 0);
            return this;
        };
        HkMatrix4.prototype.lookAt = function (_position, _target, _up) {
            var forward = HkVector3_1.HkVector3.A;
            HkVector3_1.HkVector3.Substract(_target, _position, forward);
            if (forward.magnitudeSqr() === 0) {
                forward.z = 1;
            }
            forward.normalize();
            var right = HkVector3_1.HkVector3.B;
            HkVector3_1.HkVector3.Cross(_up, forward, right);
            if (right.magnitudeSqr() === 0) {
                if (Math.abs(_up.z) === 1) {
                    forward.x += 0.0001;
                }
                else {
                    forward.z += 0.0001;
                }
                forward.normalize();
                HkVector3_1.HkVector3.Cross(_up, forward, right);
            }
            right.normalize();
            var fixedUp = HkVector3_1.HkVector3.C;
            HkVector3_1.HkVector3.Cross(forward, right, fixedUp);
            this.setByValue(right.x, fixedUp.x, forward.x, 0, right.y, fixedUp.y, forward.y, 0, right.z, fixedUp.z, forward.z, 0, 0, 0, 0, 1);
            return this;
        };
        HkMatrix4.prototype.setByValue = function (_n11, _n12, _n13, _n14, _n21, _n22, _n23, _n24, _n31, _n32, _n33, _n34, _n41, _n42, _n43, _n44) {
            var aV = this._m_aValues;
            aV[0] = _n11;
            aV[4] = _n21;
            aV[8] = _n31;
            aV[12] = _n44;
            aV[1] = _n12;
            aV[5] = _n22;
            aV[9] = _n32;
            aV[13] = _n42;
            aV[2] = _n13;
            aV[6] = _n23;
            aV[10] = _n33;
            aV[14] = _n43;
            aV[3] = _n14;
            aV[7] = _n24;
            aV[11] = _n34;
            aV[15] = _n44;
            return this;
        };
        /**
         *
         * @param _col
         * @param _row
         * @param _value
         */
        HkMatrix4.prototype.set = function (_col, _row, _value) {
            this._m_aValues[(_col * 4) + _row] = _value;
            return;
        };
        /**
         *
         * */
        HkMatrix4.prototype.getValues = function () {
            return this._m_aValues;
        };
        return HkMatrix4;
    }());
    exports.HkMatrix4 = HkMatrix4;
});
define("objects/hkCamera", ["require", "exports", "utilities/math/hkMatrix4", "utilities/math/HkVector3"], function (require, exports, hkMatrix4_1, HkVector3_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkCamera = void 0;
    var HkCamera = /** @class */ (function () {
        function HkCamera() {
            this._m_position = new HkVector3_2.HkVector3();
            this._m_up = new HkVector3_2.HkVector3(0, 1, 0);
            this._m_forward = new HkVector3_2.HkVector3(0, 0, 1);
            this._m_target = new HkVector3_2.HkVector3();
            this._m_viewMatrix = new hkMatrix4_1.HkMatrix4();
            this._m_projMatrix = new hkMatrix4_1.HkMatrix4();
            this._m_isDirty = true;
            return;
        }
        HkCamera.prototype.setUp = function (_x, _y, _z) {
            var up = this._m_up;
            if (typeof _x === "number") {
                up.x = _x;
                up.y = _y;
                up.z = _z;
            }
            else {
                up.x = _x.x;
                up.y = _x.y;
                up.z = _x.z;
            }
            this._m_isDirty = true;
            return;
        };
        HkCamera.prototype.setTarget = function (_x, _y, _z) {
            var target = this._m_target;
            if (typeof _x === "number") {
                target.x = _x;
                target.y = _y;
                target.z = _z;
            }
            else {
                target.x = _x.x;
                target.y = _x.y;
                target.z = _x.z;
            }
            this._m_isDirty = true;
            return;
        };
        HkCamera.prototype.setPosition = function (_x, _y, _z) {
            var position = this._m_position;
            if (typeof _x === "number") {
                position.x = _x;
                position.y = _y;
                position.z = _z;
            }
            else {
                position.x = _x.x;
                position.y = _x.y;
                position.z = _x.z;
            }
            this._m_isDirty = true;
            return;
        };
        HkCamera.prototype.setPerspective = function (_fovy, _ratio, _near, _far) {
            this._m_projMatrix.makePerspective(_fovy, _ratio, _near, _far);
            return;
        };
        HkCamera.prototype.getViewMatrix = function () {
            if (this._m_isDirty) {
                this.updateMatrix();
            }
            return this._m_viewMatrix;
        };
        HkCamera.prototype.getProjectionMatrix = function () {
            return this._m_projMatrix;
        };
        HkCamera.prototype.getUp = function () {
            return this._m_up;
        };
        HkCamera.prototype.getTarget = function () {
            return this._m_target;
        };
        HkCamera.prototype.getForward = function () {
            return this._m_forward;
        };
        HkCamera.prototype.updateMatrix = function () {
            // Calculate the forward direction.
            var target = this._m_target;
            var forward = this._m_forward;
            var position = this._m_position;
            HkVector3_2.HkVector3.Substract(target, position, forward);
            forward.normalize();
            // Calculate view matrix.
            this._m_viewMatrix.lookAt(position, target, this._m_up);
            this._m_isDirty = false;
            return;
        };
        HkCamera.prototype.isDirty = function () {
            return this._m_isDirty;
        };
        return HkCamera;
    }());
    exports.HkCamera = HkCamera;
});
define("systems/scene/hkSceneSystem", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("systems/scene/cameraManager/hkCameraManager", ["require", "exports", "objects/hkCamera"], function (require, exports, hkCamera_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkCameraManager = void 0;
    var HkCameraManager = /** @class */ (function () {
        function HkCameraManager() {
        }
        HkCameraManager.prototype.init = function (_game, _scene) {
            this._m_aCameras = new Array();
            this.game = _game;
            this.scene = _scene;
            return;
        };
        HkCameraManager.prototype.start = function (_game, _scene) {
            this.game = _game;
            this.scene = _scene;
            var graphics = _game.graphics;
            var context = graphics.getContext();
            var program = graphics.getProgram();
            this._m_context = context;
            this._m_viewLocation = context.getUniformLocation(program, "viewMatrix");
            this._m_projectionLocation
                = context.getUniformLocation(program, "projectionMatrix");
            return;
        };
        HkCameraManager.prototype.update = function () {
            return;
        };
        HkCameraManager.prototype.draw = function () {
            var viewMatrix = this._m_active.getViewMatrix();
            this._m_context.uniformMatrix4fv(this._m_viewLocation, false, viewMatrix.getValues());
            return;
        };
        HkCameraManager.prototype.setActiveCamera = function (_camera) {
            var context = this._m_context;
            context.uniformMatrix4fv(this._m_projectionLocation, false, _camera.getProjectionMatrix().getValues());
            context.uniformMatrix4fv(this._m_viewLocation, false, _camera.getViewMatrix().getValues());
            this._m_active = _camera;
            return;
        };
        HkCameraManager.prototype.createCamera = function () {
            var camera = new hkCamera_1.HkCamera();
            this.addCamera(camera);
            return camera;
        };
        HkCameraManager.prototype.addCamera = function (_camera) {
            this._m_aCameras.push(_camera);
            return;
        };
        HkCameraManager.prototype.destroy = function () {
            return;
        };
        return HkCameraManager;
    }());
    exports.HkCameraManager = HkCameraManager;
});
define("components/hkIComponent", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("components/hkCmpCamera", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkCmpCamera = void 0;
    var HkCmpCamera = /** @class */ (function () {
        function HkCmpCamera() {
        }
        HkCmpCamera.prototype._init = function (_game, _scene) {
            // Create Camera.
            var camera = _scene.cameras.createCamera();
            this._m_camera = camera;
            var canvas = _game.graphics.getCanvas();
            camera.setPerspective(0.78539, canvas.width / canvas.height, 0.1, 100.0);
            return;
        };
        HkCmpCamera.prototype._start = function (_scene) {
            _scene.cameras.setActiveCamera(this._m_camera);
            return;
        };
        HkCmpCamera.prototype._update = function () {
            return;
        };
        HkCmpCamera.prototype._draw = function () {
            return;
        };
        HkCmpCamera.prototype._destroy = function () {
            return;
        };
        return HkCmpCamera;
    }());
    exports.HkCmpCamera = HkCmpCamera;
});
define("utilities/hkNode", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkObject = void 0;
    var HkObject = /** @class */ (function () {
        function HkObject() {
        }
        return HkObject;
    }());
    exports.HkObject = HkObject;
});
define("components/hkGameObject", ["require", "exports", "utilities/math/hkMatrix4", "utilities/hkNode", "utilities/math/HkVector3"], function (require, exports, hkMatrix4_2, hkNode_1, HkVector3_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkGameObject = void 0;
    var HkGameObject = /** @class */ (function (_super) {
        __extends(HkGameObject, _super);
        function HkGameObject(_name) {
            var _this = _super.call(this) || this;
            _this.name = _name;
            _this._m_hComponents = new Array();
            _this._m_position = new HkVector3_3.HkVector3();
            _this._m_rotation = new HkVector3_3.HkVector3();
            _this._m_scale = new HkVector3_3.HkVector3();
            _this._m_matrix = new hkMatrix4_2.HkMatrix4();
            _this._m_auxMat = new hkMatrix4_2.HkMatrix4();
            _this._m_isDirty = true;
            return _this;
        }
        HkGameObject.prototype.init = function (_game, _scene) {
            for (var _i = 0, _a = this._m_hComponents; _i < _a.length; _i++) {
                var component = _a[_i];
                component._init(_game, _scene);
            }
            return;
        };
        HkGameObject.prototype.start = function (_scene) {
            for (var _i = 0, _a = this._m_hComponents; _i < _a.length; _i++) {
                var component = _a[_i];
                component._start(_scene);
            }
            return;
        };
        HkGameObject.prototype.update = function () {
            for (var _i = 0, _a = this._m_hComponents; _i < _a.length; _i++) {
                var component = _a[_i];
                component._update();
            }
            return;
        };
        HkGameObject.prototype.draw = function () {
            for (var _i = 0, _a = this._m_hComponents; _i < _a.length; _i++) {
                var component = _a[_i];
                component._draw();
            }
            return;
        };
        HkGameObject.prototype.addComponent = function (_component) {
            this._m_hComponents.push(_component);
        };
        HkGameObject.prototype.setPosition = function (_x, _y, _z) {
            this._m_position.set(_x, _y, _z);
            this._m_isDirty = true;
            return;
        };
        HkGameObject.prototype.getPosition = function () {
            return this._m_position;
        };
        HkGameObject.prototype.setScale = function (_x, _y, _z) {
            this._m_scale.set(_x, _y, _z);
            this._m_isDirty = true;
            return;
        };
        HkGameObject.prototype.getScale = function () {
            return this._m_scale;
        };
        HkGameObject.prototype.setRotation = function (_x, _y, _z) {
            this._m_rotation.set(_x, _y, _z);
            this._m_isDirty = true;
            return;
        };
        HkGameObject.prototype.getRotation = function () {
            return this._m_rotation;
        };
        HkGameObject.prototype.getMatrix = function () {
            if (this._m_isDirty) {
                this._updateMatrix();
            }
            return this._m_matrix;
        };
        HkGameObject.prototype.destroy = function () {
            for (var _i = 0, _a = this._m_hComponents; _i < _a.length; _i++) {
                var component = _a[_i];
                component._destroy();
            }
            return;
        };
        HkGameObject.prototype._updateMatrix = function () {
            var mat = this._m_matrix;
            var aux = this._m_auxMat;
            mat.identity();
            mat.multiply(aux.makeTranslation(this._m_position));
            var rotation = this._m_rotation;
            mat.multiply(aux.makeRotationX(rotation.x));
            mat.multiply(aux.makeRotationY(rotation.y));
            mat.multiply(aux.makeRotationZ(rotation.z));
            mat.multiply(aux.makeScale(this._m_scale));
            this._m_isDirty = false;
        };
        return HkGameObject;
    }(hkNode_1.HkObject));
    exports.HkGameObject = HkGameObject;
});
define("systems/scene/gameObjectsManager/hkGameObjectsManager", ["require", "exports", "components/hkCmpCamera", "components/hkGameObject"], function (require, exports, hkCmpCamera_1, hkGameObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkGameObjectsManager = void 0;
    var HkGameObjectsManager = /** @class */ (function () {
        function HkGameObjectsManager() {
        }
        HkGameObjectsManager.prototype.init = function (_game, _scene) {
            this._m_game = _game;
            this._m_scene = _scene;
            this._m_hGameObjects = new Map();
            // Create Default Camera.
            var cameraGO = this.createGameObject("Camera");
            cameraGO.addComponent(new hkCmpCamera_1.HkCmpCamera());
            return;
        };
        HkGameObjectsManager.prototype.start = function (_game, _scene) {
            // Init each gameObject.
            this._m_hGameObjects.forEach(function (_gameObject) {
                _gameObject.init(_game, _scene);
                return;
            }, this);
            // Start each gameObject.
            this._m_hGameObjects.forEach(function (_gameObject) {
                _gameObject.start(_scene);
                return;
            }, this);
            return;
        };
        HkGameObjectsManager.prototype.update = function () {
            // Update each gameObject.
            this._m_hGameObjects.forEach(this._updateGameObject, this);
            return;
        };
        HkGameObjectsManager.prototype.draw = function () {
            // Draw each gameObject.
            this._m_hGameObjects.forEach(this._drawGameObject, this);
            return;
        };
        HkGameObjectsManager.prototype.createGameObject = function (_name) {
            if (!this.hasGameObject(_name)) {
                var gameObject = new hkGameObject_1.HkGameObject(_name);
                this._m_hGameObjects.set(_name, gameObject);
                return gameObject;
            }
            this._m_game.logger.logError("Already exists a gameObject with name: " + _name);
            return null;
        };
        HkGameObjectsManager.prototype.hasGameObject = function (_name) {
            return this._m_hGameObjects.has(_name);
        };
        HkGameObjectsManager.prototype.getGameObject = function (_name) {
            return this._m_hGameObjects.get(_name);
        };
        HkGameObjectsManager.prototype.destroy = function () {
            // Destroy each gameObject.
            this._m_hGameObjects.forEach(function (_gameObject) {
                _gameObject.destroy();
                return;
            }, this);
            return;
        };
        HkGameObjectsManager.prototype._updateGameObject = function (_gameObject) {
            _gameObject.update();
            return;
        };
        HkGameObjectsManager.prototype._drawGameObject = function (_gameObject) {
            _gameObject.draw();
            return;
        };
        return HkGameObjectsManager;
    }());
    exports.HkGameObjectsManager = HkGameObjectsManager;
});
define("systems/scene/hkScene", ["require", "exports", "systems/scene/cameraManager/hkCameraManager", "systems/scene/gameObjectsManager/hkGameObjectsManager"], function (require, exports, hkCameraManager_1, hkGameObjectsManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkScene = void 0;
    var HkScene = /** @class */ (function () {
        function HkScene() {
        }
        /**
         * */
        HkScene.prototype.onStart = function () {
            return;
        };
        /**
         *
         * @param _deltaTime
         */
        HkScene.prototype.onUpdate = function (_deltaTime) {
            return;
        };
        HkScene.prototype.onDraw = function () {
        };
        /**
         * */
        HkScene.prototype.onClose = function () {
            return;
        };
        /**
         * */
        HkScene.prototype.onDestroy = function () {
            return;
        };
        /**
         * Get the scene name.
         * */
        HkScene.prototype.getName = function () {
            return this._m_name;
        };
        HkScene.prototype._init = function (_game, _name) {
            this.game = _game;
            this._m_name = _name;
            // Initialize each scene system.
            var cameras = new hkCameraManager_1.HkCameraManager();
            this.cameras = cameras;
            cameras.init(_game, this);
            var gameObjects = new hkGameObjectsManager_1.HkGameObjectsManager();
            this.gameObjects = gameObjects;
            gameObjects.init(_game, this);
            // Start each scene system.
            cameras.start(_game, this);
            gameObjects.start(_game, this);
            return;
        };
        HkScene.prototype._update = function (_dt) {
            this.cameras.update();
            this.gameObjects.update();
            this.onUpdate(_dt);
            return;
        };
        HkScene.prototype._draw = function () {
            this.cameras.draw();
            this.gameObjects.draw();
            this.onDraw();
            return;
        };
        HkScene.prototype._destroy = function () {
            this.onDestroy();
            this.gameObjects.destroy();
            this.gameObjects = null;
            this.cameras.destroy();
            this.cameras = null;
            return;
        };
        HkScene.prototype._close = function () {
            this.onClose();
            return;
        };
        return HkScene;
    }());
    exports.HkScene = HkScene;
});
define("systems/scene/hkNullScene", ["require", "exports", "systems/scene/hkScene"], function (require, exports, hkScene_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkNullScene = void 0;
    var HkNullScene = /** @class */ (function (_super) {
        __extends(HkNullScene, _super);
        function HkNullScene() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HkNullScene.prototype.onStart = function () {
            return;
        };
        HkNullScene.prototype.onUpdate = function (_deltaTime) {
            return;
        };
        HkNullScene.prototype.onClose = function () {
            return;
        };
        HkNullScene.prototype.onDestroy = function () {
            return;
        };
        HkNullScene.prototype._init = function (_game, _name) {
            return;
        };
        HkNullScene.prototype._update = function (_dt) {
            return;
        };
        HkNullScene.prototype._draw = function () {
            return;
        };
        HkNullScene.prototype._destroy = function () {
            return;
        };
        HkNullScene.prototype._close = function () {
            return;
        };
        return HkNullScene;
    }(hkScene_1.HkScene));
    exports.HkNullScene = HkNullScene;
});
define("systems/scene/hkSceneManager", ["require", "exports", "utilities/hkEnums", "systems/scene/hkNullScene"], function (require, exports, hkEnums_9, hkNullScene_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkSceneManager = void 0;
    var HkSceneManager = /** @class */ (function () {
        function HkSceneManager() {
        }
        HkSceneManager.Create = function () {
            var sceneManager = new HkSceneManager();
            sceneManager._m_hScenes = new Map();
            sceneManager._m_active = new hkNullScene_1.HkNullScene();
            return sceneManager;
        };
        HkSceneManager.prototype.init = function (_game, _config) {
            this._m_game = _game;
            return hkEnums_9.HK_OPRESULT.kSuccess;
        };
        HkSceneManager.prototype.update = function () {
            this._m_active._update(this._m_game.deltaTime);
            return;
        };
        HkSceneManager.prototype.draw = function () {
            this._m_active._draw();
            return;
        };
        HkSceneManager.prototype.getID = function () {
            return hkEnums_9.HK_SYSTEM_ID.kSceneManager;
        };
        HkSceneManager.prototype.startScene = function (_key) {
            var scene = this.getScene(_key);
            if (scene !== null) {
                this._m_active._close();
                this._m_active._destroy();
                this._m_active = scene;
                this._m_active._init(this._m_game, _key);
                this._m_active.onStart();
            }
            return scene;
        };
        HkSceneManager.prototype.addScene = function (_key, _scene) {
            if (this.hasScene(_key)) {
                this._m_game.logger.logError("There is already a scene with the key : " + _key);
                return hkEnums_9.HK_OPRESULT.kObject_already_exists;
            }
            this._m_hScenes.set(_key, _scene);
            return hkEnums_9.HK_OPRESULT.kSuccess;
        };
        HkSceneManager.prototype.hasScene = function (_key) {
            return this._m_hScenes.has(_key);
        };
        HkSceneManager.prototype.getScene = function (_key) {
            var hScenes = this._m_hScenes;
            if (hScenes.has(_key)) {
                return hScenes.get(_key);
            }
            else {
                this._m_game.logger.logError("Scene not found: " + _key);
            }
            return null;
        };
        return HkSceneManager;
    }());
    exports.HkSceneManager = HkSceneManager;
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
define("game/hkGame", ["require", "exports", "systems/graphics/HkGraphicsWebGL", "systems/logger/hkLogger", "systems/scene/hkSceneManager", "utilities/hkEnums"], function (require, exports, HkGraphicsWebGL_1, hkLogger_1, hkSceneManager_1, hkEnums_10) {
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
            if (HkGame._INSTANCE !== undefined) {
                throw new Error("There is already an instance of a Hakool Game.");
            }
            // Create instance.
            var game = new HkGame();
            HkGame._INSTANCE = game;
            // Create system map.
            game._m_hSystems = new Map();
            // Initialize the game.
            var oResult = game._init(_config);
            // Check operation result.
            if (oResult !== hkEnums_10.HK_OPRESULT.kSuccess) {
                throw new Error("Game couldn't be created.");
            }
            game.deltaTime = 0;
            game._m_isRunning = false;
            game._m_lastTimeStamp = 0;
            return game;
        };
        HkGame.GameLoop = function () {
            HkGame._INSTANCE._loop();
            requestAnimationFrame(HkGame.GameLoop);
            return;
        };
        /**
         * Start the engine, with the main scene.
         *
         * @param _name the main scene name.
         */
        HkGame.prototype.start = function (_name) {
            if (!this._m_isRunning) {
                this.scene.startScene(_name);
                this._m_isRunning = true;
                this._m_lastTimeStamp = Date.now();
                HkGame.GameLoop();
            }
            return;
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
            if (graphicsAPIv === hkEnums_10.HK_GRAPHICS_VERSION.KWebGL_or_WebGLExperimental
                || graphicsAPIv === hkEnums_10.HK_GRAPHICS_VERSION.kWebGLExperimental
                || graphicsAPIv === hkEnums_10.HK_GRAPHICS_VERSION.kWebGL) {
                // WebGL 1 Graphics System.
                graphics = HkGraphicsWebGL_1.HkGraphicsWebGL.Create();
            }
            else {
                // TODO
            }
            // Initialize Graphics.
            oPresult = graphics.init(this, _config.graphics);
            // Success operation ?
            if (oPresult !== hkEnums_10.HK_OPRESULT.kSuccess) {
                return oPresult;
            }
            this.addSystem(hkEnums_10.HK_SYSTEM_ID.kGraphics, graphics);
            ///////////////////////////////////
            // Scene Manager
            var sceneManager = hkSceneManager_1.HkSceneManager.Create();
            this.scene = sceneManager;
            sceneManager.init(this, undefined);
            this.addSystem(hkEnums_10.HK_SYSTEM_ID.kSceneManager, sceneManager);
            ///////////////////////////////////
            // TODO    
            return hkEnums_10.HK_OPRESULT.kSuccess;
        };
        HkGame.prototype._loop = function () {
            // Calculate delta time.
            var now = Date.now();
            this.deltaTime = (now - this._m_lastTimeStamp) * 0.001;
            this._m_lastTimeStamp = now;
            // update.
            this._update();
            // draw.
            this._draw();
            return;
        };
        HkGame.prototype._update = function () {
            this._m_hSystems.forEach(this._updateSystem, this);
            return;
        };
        HkGame.prototype._updateSystem = function (_system) {
            _system.update();
            return;
        };
        HkGame.prototype._draw = function () {
            this._m_hSystems.forEach(this._drawSystem, this);
            return;
        };
        HkGame.prototype._drawSystem = function (_system) {
            _system.draw();
            return;
        };
        return HkGame;
    }());
    exports.HkGame = HkGame;
});
define("index", ["require", "exports", "hakool", "game/hkGame", "game/hkGameConfig", "systems/scene/hkScene", "systems/scene/hkSceneManager", "systems/graphics/hkGraphicsConfig", "systems/graphics/HkContextConfig", "utilities/math/hkMatrix4", "utilities/math/hkVector4", "utilities/hkColor", "utilities/hkEnums"], function (require, exports, hakool_1, hkGame_1, hkGameConfig_1, hkScene_2, hkSceneManager_2, hkGraphicsConfig_2, hkContextConfig_1, hkMatrix4_3, hkVector4_2, hkColor_2, hkEnums_11) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Object.defineProperty(exports, "Hakool", { enumerable: true, get: function () { return hakool_1.Hakool; } });
    Object.defineProperty(exports, "HkGame", { enumerable: true, get: function () { return hkGame_1.HkGame; } });
    Object.defineProperty(exports, "HkGameConfig", { enumerable: true, get: function () { return hkGameConfig_1.HkGameConfig; } });
    Object.defineProperty(exports, "HkScene", { enumerable: true, get: function () { return hkScene_2.HkScene; } });
    Object.defineProperty(exports, "HkSceneManager", { enumerable: true, get: function () { return hkSceneManager_2.HkSceneManager; } });
    Object.defineProperty(exports, "HkGraphicsConfig", { enumerable: true, get: function () { return hkGraphicsConfig_2.HkGraphicsConfig; } });
    Object.defineProperty(exports, "HkContextConfig", { enumerable: true, get: function () { return hkContextConfig_1.HkContextConfig; } });
    Object.defineProperty(exports, "HkMatrix4", { enumerable: true, get: function () { return hkMatrix4_3.HkMatrix4; } });
    Object.defineProperty(exports, "HkVector4", { enumerable: true, get: function () { return hkVector4_2.HkVector4; } });
    Object.defineProperty(exports, "HkColor", { enumerable: true, get: function () { return hkColor_2.HkColor; } });
    Object.defineProperty(exports, "HK_GRAPHICS_VERSION", { enumerable: true, get: function () { return hkEnums_11.HK_GRAPHICS_VERSION; } });
    Object.defineProperty(exports, "HK_POWER_PREFERENCE", { enumerable: true, get: function () { return hkEnums_11.HK_POWER_PREFERENCE; } });
    Object.defineProperty(exports, "HK_OPRESULT", { enumerable: true, get: function () { return hkEnums_11.HK_OPRESULT; } });
    Object.defineProperty(exports, "HK_SYSTEM_ID", { enumerable: true, get: function () { return hkEnums_11.HK_SYSTEM_ID; } });
});
define("systems/graphics/hkMesh", ["require", "exports", "utilities/hkEnums"], function (require, exports, hkEnums_12) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkMesh = void 0;
    var HkMesh = /** @class */ (function () {
        function HkMesh() {
        }
        HkMesh.prototype.init = function (_graphics, _vertices, _indices, _program) {
            var context = _graphics.getContext();
            ///////////////////////////////////
            // Vertex Buffer
            var vertexBuffer = context.createVertexBuffer();
            context.bindBuffer(hkEnums_12.HK_BUFFER_TARGET.kArray, vertexBuffer);
            context.bufferData(hkEnums_12.HK_BUFFER_TARGET.kArray, _vertices, hkEnums_12.HK_DATA_USAGE.kStaticDraw);
            // Position attribution
            var vertexPositionAttrib = context.getAttribLocation(_program, "position");
            context.enableVertexAtrribArray(vertexPositionAttrib);
            var floatSize = 4;
            context.vertexAtrribPointer(vertexPositionAttrib, 3, hkEnums_12.HK_DATA_TYPE.kFloat, false, 7 * floatSize, 0);
            // Color attribution
            var colorPositionAttrib = context.getAttribLocation(_program, "color");
            context.enableVertexAtrribArray(colorPositionAttrib);
            context.vertexAtrribPointer(colorPositionAttrib, 4, hkEnums_12.HK_DATA_TYPE.kFloat, false, 7 * floatSize, 3 * floatSize);
            // Set number of vertices
            this._m_numVertices = this._m_aVertices.length / 7;
            ///////////////////////////////////
            // Index Buffer
            var indexBuffer = context.createIndexBuffer();
            context.bindBuffer(hkEnums_12.HK_BUFFER_TARGET.kElementArray, indexBuffer);
            context.bufferData(hkEnums_12.HK_BUFFER_TARGET.kElementArray, _indices, hkEnums_12.HK_DATA_USAGE.kStaticDraw);
            return;
        };
        HkMesh.prototype.draw = function (_context) {
            _context.drawElements(hkEnums_12.HK_PRIMITIVE_TYPE.kTriangles, this._m_numVertices, hkEnums_12.HK_DATA_TYPE.kUnsignedShort, 0);
            return;
        };
        HkMesh.prototype.getVerticesSize = function () {
            return this._m_aVertices.length;
        };
        HkMesh.prototype.getIndicesSize = function () {
            return this._m_aIndices.length;
        };
        HkMesh.prototype.getVertexBuffer = function () {
            return this._m_vertexBuffer;
        };
        HkMesh.prototype.getIndexBuffer = function () {
            return this._m_indexBuffer;
        };
        return HkMesh;
    }());
    exports.HkMesh = HkMesh;
});
define("systems/graphics/hkMeshFactory", ["require", "exports", "systems/graphics/hkMesh"], function (require, exports, hkMesh_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkMeshFactory = void 0;
    var HkMeshFactory = /** @class */ (function () {
        function HkMeshFactory() {
        }
        HkMeshFactory.Cube = function (_graphics, _program) {
            var vertices = new Float32Array([
                -0.5, -0.5, -0.5,
                0.0, 0.0, 1.0, 1.0,
                0.5, -0.5, -0.5,
                0.0, 0.0, 1.0, 1.0,
                0.5, 0.5, -0.5,
                0.0, 0.0, 1.0, 1.0,
                -0.5, 0.5, -0.5,
                0.0, 0.0, 1.0, 1.0,
                -0.5, -0.5, 0.5,
                0.0, 0.0, 1.0, 1.0,
                0.5, -0.5, 0.5,
                0.0, 0.0, 1.0, 1.0,
                0.5, 0.5, 0.5,
                0.0, 0.0, 1.0, 1.0,
                -0.5, 0.5, 0.5,
                0.0, 0.0, 1.0, 1.0,
                -0.5, -0.5, -0.5,
                0.0, 0.0, 1.0, 1.0,
                -0.5, 0.5, -0.5,
                0.0, 0.0, 1.0, 1.0,
                -0.5, 0.5, 0.5,
                0.0, 0.0, 1.0, 1.0,
                -0.5, -0.5, 0.5,
                0.0, 0.0, 1.0, 1.0,
                0.5, -0.5, -0.5,
                0.0, 0.0, 1.0, 1.0,
                0.5, 0.5, -0.5,
                0.0, 0.0, 1.0, 1.0,
                0.5, 0.5, 0.5,
                0.0, 0.0, 1.0, 1.0,
                0.5, -0.5, 0.5,
                0.0, 0.0, 1.0, 1.0,
                -0.5, -0.5, -0.5,
                0.0, 0.0, 1.0, 1.0,
                -0.5, -0.5, 0.5,
                0.0, 0.0, 1.0, 1.0,
                0.5, -0.5, 0.5,
                0.0, 0.0, 1.0, 1.0,
                0.5, -0.5, -0.5,
                0.0, 0.0, 1.0, 1.0,
                -0.5, 0.5, -0.5,
                0.0, 0.0, 1.0, 1.0,
                -0.5, 0.5, 0.5,
                0.0, 0.0, 1.0, 1.0,
                0.5, 0.5, 0.5,
                0.0, 0.0, 1.0, 1.0,
                0.5, 0.5, -0.5,
                0.0, 0.0, 1.0, 1.0
            ]);
            var indices = new Uint16Array([
                0, 1, 2,
                0, 2, 3,
                4, 5, 6,
                4, 6, 7,
                8, 9, 10,
                8, 10, 11,
                12, 13, 14,
                12, 14, 15,
                16, 17, 18,
                16, 18, 19,
                20, 21, 22,
                20, 22, 23
            ]);
            var mesh = new hkMesh_1.HkMesh();
            mesh.init(_graphics, vertices, indices, _program);
            return mesh;
        };
        return HkMeshFactory;
    }());
    exports.HkMeshFactory = HkMeshFactory;
});
define("systems/graphics/hkModel", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkModel = void 0;
    var HkModel = /** @class */ (function () {
        function HkModel() {
        }
        HkModel.prototype.init = function () {
            this._m_aMesh = new Array();
            return;
        };
        return HkModel;
    }());
    exports.HkModel = HkModel;
});
define("systems/graphics/hkModelFactory", ["require", "exports", "systems/graphics/hkModel"], function (require, exports, hkModel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkModelFactory = void 0;
    var HkModelFactory = /** @class */ (function () {
        function HkModelFactory() {
        }
        HkModelFactory.CreateCube = function () {
            var model = new hkModel_1.HkModel();
            return model;
        };
        return HkModelFactory;
    }());
    exports.HkModelFactory = HkModelFactory;
});
define("utilities/hkInterpolation", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HkInterpolation = void 0;
    var HkInterpolation = /** @class */ (function () {
        function HkInterpolation() {
        }
        HkInterpolation.Linear = function (_a, _b, _t) {
            return _a + (_b - _a) * _t;
        };
        return HkInterpolation;
    }());
    exports.HkInterpolation = HkInterpolation;
});
//# sourceMappingURL=hakool.js.map