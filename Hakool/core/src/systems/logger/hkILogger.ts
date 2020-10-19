export
  interface HkILogger
{
  log(_msg: string)
    : void;

  logError(_msg: string)
    : void;

  logWarning(_msg: string)
    : void;
}