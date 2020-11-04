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
/* Graphics API Version                             */
/****************************************************/

/**
 * Used to configure the Graphic API version.
 */

export type HK_GRAPHICS_VERSION = EnumLiteralsOf<typeof HK_GRAPHICS_VERSION>;

export const HK_GRAPHICS_VERSION = Object.freeze
({

  /**
   * WebGL 1 (Open GL ES 2.0).
   */
  kWebGL : 0 as 0,

  /**
   * WebGL Experimental (Open GL ES 2.0).
   */
  kWebGLExperimental : 1 as 1,
  
  /**
   * WebGL 2 (Open GL ES 3.0).
   */
  kWebGL2 : 2 as 2,

  /**
   * WebGL 2 Experimental (Open GL ES 3.0).
   */
  kWebGL2Experimental : 3 as 3,

  /**
   * WebGL 1 or WebGL 1 Experimental (Open GL ES 2.0).
   */
  KWebGL_or_WebGLExperimental : 4 as 4,

  /**
   * WebGL 2 or WebGL 2 Experimental (Open GL ES 3.0).
   */
  kWebGL2_or_WebGL2Experimental : 5 as 5
});

/****************************************************/
/* GPU Configuration                                */
/****************************************************/

/**
 * Used to configure the GPU power consumption for the application.
 */

export type HK_POWER_PREFERENCE = EnumLiteralsOf<typeof HK_POWER_PREFERENCE>;

export const HK_POWER_PREFERENCE = Object.freeze
({

  /**
   * The user agent decide which GPU configuration is most suitable.
   */
  kDefault : 0 as 0,

  /**
   * Prioritizes rendering performance over power consumption.
   */
  kHighPerformance : 1 as 1,
  
  /**
   * Prioritizes power saving over rendering performance.
   */
  kLowPower : 2 as 2
});

/****************************************************/
/* Operation Result                                 */
/****************************************************/

/**
 * A result identifier, useful for keeping track of what happened during the
 * operation.
 */
export type HK_OPRESULT = EnumLiteralsOf<typeof HK_OPRESULT>;

export const HK_OPRESULT = Object.freeze
({
  
  /**
   * Undefined result.
   */
  kUndefined : -1 as -1,    
  
  /**
   * The Operation was a failure.
   */
  kFail : 0 as 0,
  
  /**
   * The Operation was a success.
   */
  kSuccess : 1 as 1,
  
  /**
   * The operation couldn't found a file.
   */
  kFile_not_found : 2 as 2,
  
  /**
   * The operation couldn't found an object.
   */
  kObject_not_found : 3 as 3,
  
  /**
   * Incompatible format.
   */
  kIncompatible_format : 4 as 4,
  
  /**
   * The operation found a null type.
   */
  kNull_type : 5 as 5,
  
  /**
   * The operation found an invalid type.
   */
  kInvalid_type : 6 as 6,
  
  /**
   * An object already exists.
   */
  kObject_already_exists : 7 as 7,

  /**
   * The operation is not implemented yet.
   */
  kUnimplemented_operation : 8 as 8
});

/****************************************************/
/* Graphics Capability                                 */
/****************************************************/

/**
 * Used to specify the graphics capability to enable.
 */

export type HK_GRAPHICS_CAPABILITY = EnumLiteralsOf<typeof HK_GRAPHICS_CAPABILITY>;

export const HK_GRAPHICS_CAPABILITY = Object.freeze
  ({

    /**
     * Activates blending of the computed fragment color value.
     */
    kBlend: 0 as 0,

    /**
     * Activates depth culling of polygons.
     */
    kCullFace: 1 as 1,

    /**
     * Activates depth comparisons.
     */
    kDepthTest: 2 as 2,

    /**
     * Activates dithering of color components before they get written to the 
     * color buffer.
     */
    kDither: 3 as 3,

    /**
     * Activates adding an offset to depth values of polygon's fragments.
     */
    kPolygonOffsetFill: 4 as 4,

    /**
     * Activates the computation of a temporary coverage value determined by
     * the alpha value.
     */
    kSampleAlphaToCoverage: 5 as 5,

    /**
     * Activates ANDing the fragment's coverage with the temporary coverage 
     * value.
     */
    kSampleCoverage: 6 as 6,

    /**
     * Activates scissor test
     * */
    kScissorTest: 7 as 7,

    /**
     * Activates stencil testing.
     * */
    kStencilTest: 8 as 8

  });

/****************************************************/
/* Log Message ID                                   */
/****************************************************/

/****************************************************/
/* Primitive Type                                   */
/****************************************************/

export type HK_PRIMITIVE_TYPE = EnumLiteralsOf<typeof HK_PRIMITIVE_TYPE>;

export const HK_PRIMITIVE_TYPE = Object.freeze
  ({

    /**
     * Draws a single dot.
     */
    kPoints: 0 as 0,

    /**
     * Draws a straight line to the next vertex.
     * */
    kLineStrip: 1 as 1,

    /**
     * Draws a straight line to the next vertex, and connects the last vertex
     * back to the first.
     * */
    kLineLoop: 2 as 2,

    /**
     * Draws a line between a pair of vertices.
     * */
    kLines: 3 as 3,

    /**
     * 
     * */
    kTriangleStrip: 4 as 4,

    /**
     * 
     * */
    kTriangleFan: 5 as 5,

    /**
     * Draws a triangle for a group of three vertices.
     * */
    kTriangles: 6 as 6
  })

/****************************************************/
/* Data Type                                        */
/****************************************************/

export type HK_DATA_TYPE = EnumLiteralsOf<typeof HK_DATA_TYPE>;

export const HK_DATA_TYPE = Object.freeze
  ({

    /**
     * Signed 8-bit integer, values in [-128, 127].
     */
    kByte: 0 as 0,

    /**
     * Signed 16-bit integer, values in [-32,768, 32,767].
     * */
    kShort: 1 as 1,

    /**
     * Unsigned 8-bit integer, values in [0, 255].
     * */
    kUnsignedByte: 2 as 2,

    /**
     * Unsigned 16-bit integer, with values in [0, 65,535].
     * */
    kUnsignedShort: 3 as 3,

    /**
     * 32 bit IEEE floating point number.
     * */
    kFloat: 4 as 4,

    /**
     * 16 bit IEEE floating point number. (only for WebGL 2).
     * */
    kHalfFloat: 5 as 5,

    /**
     * Unsigned 32-bit integer, with values in [0, 65,535] or [0, 4,294.967,295].
     * */
    kUnsignedInt : 6 as 6
  })

/****************************************************/
/* Buffer Target ID                                 */
/****************************************************/

export type HK_SHADER_PARAMETER = EnumLiteralsOf<typeof HK_SHADER_PARAMETER>;

export const HK_SHADER_PARAMETER = Object.freeze
  ({

    /**
     * Check if the shader is flagged for deletion.
     */
    kDeleteStatus: 0 as 0,

    /**
     * Check if last shader compilation was successful.
     * */
    kCompileStatus: 1 as 1

  })

/****************************************************/
/* Program Parameter                                */
/****************************************************/

export type HK_PROGRAM_PARAMETER = EnumLiteralsOf<typeof HK_PROGRAM_PARAMETER>;

export const HK_PROGRAM_PARAMETER = Object.freeze
  ({

    /**
     * Check if the program is flagged for deletion.
     */
    kDeleteStatus: 0 as 0,

    /**
     * Check if the last link operation was successful.
     * */
    kLinkStatus: 1 as 1,

    /**
     * Check if the las validation operation was successful.
     * */
    kValidateStatus: 2 as 2

  })

/****************************************************/
/* Buffer Target ID                                 */
/****************************************************/

export type HK_BUFFER_TARGET = EnumLiteralsOf<typeof HK_BUFFER_TARGET>;

export const HK_BUFFER_TARGET = Object.freeze
({

  /**
   * Used for vertex attributes. Example: Vertex coordinates, texture coordinates
   * color coordinates.
   */
  kArray: 0 as 0,

  /**
   * Used for element indices.
   * */
  kElementArray : 1 as 1

})

/****************************************************/
/* Shader Type ID                                   */
/****************************************************/

export type HK_SHADER_TYPE = EnumLiteralsOf<typeof HK_SHADER_TYPE>;

export const HK_SHADER_TYPE = Object.freeze
  ({

    /**
     * Specified once by the application, and used many times as the source
     * for WebGL drawing and image specification commands.
     */
    kFragment: 0 as 0,

    /**
     * Specified repeatedly by the application, an used as many times as the 
     * source for WebGL drawing and image specification commands.
     * */
    kVertex: 1 as 1
  })

/****************************************************/
/* Data Usage ID                                 */
/****************************************************/

export type HK_DATA_USAGE = EnumLiteralsOf<typeof HK_DATA_USAGE>;

export const HK_DATA_USAGE = Object.freeze
  ({

    /**
     * Specified once by the application, and used many times as the source
     * for WebGL drawing and image specification commands.
     */
    kStaticDraw: 0 as 0,

    /**
     * Specified repeatedly by the application, an used as many times as the 
     * source for WebGL drawing and image specification commands.
     * */
    kDynamicDraw: 1 as 1,

    /**
     * Specified once by the application, and used a few times as the source
     * for WebGL drawing and image specification commands.
     * */
    kStreamDraw: 2 as 2
  });

/****************************************************/
/* System IDs                                       */
/****************************************************/

export type HK_SYSTEM_ID = EnumLiteralsOf<typeof HK_SYSTEM_ID>;

export const HK_SYSTEM_ID = Object.freeze
({
  
  /**
   * Undefined.
   */
  kUndefined : -1 as -1,
  
  /**
   * Graphics System.
   */
  kGraphics: 0 as 0,

  /**
   * Scene manager.
   * */
  kSceneManager: 1 as 1

})