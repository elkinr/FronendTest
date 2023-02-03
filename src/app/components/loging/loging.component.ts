import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Usuario } from 'src/app/Models/usuario';
@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.scss']
})
export class LogingComponent implements OnInit {

  FormUser!:FormGroup;
  Users!:Usuario[];
  respvalue:boolean = true;

  constructor(private route: Router,
              private fb: FormBuilder,
              private userservice:UsuarioService) { }
  
  ngOnInit(): void {
    this.initform();
  }

  public Ingresar(){
  const uservalue = this.FormUser.getRawValue().usuario;
  const passvalue = this.FormUser.getRawValue().pass;
    this.userservice.Get().subscribe((data:Usuario[]) =>{
      this.Users = data;
       const resp = this.Users.filter(user=> user.usuario == uservalue && user.pass == passvalue);
       if(resp.length>0){
           this.route.navigate(['/Home'])
       }else{
         this.respvalue = false;
       }
    })
  }

  public initform(){
    this.FormUser = this.fb.group({
      usuario: ['',[Validators.required]],
      pass: ['',[Validators.required]]
    })
  }

}
