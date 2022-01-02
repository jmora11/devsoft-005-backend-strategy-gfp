import { Router } from 'express';
import { OpenApiValidator } from 'express-openapi-validate';
import gfpController from '../controller/GFPController';
import { makeValidationInstance } from '../utils/openApi';
 
class SecurityRouter {
 public router: Router = Router();
 
 constructor() {
   const validator = makeValidationInstance();
   this.config(validator);
 }
 
 private config(validator: OpenApiValidator): void {
   this.router.post(
     '/add',
     validator.validate('post', '/V1/Enterprise/crud-gfp/add'),
     gfpController.save
   );
 }
}

const securityRouter = new SecurityRouter();
export default securityRouter.router;