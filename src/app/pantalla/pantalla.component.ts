import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrls: ['./pantalla.component.css']
})
export class PantallaComponent implements OnInit {
  @Input()
  resultado=0

  constructor() { }

  ngOnInit(): void {
  }

}
