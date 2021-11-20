import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../Store'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DificultadService } from '../../services/dificultad.service'
import { AboutComponent } from '../about/about.component'


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  pokemon: any;
  bandera: boolean = false;

  constructor(private router: Router, private readonly store: Store, private dificultad: DificultadService, public dialog: MatDialog) {
    this.store.select(fromRoot.getPokemon).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => this.pokemon = data.pokemon);
  }

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.bandera = false;
    this.dificultad.dificultad = 0;
  }

  setDificultadF() {
    this.dificultad.dificultad = 151;
    this.bandera = true;
  }

  setDificultadM() {
    this.dificultad.dificultad = 251;
    this.bandera = true;
  }

  setDificultadD() {
    this.dificultad.dificultad = 386;
    this.bandera = true;
  }

  setDificultadE() {
    this.dificultad.dificultad = 700;
    this.bandera = true;
  }


  toggleStartGame() {

    this.router.navigate(['/pokemon'])
    console.log('pokemon:::', this.pokemon);
  }

  openAbout() {
    this.dialog.open(AboutComponent, {
      width: '400px',


    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
