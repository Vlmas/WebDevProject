import { HttpHandler, HttpInterceptor, HttpEvent, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token')
        if(token) {
            const newRequst = req.clone({
                headers: req.headers.append('Authorization', 'JWT ' + token)
            });
            return next.handle(newRequst); 
        }
        return next.handle(req);
    }
}