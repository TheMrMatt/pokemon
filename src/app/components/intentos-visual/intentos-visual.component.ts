import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-intentos-visual',
  templateUrl: './intentos-visual.component.html',
  styleUrls: ['./intentos-visual.component.css']
})
export class IntentosVisualComponent implements OnInit {

  @Input() color!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
