import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GradoService {

  private urlEndPoint: string = 'http://localhost:8080/api/grados';

  //Inyección de dependencia
  constructor(private http: HttpClient) { }

  getGrados(): Observable<any[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as any[])
    );
  }
}
