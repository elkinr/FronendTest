import { Component, OnInit } from '@angular/core';
import { UserGit } from 'src/app/Models/user-git';
import { Item } from 'src/app/Models/user-git';
import { UserGitService } from 'src/app/Services/user-git.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userGitservice: UserGitService,
              private fb:FormBuilder) { }
  UsersgIt!: Item[];
  name:String="";
  Formvalue!:FormGroup;
  Render:boolean=false;
  ngOnInit(): void {
    this.Init();
    this.InitForm();
  }

 public Init(){
  this.userGitservice.GetAllUser().subscribe((data:UserGit)=>{
      this.UsersgIt = data.items;
  })
 }

 public InitForm(){
  this.Formvalue = this.fb.group({
     value:['']
  })
 }

 public Search(){
  this.name = this.Formvalue.getRawValue().value;
  if(this.name!== ''){
    this.userGitservice.GetAllUserbyName(this.name).subscribe((data:UserGit)=>{
      this.UsersgIt = data.items;
      this.Render=false;
     },
     error =>{
       this.Render=true;
       this.UsersgIt=[];
     }
     )
  }else{
    this.name = 'YOUR_NAME'
    this.userGitservice.GetAllUserbyName(this.name).subscribe((data:UserGit)=>{
      this.UsersgIt = data.items;
      this.Render=false;
     },
     error =>{
      this.Render=true;
      this.UsersgIt=[];
     }
     )
  }
 }

}
