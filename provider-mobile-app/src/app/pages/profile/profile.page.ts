import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public firstName: string;
  public lastName: string;
  public email: string;
  public user: any;



  constructor(
    private userService: UserService,
    private authService: AuthService,
    private navCtrl: NavController,

  ) { }

  ngOnInit() {
    this.userService.getById(+localStorage.getItem('userId')).then((response: any) => {
      this.firstName = response[0].firstName;
      this.lastName = response[0].lastName;
      this.email = response[0].email;
    }).catch((err: any) => {
      console.log(err);
    })
  }

  backHome() {
    this.navCtrl.navigateBack('existing-rentals');
  }

 

}
