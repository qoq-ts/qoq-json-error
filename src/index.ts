import error from 'koa-json-error';
import { Slot } from 'qoq';

type JSONErrorOptions = NonNullable<Parameters<typeof error>[number]>;

export class JsonError extends Slot<Slot.Web> {
  constructor(options?: JSONErrorOptions | JSONErrorOptions['format']) {
    super();
    this.use(error(typeof options === 'function' ? { format: options } : options));
  }
}
