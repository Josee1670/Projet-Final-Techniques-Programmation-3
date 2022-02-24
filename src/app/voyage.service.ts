import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forfait } from './forfait';
import { Observable } from 'rxjs'; 

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  voyagesUrl = 'http://localhost/api-forfaits-voyages/';

  constructor(private http: HttpClient) { }

  getVoyages(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.voyagesUrl);
  }

   addForfait(forfait: Forfait): Observable<Forfait> {
        return this.http.post<Forfait>(this.voyagesUrl, forfait, httpOptions);
    }

     /** PUT: mise à jour d'un forfait' */
    editForfait(forfait: Forfait): Observable<Forfait> {
            return this.http.put<Forfait>(this.voyagesUrl + "?id=" + forfait.id, forfait, httpOptions);
    }

    /** DELETE: suppression d'un forfait */
    deleteForfait(id: string): Observable<Forfait> {
        return this.http.delete<Forfait>(this.voyagesUrl + "?id=" + id);
    }

}
