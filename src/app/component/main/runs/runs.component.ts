import {Component, OnInit} from '@angular/core';
import {RunDto} from '../../../dto/RunDto';
import {takeUntil} from 'rxjs/operators';
import {HttpService} from '../../../service/http.service';
import {DestroyComponent} from '../shared/destroy/destroy.component';

@Component({
  selector: 'app-runs',
  templateUrl: './runs.component.html',
  styleUrls: ['./runs.component.css']
})
export class RunsComponent extends DestroyComponent implements OnInit {
  runs: RunDto[] = [];
  constructor(private httpService: HttpService) {
    super();
  }

  ngOnInit() {
    this.getRuns();
  }
  getRuns() {
    this.httpService.getRuns()
      .pipe(takeUntil(this.unSubscribe))
      .subscribe((data: RunDto[]) => {
        this.runs = data;
      });
  }
  identify(index, arr: any) {
    return arr;
  }

}
