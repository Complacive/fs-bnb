import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Provider } from '../../models/provider-model';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public user = new Provider();
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
      header: 'User email alredy exists',
      buttons: ['OK']
    });
    await alert.present();
  }

  register() {
    const newProvider = {
      firstName: this.firstName,
      lastName: this.lastName,
      role: "Provider",
      email: this.email,
      password: this.password,
    }
    this.authService.registerUser(newProvider).then(res => {
      this.navCtrl.navigateForward('existing-rentals', {
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
