import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { HomestayComponent } from './component/homestay/homestay.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactComponent } from './component/contact/contact.component';
import { TripsComponent } from './component/trips/trips.component';
import { ProfileComponent } from './component/profile/profile.component';
import { MyHomestayComponent } from './component/my-homestay/my-homestay.component';
import { HeaderComponent } from './fe/header/header.component';
import { FooterComponent } from './fe/footer/footer.component';
import { SignInComponent } from './dialog/sign-in/sign-in.component';
import { HomestayDetailComponent } from './component/homestay-detail/homestay-detail.component';
import { SignUpComponent } from './dialog/sign-up/sign-up.component';
import { BookHomestayComponent } from './dialog/book-homestay/book-homestay.component';
import { RateCommentComponent } from './dialog/rate-comment/rate-comment.component';
import { CreateHomestayComponent } from './dialog/create-homestay/create-homestay.component';
import { ConfirmComponent } from './dialog/confirm/confirm.component';
import { NotifyComponent } from './dialog/notify/notify.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckbox, MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HomestayComponent,
    BlogComponent,
    ContactComponent,
    TripsComponent,
    ProfileComponent,
    MyHomestayComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    HomestayDetailComponent,
    SignUpComponent,
    BookHomestayComponent,
    RateCommentComponent,
    CreateHomestayComponent,
    ConfirmComponent,
    NotifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
