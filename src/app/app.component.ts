import { Component, OnInit } from '@angular/core';
import Speech from 'speak-tts';
import { FormBuilder,  FormGroup } from '@angular/forms';
import { ListaModel } from './lista-model.model';
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{

  listaTabela: ListaModel[] = [];
  formCliente: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.createForm(new ListaModel());
  }
  createForm(cliente: ListaModel) {
    this.formCliente = this.formBuilder.group({
      nome: [cliente.nome],
    })
  }

  addLista(texto: string){

    let exist = this.listaTabela.filter(x => x.nome.toLocaleUpperCase() == texto.toLocaleUpperCase());
    if(exist.length <= 0){
      if(texto.length >= 1){
        let p ={
          id:  this.listaTabela.length + 1,
          nome: texto
        }
        if(this.listaTabela.length <= 5)
            this.listaTabela.push(p);
        else
          alert("Permitido somente 6 registros");
      }else{
        alert("Informe um nome");
      }
    }else{
      alert("Nome já informado");
    }
    this.formCliente.setValue({
      nome : ''
    });
  }
  removerItem(index) {
    let obj = this.listaTabela.indexOf(index);
    this.listaTabela.splice(obj, 1);
  }
  falar(texto: string) {
    if (texto) {
      const speech = new Speech();
      speech.init({
        'volume': 1,
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

