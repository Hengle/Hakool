export interface HkIShader
{
  /**
   * Get the wrapped object.
   * */
  getShader<T>()
    : T;
}