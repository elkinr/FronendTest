import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { PersonaService } from 'src/app/Services/persona.service';
import { UsuarioService } from 'src/app/Services/usuario.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private persona: PersonaService,
              private usuario: UsuarioService,
              private fb: FormBuilder
              ) { }

  FormPersona!: FormGroup;
  FormUsuario!: FormGroup;

  ngOnInit(): void {
    this.InitForms();
    this.init();
  }

  public InitForms(){
    this.FormPersona = this.fb.group({
      nombres: [''],
      apellidos: [''],
      numerodeIdentificacion: [''],
      email: [''],
      tipoIdentificacion: [''],
      fechaCreacion: ['2023-02-03T00:00:00']
    })
    this.FormUsuario = this.fb.group({
      usuario: [''],
      pass: [''],
      fechaCreacion: ['2023-02-03T00:00:00']
    })
  }

  public Enviar(){
   
    const persona = this.FormPersona.getRawValue();
    this.persona.CreatePerson(persona).subscribe(resp =>{
      console.log(resp)
    })
     const usuario = this.FormUsuario.getRawValue();
     this.usuario.CreateUser(usuario).subscribe(resp =>{
      console.log(resp)
    });
  }

  init(){
    this.persona.Get().subscribe((data)=>{
      console.log(data);
     })
  }

}
