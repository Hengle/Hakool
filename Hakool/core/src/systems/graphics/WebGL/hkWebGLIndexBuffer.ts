import { HkWebGLBuffer } from "./hkWebGLBuffer";

export class HkWebGLIndexBuffer
  extends HkWebGLBuffer
{
  static Create(_context: WebGLRenderingContext)
    : HkWebGLIndexBuffer
  {
    const buffer: HkWebGLIndexBuffer = new HkWebGLIndexBuffer();

    buffer._m_buffer = _context.createBuffer();

    return buffer;
  }
}