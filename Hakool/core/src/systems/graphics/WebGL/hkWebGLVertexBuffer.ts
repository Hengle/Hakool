import { HkWebGLBuffer } from "./hkWebGLBuffer";

export class HkWebGLVertexBuffer
  extends HkWebGLBuffer
{
  static Create(_context: WebGLRenderingContext)
    : HkWebGLVertexBuffer
  {
    const buffer: HkWebGLVertexBuffer = new HkWebGLVertexBuffer();

    buffer._m_buffer = _context.createBuffer();

    return buffer;
  }
}