import { Action, createReducer, on } from '@ngrx/store';
import * as pokeActions from '../Actions'
import * as storage from '../State/storage'
import * as _ from 'lodash'

export interface State {
    pokemon: any;
    isLoading?: boolean;
    result?: any;
    isLoadingSuccess?: boolean;

}

export const initialState: State = {
    pokemon: {},
    isLoading: false,
    result: '',
    isLoadingSuccess: false
};

const pokemonReducer = createReducer(
    initialState,
    on(pokeActions.getPokemon, (state, { id }) => ({ ...state, isLoading: true })),
    on(pokeActions.getPokemonSuccess, (state, result) => ({ pokemon: result.response, isLoading: false, isLoadingSuccess: true, any: result.numb })),

);


export function reducer(state: State | undefined, action: Action): any {
    return pokemonReducer(state, action);
}

export const getPokemon = (state: State) => {
    return {
        pokemon: state.pokemon,
        isLoading: state.isLoading,
        isLoadingSuccess: state.isLoadingSuccess
    }
}