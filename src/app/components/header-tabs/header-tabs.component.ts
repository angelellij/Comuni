import { Input, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-tabs',
  templateUrl: './header-tabs.component.html',
  styleUrls: ['./header-tabs.component.scss'],
})
export class HeaderTabsComponent implements OnInit {
  @Input() titulo:string;

  constructor(private AFauth:AngularFireAuth, private router:Router) { }

  ngOnInit() {}

  onLogout(){
    this.AFauth.auth.signOut().then(()=>{
      this.router.navigate(['inicio'])
    })    
  }

}
