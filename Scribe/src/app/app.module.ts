import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import  firebase from 'firebase/app';
import 'firebase/auth';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CapatailizationPipe } from './capatailization.pipe';
import { AppRoutingModule } from './app-routing.module';
import { MyblogComponent } from './myblog/myblog.component';
import { ProfileComponent } from './profile/profile.component';

let config = {
  apiKey: "AIzaSyBLXzw7dEFikY0-2nKD8c9yy3FAjnNIAoU",
  authDomain: "scribe-a3de6.firebaseapp.com",
  projectId: "scribe-a3de6",
  storageBucket: "scribe-a3de6.appspot.com",
  messagingSenderId: "965792453563",
  appId: "1:965792453563:web:df06084fbf6b6f3c4c2a9e",
  measurementId: "G-S3QTQ3SSD0"
};


firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    CapatailizationPipe,
    MyblogComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
