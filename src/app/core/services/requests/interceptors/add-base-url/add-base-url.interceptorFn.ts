import { HttpInterceptorFn } from "@angular/common/http";

export const addBaseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const BASE_URL = 'http://127.0.0.1:5001/habar-ad-apps/us-central1';

  const newReq = req.clone({
    url: `${BASE_URL}${req.url}`,
  });
  return next(newReq);
};
