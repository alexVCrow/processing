import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-destroy',
  templateUrl: './destroy.component.html'
})
export class DestroyComponent implements OnDestroy {
  unSubscribe: Subject<void> = new Subject();
  ngOnDestroy(): void {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }

}
