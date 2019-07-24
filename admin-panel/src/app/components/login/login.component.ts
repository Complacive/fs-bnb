import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user-model';
import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth.service';

import { RouterModule, Router } from '@angular/router';
import { reject } from 'q';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = new User();
  public email: string;
  public password: string;
  public users: any;

  constructor(
    //private alertCtrl: AlertController,
    //private navCtrl: NavController,
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {}

  /*
  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Incorrect login credentials',
      buttons: ['OK']
    });

    await alert.present();
  }
  */

  login() {
    const authUser = {
      email: this.email,
      password: this.password
    }
    this.authService.login(authUser).then(res => {
      const testId = localStorage.getItem('userId');
      console.log(testId);

      this.router.navigate(['/home'], {
        queryParams:  {
          user: res
        }
      });
    }).catch (err => {
      //reject(err);
      alert("Invalid login credentials")
    });
  }

}
