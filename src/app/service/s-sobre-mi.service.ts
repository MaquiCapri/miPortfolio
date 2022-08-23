import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SobreMi } from '../model/sobre-mi';

@Injectable({
  providedIn: 'root'
})
export class SSobreMiService {
  sobreURL = ' https://backport.herokuapp.com/sobrem/'
  constructor(private httpClient: HttpClient) { }

public lista(): Observable<SobreMi[]>{
  return this.httpClient.get<SobreMi[]>(this.sobreURL + 'lista');
}

public detail(id: number): Observable<SobreMi>{
  return this.httpClient.get<SobreMi>(this.sobreURL + `detail/${id}`)
}

public save(sobreMi: SobreMi): Observable<any>{
  return this.httpClient.post<any>(this.sobreURL + 'create', sobreMi);
}

public update(id: number, sobreMi: SobreMi): Observable<any>{
  return this.httpClient.put<any>(this.sobreURL + `update/${id}`, sobreMi);
}

public delete(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.sobreURL + `delete/${id}`);
} 
  
}
