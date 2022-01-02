import debugLib from 'debug';
import { performance } from 'perf_hooks';

const debug = debugLib('gfp:Measure');

export const measure = (
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor
) => {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any) {
        try {
            const start = performance.now();
            const result = await originalMethod.apply(this, args);
            const finish = performance.now();
            debug(`${propertyKey} Execution time: ${finish - start} milliseconds`);
            return result;
        } catch (error) {
            const [, , next] = args;
            next(error);
        }
        return true;
    };
    return descriptor;
};
