import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(public ngxLoader: NgxUiLoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    setTimeout(()=> this.ngxLoader.start(), 0);
    return next.handle(req).pipe(
      finalize(() => setTimeout(()=> this.ngxLoader.stop(), 0))
    );
  }
}
