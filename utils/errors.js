class ExpressError extends Error {
  constructor(message, status) {
    this.message = message;
    this.status = status;
  };
};

class BadRequestError extends ExpressError {
  constructor(message="Bad request", status=400);
};

class NotFoundError extends ExpressError {
  constructor(message="Not found", status=404);
};

module.exports = { ExpressError, BadRequestError, NotFoundError }