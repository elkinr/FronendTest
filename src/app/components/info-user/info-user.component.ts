import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserGitService } from 'src/app/Services/user-git.service';
import { DetailUser } from 'src/app/Models/detail-user';
@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {
  InfoUser!:DetailUser;

  constructor(private activate: ActivatedRoute,
              private user: UserGitService) { }

  ngOnInit(): void {
    this.init();
  }

  public init(){
    this.activate.params.subscribe(({name})=>{
      this.user.GeIuserName(name).subscribe((data:DetailUser)=>{
        this.InfoUser = data;
      })
    })
  }

}
