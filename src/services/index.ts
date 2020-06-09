import * as basketService from './basket';

export interface Injections {
  basketService: typeof basketService;
}

export const services = {
  basketService,
};
