import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forfait } from './forfait';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TableauService {
  voyagesUrl = 'http://localhost/api-forfaits-voyages';

  constructor(private http: HttpClient) { }

    getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.voyagesUrl);  
  }

  addForfait(forfait: Forfait): Observable<Forfait> {
        return this.http.post<Forfait>(this.voyagesUrl, forfait, httpOptions);
    }

     /** PUT: mise à jour du héros */
    editForfait(forfait: Forfait): Observable<Forfait> {
            return this.http.put<Forfait>(this.voyagesUrl + "?id=" + forfait.id, forfait, httpOptions);
    }

    /** DELETE: suppression du héros */
    deleteForfait(id: string): Observable<Forfait> {
        return this.http.delete<Forfait>(this.voyagesUrl + "?id=" + id);
    }

}
