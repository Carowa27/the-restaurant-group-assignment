import express, { Express, NextFunction, Request, Response } from "express";
exports.catchErrors = (fn: any) => {
  return function (req: Request, res: Response, next: NextFunction) {
    return fn(req, res, next).catch(next);
  };
};

class CustomAPIError extends Error {
  constructor(message: string) {
    super(message);
  }
}

class NotFoundError extends CustomAPIError {
  constructor(message: string) {
    super(message);
    this.statusCode = 404;
    this.name = "NotFound";
  }
}

class BadRequestError extends CustomAPIError {
  constructor(message: string) {
    super(message);
    this.statusCode = 400;
    this.name = "BadRequest";
  }
}

module.exports = {
  CustomAPIError,
  NotFoundError,
  BadRequestError,
};
