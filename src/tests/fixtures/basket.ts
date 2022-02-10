/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { rest } from 'msw';

export const getBasket = rest.get('https://euricom-test-api.herokuapp.com/api/basket/xyz', (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json([
      {
        id: 1,
        productId: 1,
        quantity: 1,
      },
      {
        id: 2,
        productId: 2,
        quantity: 1,
      },
      {
        id: 3,
        productId: 3,
        quantity: 1,
      },
    ]),
  ),
);

export const getBasketFailed = (errorCode = 404) =>
  rest.get('https://euricom-test-api.herokuapp.com/api/basket/xyz', (req, res, ctx) => res(ctx.status(errorCode)));

export const postItemToBasket = rest.post(
  'https://euricom-test-api.herokuapp.com/api/basket/xyz/product/:productId',
  (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json([
        {
          id: 1,
          productId: 1,
          quantity: 1,
        },
      ]),
    ),
);

export const patchBasket = rest.patch(
  'https://euricom-test-api.herokuapp.com/api/basket/xyz/product/:productId',
  (req, res, ctx) =>
    res(
      ctx.json([
        {
          id: 1,
          productId: 1,
          quantity: 2,
        },
      ]),
    ),
);

export const clearBasket = rest.delete('https://euricom-test-api.herokuapp.com/api/basket/xyz', (req, res, ctx) =>
  res(ctx.json([])),
);