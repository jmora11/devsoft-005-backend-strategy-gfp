import { Request } from 'express';
 
type stringNullable = string | null | undefined;
 
export const xRqUID = 'X-RqUID';
export const xCustIdentType = 'X-CustIdentType';
export const xCustIdentNum = 'X-CustIdentNum';
export const xCellphone = 'X-CustCellphone';
export const xProduct = 'x-Product';
 
export class RequestHeadersModel {
   public 'X-RqUID': stringNullable;
   public 'X-CustIdentType': stringNullable;
   public 'X-CustIdentNum': stringNullable;
   public 'X-CustCellphone': stringNullable;
   public 'x-Product': stringNullable;
   constructor(request: Request) {
       this[xRqUID] = request.header(xRqUID);
       this[xCustIdentType] = request.header(xCustIdentType) ;
       this[xCustIdentNum] = request.header(xCustIdentNum);
       this[xCellphone] = request.header(xCellphone);
       this[xProduct] = request.header(xProduct);
   }
}
