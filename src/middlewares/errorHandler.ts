import { Request, Response, NextFunction } from 'express';

interface AppError extends Error {
  status?: number;
}

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.status || 500;
  console.error(`[ERROR] ${req.method} ${req.url} -> ${err.message}`);

  res.status(statusCode).json({
    success: false,
    error: err.message || 'Internal Server Error',
    status: statusCode,
  });
};
