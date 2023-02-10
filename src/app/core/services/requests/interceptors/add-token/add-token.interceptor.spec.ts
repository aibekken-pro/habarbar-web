import { TestBed } from '@angular/core/testing';

import { AddTokensInterceptor } from './add-token.interceptor';

describe('HttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AddTokensInterceptor,
    ],
  }));

  it('should be created', () => {
    const interceptor: AddTokensInterceptor = TestBed.inject(AddTokensInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
