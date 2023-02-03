import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Persona } from '../Models/persona';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  public CreatePerson(persona:Persona){
    const url = `${environment.url}/Personas`
    return this.http.post<Persona>(url,persona);
  }

}
