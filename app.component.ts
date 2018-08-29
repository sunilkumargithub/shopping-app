import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyB-A3v36SaRfcC6njcjGohVAmrDAbUxhg0",
      authDomain: "ng-recipe-book-6d620.firebaseapp.com",

    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
