import { OpenApiValidator } from 'express-openapi-validate';
import fs from 'fs';
import { join } from 'path';

export const makeValidationInstance = (): OpenApiValidator => {
   const openApiDocumentPath = join(__dirname, `../../static/gfpManagement-OAS.json`);
   const openApiDocument = fs.readFileSync(openApiDocumentPath, 'utf-8');
   return new OpenApiValidator(JSON.parse(openApiDocument));
};
