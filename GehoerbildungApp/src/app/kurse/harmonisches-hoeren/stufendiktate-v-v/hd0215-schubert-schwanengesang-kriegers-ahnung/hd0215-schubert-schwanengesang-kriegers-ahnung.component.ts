import { Component } from '@angular/core';

@Component({
  selector: 'app-hd0215-schubert-schwanengesang-kriegers-ahnung',
  templateUrl: './hd0215-schubert-schwanengesang-kriegers-ahnung.component.html',
  styleUrls: ['./hd0215-schubert-schwanengesang-kriegers-ahnung.component.scss']
})
export class Hd0215SchubertSchwanengesangKriegersAhnungComponent {
  playSound1(){
    let audio = new Audio();
    audio.src = "../assets/HD0215/ganzes-bsp.mp3";
    audio.load();
    audio.play();
  }
  playSound2(){
    let audio = new Audio();
    audio.src = "../assets/HD0215/t-1-4.mp3";
    audio.load();
    audio.play();
  }
  playSound3(){
    let audio = new Audio();
    audio.src = "../assets/HD0215/t-5-8.mp3";
    audio.load();
    audio.play();
  }
  playSound4(){
    let audio = new Audio();
    audio.src = "../assets/HD0215/ganzes-bsp-bass.mp3";
    audio.load();
    audio.play();
  }
  title = 'mouse-hover'
  showImage: boolean;
  constructor(){
    this.showImage = false;
  }
}
