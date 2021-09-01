import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  user: User | undefined;
  public host: string = 'http://localhost:8080';

  constructor(private http: HttpClient,
    private authService: AuthentificationService) {
    this.host = 'http://localhost:8080'
  }


  public findAll(url: string) {
    if (this.authService.jwt == null) {
      this.authService.loadToken();
    }

    let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authService.jwt })
    let jwt = headers.get('Authorization') as string;
    return this.http.get(this.host + url, { headers: headers });
  }


  public save(url: string, data: any) {

    let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authService.jwt })
    return this.http.post(url, data, { headers: headers });

  }

  public edit(id: any, data: any, url: string) {
    let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authService.jwt })
    return this.http.put(this.host + url + id, data, { headers: headers });
    console.log(data);

  }
  public deleteById(id: number, url: string) {
    let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authService.jwt })
    return this.http.delete(this.host + url + id, { headers: headers });
  }

  public recuper(url: string) {
    let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authService.jwt })
    return this.http.get(this.host + url, { headers: headers });
  }

  public getByKeyword(mc: string) {
    let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authService.jwt })
    return this.http.get(this.host + "/users/byNom?mc=" + mc, { headers: headers })
  }



  public visualiserById(id: number, url: string) {
    let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authService.jwt })
    return this.http.get(this.host + url + id, { headers: headers });
  }


public exportPdf(): Observable<Blob>{
 
  return this.http.get(this.host+'/export/pdf', { responseType: 'blob' });
}




}