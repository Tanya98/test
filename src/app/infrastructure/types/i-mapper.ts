export interface IMapper<TInputData, TOutputData> {

  handle(model: TInputData, ...args): TOutputData;
}
