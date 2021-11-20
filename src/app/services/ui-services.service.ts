import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServicesService {

  private showAns: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAns(): void {
    this.showAns = !this.showAns;
    this.subject.next(this.showAns);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
