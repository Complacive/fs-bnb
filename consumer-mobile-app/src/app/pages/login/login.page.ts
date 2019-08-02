import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { User } from '../../models/user-model';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  public user = new User();
  public email: string;
  public password: string;
  public users: any;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private userService: UserService,
    private authService: AuthService,
  ) {}

  ngOnInit() {}

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Incorrect login credentials',
      buttons: ['OK']
    });

    await alert.present();
  }

  login() {
    const authUser = {
      email: this.email,
      password: this.password
    }
    this.authService.login(authUser).then(res => {
      const testId = localStorage.getItem('userId');
      console.log(testId);

      this.navCtrl.navigateForward('home');
    }).catch (err => {
      this.presentAlert(err);
    });
  }

  register() {
    this.navCtrl.navigateForward('register');
  }


}
