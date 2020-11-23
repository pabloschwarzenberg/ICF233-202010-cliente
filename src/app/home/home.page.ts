import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isAuthenticated=false;
  isAuthenticationFailed=false;
  form = new FormGroup(
    {
      username: new FormControl ("", Validators.required),
      password: new FormControl ("", Validators.required)
    }
  );

  constructor( private apiService: ApiService ) {}

  login()
  {
    var usuario = {
      username: this.form.value.username,
      password: this.form.value.password
    }
    this.isAuthenticationFailed=false;
    this.apiService.login(usuario).subscribe(respuesta => {
      if(respuesta.status==200)
        this.isAuthenticated = true;
      else
        this.isAuthenticationFailed=true;
    })
  }
}
