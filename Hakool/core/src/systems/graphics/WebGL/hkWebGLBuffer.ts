export class HkWebGLBuffer
{
  static Create(_context: WebGLRenderingContext)
    : HkWebGLBuffer
  {
    const buffer: HkWebGLBuffer = new HkWebGLBuffer();

    buffer._m_buffer = _context.createBuffer();

    return buffer;
  }

  getBuffer<T>()
    : T
  {
    return this._m_buffer as T;
  } 

  protected constructor() { }

  protected _m_buffer: WebGLBuffer;
}