export const chain = (middlewares, index = 0) => {
  const currentMiddleware = middlewares[index];

  if (currentMiddleware) {
    const nextMiddleware = chain(middlewares, index + 1);
    return currentMiddleware(nextMiddleware);
  }

  return (_reqeust, _event, response) => response;
};
