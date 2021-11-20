import { createAction, props } from '@ngrx/store';

export const getPokemon = createAction(' get pokemon', props<{ id: any }>());
export const getPokemonSuccess = createAction('[any] get pokemon success', props<any>());

export const getTasksFailure = createAction(
    'Get Tasks Failure',
    props<{ any }>()
);


