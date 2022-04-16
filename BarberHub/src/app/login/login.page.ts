import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onLogin(email, password){
    try{
      const user = await this.authSvc.login(email.value, password.value);
      if(user){
        const verificar = this.authSvc.emailVerificado(user);
        this.redirectUser(verificar);
      }
    }
    catch(error){
      console.log('Error ->', error);
    }
  }

  async onLoginGoogle(){
    try{
      const user = await this.authSvc.loginGoogle();
      if(user){
        const verificar = this.authSvc.emailVerificado(user);
        this.redirectUser(verificar);
        
      }
    }
    catch(error){
      console.log('Error ->', error);
    }
  }

  private redirectUser(isVerified: boolean): void{
     if(isVerified){
       this.router.navigate(['sel-bs']);
     }else{
      this.router.navigate(['verificar-email']);
     }
  }
}
