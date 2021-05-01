import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'
import { AuthorizationService } from '../../services/authorization.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{

  constructor(private router: Router, private authorizationService : AuthorizationService ) { }

  @Input() username: string = '';
  @Input() password: string = '';
  subscription : Subscription = new Subscription();
  loggingIn: boolean = false;
  alertMessage : string = '';
  alertClass : string = '';
  
  ngOnInit() {
    sessionStorage.removeItem("token");
  }

  login(): void {
    this.loggingIn = true;
    var formData: any = new FormData();
    formData.append("Username", this.username);
    formData.append("Password", this.password);
    this.subscription = this.authorizationService.login(formData).subscribe(
      data => {
        if (data.token) {
          this.authorizationService.authToken = data;
          sessionStorage.setItem("token", data.token);
          this.router.navigate(['collection']);
        }
        else {

        }
      }
    ,error => {      
      this.loggingIn = false;      
      this.alertMessage = error.error;
      this.alertClass = 'error';
    }, () => {
      this.loggingIn = false;
    }
    );
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

}
