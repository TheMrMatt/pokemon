import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../Store'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as pokeActions from '../../Store/Actions'
import { MatDialog, } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component'
import { DificultadService } from '../../services/dificultad.service'
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { CustomErrorStateMatcher } from 'src/app/custom-error';
import { ErrorStateMatcher } from '@angular/material/core';
import { IntentosService } from 'src/app/services/intentos.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [
    { provide: ErrorStateMatcher, useClass: CustomErrorStateMatcher }
  ]
})
export class PokemonComponent implements OnInit {
  @ViewChild('search') searchElement: ElementRef;

  pokemon: any;
  text: string;
  b: boolean = false;
  id: Number;
  error: boolean = false;
  form: FormGroup;
  intento: number = 0;
  customErrorStateMatcher = new CustomErrorStateMatcher();
  intentos: any = [true, true, true];



  constructor(private readonly store: Store, private router: Router, public dialog: MatDialog, private dificultad: DificultadService, private fb: FormBuilder) {
    this.store.select(fromRoot.getPokemon).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => this.pokemon = data.pokemon);
    this.form = this.fb.group({
      pokemonName: new FormControl('', [Validators.required])
    })

  }

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {


    if (this.dificultad.dificultad === 0) {
      this.Volver();
    }
    this.store.dispatch(pokeActions.getPokemon({ id: this.dificultad.dificultad }));
  }

  comparar() {

    if (this.pokemon.name.toLowerCase() === this.text.toLowerCase()) {



      this.b = true;
      this.error = false;

      const dialogRef = this.dialog.open(ModalComponent, {
        width: '400px',
        height: '600px',
        data: {
          name: this.pokemon.name,
          tipo: `${this.pokemon.types[0].type.name} | ${this.pokemon.types[1].type.name}`,
          url: this.pokemon.sprites.front_default,
          estado: false
        },
        panelClass: ["modal-w"]
      });



    } else {

      this.intentos[this.intento] = false;
      this.intento++;
      if (this.intento === 3) {

        this.b = true;
        const dialogRef = this.dialog.open(ModalComponent, {
          width: '400px',
          height: '600px',
          data: {
            name: this.pokemon.name,
            tipo: `${this.pokemon.types[0].type.name} | ${this.pokemon.types[1].type.name}`,
            url: this.pokemon.sprites.front_default,
            estado: true
          },
          panelClass: "modal-l"
        });
      } else {

        this.b = false;
      }

      this.error = true;
      this.searchElement.nativeElement.focus();


    }

  }




  Volver() {
    this.router.navigate(['/']);
  }

  JugarDeNuevo() {
    this.b = false;
    this.text = '';
    this.store.dispatch(pokeActions.getPokemon({ id: this.dificultad.dificultad }));
    this.error = false;
    this.intentos = [true, true, true]
    this.intento = 0;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
