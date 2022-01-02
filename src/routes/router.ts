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
      '/gfp/add',
      validator.validate('post', '/V1/Enterprise/gfp/add'),
      gfpController.create
    );

    this.router.get(
      '/gfp/all',
      validator.validate('get', '/V1/Enterprise/gfp/all'),
      gfpController.getAll
    );

    this.router.get(
      '/gfp/:id',
      validator.validate('get', '/V1/Enterprise/gfp/{id}'),
      gfpController.getById
    );
  }
}

const securityRouter = new SecurityRouter();
export default securityRouter.router;