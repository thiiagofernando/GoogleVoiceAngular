import { Component } from '@angular/core';
import Speech from 'speak-tts';
import { ListaModel } from './lista-model.model';
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Atedimento';
  listaTabela: ListaModel[] = [];

  addLista(texto: string){
      let p ={
        id: Guid.create(),
        nome: texto
      }
      console.log(this.listaTabela.length);
      if(this.listaTabela.length < 4)
          this.listaTabela.push(p);
      else
        alert("Permitido somente 4 registros");
  }
  removerItem(index) {
    this.listaTabela.splice(index, 1);
  }
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

