import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
  }

  async onLogin(email, password){
    try{
      const user = await this.authSvc.login(email.value, password.value);
      if(user){
        //verificar correo
        console.log('email ->', email);
        console.log('password ->', password)
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
        console.log('User ->', user);
        
      }
    }
    catch(error){
      console.log('Error ->', error);
    }
  }
}
