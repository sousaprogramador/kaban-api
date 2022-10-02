import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../errors/AppError';

export const errorHandler = (err: Error, request: Request, response: Response, next: NextFunction): Response => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'Error',
    message: `Internal server error -${err.message}`,
  });
};
