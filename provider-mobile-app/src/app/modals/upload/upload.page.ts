import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadService } from '../../services/upload.service'
import { ModalController } from '@ionic/angular';
import { Provider } from '../../models/provider-model'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  provider: any;
  ngForm: FormGroup;
  image: any;

  constructor(
    private uploadService: UploadService,
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController
  ) {
    this.ngForm = this.formBuilder.group({
      avatar: ['']
    });
  }

  ngOnInit() {
  }

  createImageFromBlob(image) {
    let reader = new FileReader();
    reader.addEventListener('load', () => {
      this.image = reader.result;
    }, false);
    if (image) {
      this.image = reader.readAsDataURL(image);
    }
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.ngForm.get('avatar').setValue(file);
      this.createImageFromBlob(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.ngForm.get('avatar').value);

    const userId = localStorage.getItem('userId');
    this.uploadService.uploadImage(userId, formData, (err, res) => {
      if (err) {
        alert(err);
      } else {
        this.provider = res.provider;
      }
    });
  }


}
