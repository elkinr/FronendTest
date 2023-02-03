import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Models/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public CreateUser(usuario:Usuario){
    const url = `${environment.url}/Usuario`;
    return this.http.post(url,usuario);
  }
}
