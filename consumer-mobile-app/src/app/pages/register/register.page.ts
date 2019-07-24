import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { User } from '../../models/user-model';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  public user = new User();
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public users: any;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private userService: UserService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'FS - BnB user already exists',
      buttons: ['OK']
    });
    await alert.present();3
  }

  register() {
    const newUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      role: "User",
      email: this.email,
      password: this.password,
    }
    this.authService.registerUser(newUser).then(res => {
      const testId = +localStorage.getItem('userId');
      console.log(testId);
      this.navCtrl.navigateForward('home', {
        queryParams:  {
          user: res
        }
      });
    }).catch (err => {
      this.presentAlert(err);
    });
  }


  backToLogin() {
    this.navCtrl.navigateBack('login');
  }

}
