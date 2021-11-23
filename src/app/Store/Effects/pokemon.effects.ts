import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { PokemonService } from '../../services/pokemon.service';
import * as pokeActions from '../Actions';


@Injectable()
export class PokeEffects {

    constructor(
        private actions$: Actions,
        private pokemonService: PokemonService
    ) { }

    getPokemon$ = createEffect(() =>
        this.actions$.pipe(
            ofType(pokeActions.getPokemon),
            exhaustMap(action =>
                this.pokemonService.getPokemon(action.id).pipe(
                    map(response => {


                        return pokeActions.getPokemonSuccess({ response })
                    }),
                    catchError((error: any) => of(pokeActions.getTasksFailure(error)))
                )
            )
        )
    );


}
