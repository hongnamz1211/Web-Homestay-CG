import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize, Observable} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  selectedFile?: File ;
  fb : any;
  downloadURL?: Observable<string>;
  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  onFileSelected(event : any) {
    let date = Date.now();
    const file = event.target.files[0];
    const filePath = `Avatar_Images/${date}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`Avatar_Images/${date}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);

        }
      });
  }

}
