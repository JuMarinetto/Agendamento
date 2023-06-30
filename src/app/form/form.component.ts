import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormModel } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() resp = new EventEmitter<any>();

  public cadastro : FormModel = new FormModel();
  public listaCadastro : FormModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  calculos(){
    let novo = new FormModel();
    novo.nome = this.cadastro.nome;
    novo.dias = this.cadastro.dias;
    novo.valor = this.cadastro.valor;
    novo.total = this.cadastro.dias * this.cadastro.valor;
    novo.saldo = parseInt(novo.saldo) + novo.total;
    alert(novo.saldo)
   console.log(typeof(novo.saldo));

    this.listaCadastro.push(novo);
    this.resp.emit(this.listaCadastro);
  }

  somaTotal(list: any[]): number{

    let total: number = 0;
    if(list){
      list.forEach(item => total += item.saldo);
    }

    return total;
  }

}

