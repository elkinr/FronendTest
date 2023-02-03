import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/Services/persona.service';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private persona: PersonaService,
              private usuario: UsuarioService,
              private fb: FormBuilder,
              private route:Router
              ) { }

  FormPersona!: FormGroup;
  FormUsuario!: FormGroup;

  ngOnInit(): void {
    this.InitForms();
  }

  public InitForms(){
    this.FormPersona = this.fb.group({
      nombres: ['',[Validators.required]],
      apellidos: ['',[Validators.required]],
      numerodeIdentificacion: ['',[Validators.required]],
      email: ['',[Validators.required]],
      tipoIdentificacion: ['',[Validators.required]],
      fechaCreacion: [new Date()]
    })
    this.FormUsuario = this.fb.group({
      usuario: ['',[Validators.required]],
      pass: ['',[Validators.required]],
      fechaCreacion: [new Date()]
    })
  }

  public Enviar(){
   this.route.navigate(['/']);
    const persona = this.FormPersona.getRawValue();
    this.persona.CreatePerson(persona)
     const usuario = this.FormUsuario.getRawValue();
     this.usuario.CreateUser(usuario)
  }


}
