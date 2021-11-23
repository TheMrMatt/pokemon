import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../../environments/environment';
import * as fromPoke from './Reducers/pokemon.reducers';

export interface State {
    poke: fromPoke.State;
}

export const reducers: ActionReducerMap<State> = {
    poke: fromPoke.reducer
};

const reducerKeys = ['poke'];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({ keys: reducerKeys })(reducer);
}

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {


        return reducer(state, action);
    };
}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug, localStorageSyncReducer] : [localStorageSyncReducer];

export const geTodoState = createFeatureSelector<fromPoke.State>('poke');

export const getPokemon = createSelector(
    geTodoState,
    fromPoke.getPokemon
);



