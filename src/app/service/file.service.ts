import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private host = 'http://localhost:8080'
  constructor(private http : HttpClient ) { }

  upload(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`${this.host}/file/upload`, formData, {
      reportProgress: true,
      observe: 'events'
    });
}

download(filename: string): Observable<HttpEvent<Blob>> {
  return this.http.get(`${this.host}/file/download/${filename}/`, {
    reportProgress: true,
    observe: 'events',
    responseType: 'blob'
  });
}

}
