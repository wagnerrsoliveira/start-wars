export interface IResult<T> {
  Success: boolean;
  Message: string;
  Data: T;
}
