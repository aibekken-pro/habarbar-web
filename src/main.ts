import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app/app.routs';
import { AppComponent } from './app/app.component';
import { addBaseUrlInterceptor } from './app/core/services/requests/interceptors/add-base-url/add-base-url.interceptorFn';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(appRoutes)),
    provideHttpClient(withInterceptors([addBaseUrlInterceptor]), withInterceptorsFromDi()),
  ],
})
  .catch((err) => console.error(err));
