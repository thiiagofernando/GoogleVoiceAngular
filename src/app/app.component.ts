import { Component } from '@angular/core';
import Speech from 'speak-tts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Atedimento';


  falar(texto: string) {
    if (texto) {
      const speech = new Speech();
      speech.init({
        'volume': 6,
        'lang': 'pt-BR',
        'rate': 1,
        'pitch': 1,
        'voice': 'Google UK English Male',
        'splitSentences': true,
      })
      speech.speak({
        text: texto,
        queue: false,
      }).then(() => {
      }).catch(e => {
        console.error("Erro :", e)
      })
    }
  }
}

