export const createError = (message: string, status = 400) => {
    const error = new Error(message) as any;
    error.status = status;
    return error;
  };
  