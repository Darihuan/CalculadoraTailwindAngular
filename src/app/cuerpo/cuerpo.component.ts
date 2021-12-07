import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  private resultadoAnterior = 0
  private resultado = 0;
  private sumar = false;
  private restar = false;
  private multiplicar = false;

  constructor() {
  }

  ngOnInit(): void {
  }


  getResultado(): number {
    if(this.resultado!=0)
    return this.resultado;
    else
      return this.resultadoAnterior;
  }

  setResultado(resultado: number): void {
    this.resultado = resultado;
  }


  numero($event: MouseEvent) {
    let cadenaResultado: string = this.resultado.toString()
    let input = (<HTMLInputElement>$event.target).value
    console.log(parseInt(input))
    if (!isNaN(parseInt(input))) {
      cadenaResultado += input
      this.resultado = parseInt(cadenaResultado)


    } else {
      if (input == '+') {
        this.sumar = true;
        this.resultadoAnterior = this.resultado;
        this.resultado = 0;
      } else if (input == '-') {
        this.restar = true;
        this.resultadoAnterior = this.resultado;
        this.resultado = 0;
      } else if (input == '*') {
        this.multiplicar = true;
        this.resultadoAnterior = this.resultado;
        this.resultado = 0;
      } else if (input == "C") {
        this.resultado = 0;
        this.resultadoAnterior = 0
      } else if (input == "=" || (this.sumar && isNaN(parseInt(input))) || this.restar && isNaN(parseInt(input)) || this.multiplicar && isNaN(parseInt(input))) {
        if (this.sumar) {
          this.resetOperations();
          this.resultado = this.resultadoAnterior + this.resultado;
          this.resultadoAnterior = this.resultado;
          this.resultado = 0
        }
        if (this.restar) {
        this.resetOperations();
          this.resultado = this.resultadoAnterior - this.resultado;
          this.resultadoAnterior = this.resultado;
          this.resultado = 0;
        }
        if (this.multiplicar) {
          this.resetOperations();
          this.resultado = this.resultadoAnterior * this.resultado;
          this.resultadoAnterior = this.resultado;
          this.resultado = 0
        } else {
          this.resultado = this.resultadoAnterior
          this.resetOperations();
        }
      }
    }


  }

  resetOperations(): void {
    this.restar = false;
    this.sumar = false;
    this.multiplicar = false;
  }
}
