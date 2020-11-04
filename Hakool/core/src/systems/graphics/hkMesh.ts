import {
  HK_BUFFER_TARGET,
  HK_DATA_TYPE,
  HK_DATA_USAGE,
  HK_PRIMITIVE_TYPE
} from "../../utilities/hkEnums";

import { HkIBuffer } from "./hkIBuffer";
import { HkIContext } from "./hkIContext";
import { HkIGraphics } from "./HkIGraphics";
import { HkIProgram } from "./hkIProgram";

export class HkMesh
{
  init
  (
    _graphics: HkIGraphics,
    _vertices: Float32Array,
    _indices: Uint16Array,
    _program: HkIProgram
  )
  : void
  {
    const context: HkIContext = _graphics.getContext();

    ///////////////////////////////////
    // Vertex Buffer

    const vertexBuffer: HkIBuffer = context.createVertexBuffer();

    context.bindBuffer(HK_BUFFER_TARGET.kArray, vertexBuffer);

    context.bufferData
    (
      HK_BUFFER_TARGET.kArray,
      _vertices,
      HK_DATA_USAGE.kStaticDraw
    );

    // Position attribution

    const vertexPositionAttrib: number = context.getAttribLocation
      (
        _program,
        "position"
      );

    context.enableVertexAtrribArray(vertexPositionAttrib);

    const floatSize: number = 4;

    context.vertexAtrribPointer
    (
      vertexPositionAttrib,
      3,
      HK_DATA_TYPE.kFloat,
      false,
      7 * floatSize,
      0
    );

    // Color attribution

    const colorPositionAttrib: number = context.getAttribLocation
    (
      _program,
      "color"
    );

    context.enableVertexAtrribArray(colorPositionAttrib);

    context.vertexAtrribPointer
    (
      colorPositionAttrib,
      4,
      HK_DATA_TYPE.kFloat,
      false,
      7 * floatSize,
      3 * floatSize
    );

    // Set number of vertices

    this._m_numVertices = this._m_aVertices.length / 7;

    ///////////////////////////////////
    // Index Buffer

    const indexBuffer: HkIBuffer = context.createIndexBuffer();

    context.bindBuffer(HK_BUFFER_TARGET.kElementArray, indexBuffer);

    context.bufferData
    (
      HK_BUFFER_TARGET.kElementArray,
      _indices,
      HK_DATA_USAGE.kStaticDraw
    );

    return;
  }

  draw(_context: HkIContext)
  : void
  {
    _context.drawElements
    (
      HK_PRIMITIVE_TYPE.kTriangles,
      this._m_numVertices,
      HK_DATA_TYPE.kUnsignedShort,
      0
    );
    return;
  }

  getVerticesSize()
    : number
  {
    return this._m_aVertices.length;
  }

  getIndicesSize()
    : number
  {
    return this._m_aIndices.length;
  }

  getVertexBuffer()
    : HkIBuffer
  {
    return this._m_vertexBuffer;
  }

  getIndexBuffer()
    : HkIBuffer
  {
    return this._m_indexBuffer;
  }

  private _m_numVertices: number;

  private _m_aVertices: Int32Array;

  private _m_aIndices: Int32Array;

  private _m_vertexBuffer: HkIBuffer;

  private _m_indexBuffer: HkIBuffer;
}