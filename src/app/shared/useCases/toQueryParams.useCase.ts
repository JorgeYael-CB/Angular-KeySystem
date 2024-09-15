import { HttpParams } from "@angular/common/http";




export function toQueryParamsUseCase( obj: {[key:string]:any} ):HttpParams {
  let params: HttpParams = new HttpParams();

  for( let key in obj ){
    if( key in obj ){
      params = params.append(key, obj[key]);
    }
  }

  return params;
}
