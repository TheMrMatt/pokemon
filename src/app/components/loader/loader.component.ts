import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../Store'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as pokeActions from '../../Store/Actions'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  loading: boolean;

  constructor(private readonly store: Store, private router: Router) {
    this.store.select(fromRoot.getPokemon).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => this.loading = data.isLoading);
  }

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
  }

}
