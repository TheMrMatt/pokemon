import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  name: String;
  tipo: String;
  url: String;
  estado: Boolean;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  name: String = '';
  tipo: String = '';
  url: String = '';
  estado: Boolean;
  @Output() btnClick = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    console.log(this.data);
    this.name = this.data.name
    this.tipo = this.data.tipo
    this.url = this.data.url
    this.estado = this.data.estado
  }

  onClick() {
    this.btnClick.emit();
  }

}
