/**
 * HummingFlight Software Technologies - 2020
 *
 * @summary 
 *
 * @file hkContextConfig.ts
 * @author Max Alberto Solano Maldonado <nuup20@gmail.com>
 * @since September-08-2020
 */

import { HK_POWER_PREFERENCE } from "../../utilities/hkEnums";

export class hkContextConfig
{

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
  constructor
  (
    _bAlpha ?: boolean,
    _bDepth ?: boolean,
    _bStencil ?: boolean,
    _bAntialias ?: boolean,
    _powerPreference ?: HK_POWER_PREFERENCE
  )
  {
    // Alpha buffer.

    if(_bAlpha !== undefined)
    {
      this.alpha = _bAlpha;
    }
    else
    {
      this.alpha = true;
    }

    // Depth buffer.

    if(_bDepth !== undefined)
    {
      this.depth = _bDepth;
    }
    else
    {
      this.depth = true;
    }

    // Stencil buffer.

    if(_bStencil !== undefined)
    {
      this.stencil = _bStencil
    }
    else
    {
      this.stencil = false;
    }

    // Antialias.

    if(_bAntialias !== undefined)
    {
      this.antialias = _bAntialias;
    }
    else
    {
      this.antialias = true;
    }

    // Power preference.

    if(_powerPreference !== undefined)
    {
      this.powerPreference = _powerPreference;
    }
    else
    {
      this.powerPreference = HK_POWER_PREFERENCE.kDefault;
    }
  }

  /**
   * Boolean that indicates whether the canvas contains an alpha buffer.
   */
  alpha : boolean;

  /**
   * Boolean that indicates if the drawing buffer has a depth buffer of at least
   * 16 bits.
   */
  depth : boolean;

  /**
   * Boolean that indicates that the drawing buffer has a stencil buffer of at
   * least 8 bits.
   */
  stencil : boolean;

  /**
   * Boolean that indicates whether or not to perform anti-aliasing.
   */
  antialias : boolean;

  /**
   * A hint to the user agent indicating what configuration of GPU is suitable
   * for the WebGL context.
   */
  powerPreference : HK_POWER_PREFERENCE;
}