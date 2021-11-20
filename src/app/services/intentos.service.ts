import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntentosService {

  public intentos: number = 0;

  constructor() { }

  aumentarIntentos() {
    this.intentos++;
  }

  resertIntentos() {
    this.intentos = 0;
  }


  getIntentos() {
    console.log('addaw', this.intentos);

    if (this.intentos === 3) {
      return true;
    } else {
      return false;
    }
  }




}
