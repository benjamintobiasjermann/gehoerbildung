import { Component } from '@angular/core';

@Component({
  selector: 'app-hd0114-haendel-alcina-verdi-prati',
  templateUrl: './hd0114-haendel-alcina-verdi-prati.component.html',
  styleUrls: ['./hd0114-haendel-alcina-verdi-prati.component.scss']
})
export class Hd0114HaendelAlcinaVerdiPratiComponent {

playSound1(){
  let audio = new Audio();
  audio.src = "../assets/HD0114/haendel_ganzes_beispiel.mp3";
  audio.load();
  audio.play();
}
playSound2(){
  let audio = new Audio();
  audio.src = "../assets/HD0114/haendel_takt_1-4.mp3";
  audio.load();
  audio.play();
}
playSound3(){
  let audio = new Audio();
  audio.src = "../assets/HD0114/haendel_takt_5-8.mp3";
  audio.load();
  audio.play();
}
title = 'mouse-hover'
showImage: boolean;
constructor(){
  this.showImage = false;
}
}