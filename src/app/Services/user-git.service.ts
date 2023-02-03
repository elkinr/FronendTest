import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserGit } from '../Models/user-git';
import { DetailUser } from '../Models/detail-user';
@Injectable({
  providedIn: 'root'
})
export class UserGitService {

  constructor(private http: HttpClient) { }

  public GetAllUser(){
      const url = `${environment.urlgit}=YOUR_NAME`;
      return this.http.get<UserGit>(url);
  }

  public GetAllUserbyName(name:String){
    const url = `${environment.urlgit}=${name}`;
    return this.http.get<UserGit>(url);
  }

  public GeIuserName(name: String){
    const url = `${environment.userinfo}/${name}`
    return this.http.get<DetailUser>(url);
  }
}
