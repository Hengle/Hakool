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
  kGraphics : 0 as 0

})