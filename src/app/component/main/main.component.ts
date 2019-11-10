import {Component} from '@angular/core';
import {HttpService} from '../../service/http.service';
import {takeUntil} from 'rxjs/operators';
import {RequestDto} from '../../dto/RequestDto';
import {IndexDto} from '../../dto/IndexDto';
import {DestroyComponent} from './shared/destroy/destroy.component';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends DestroyComponent {
  submitted = false;
  request: RequestDto = new RequestDto();
  indexDto: IndexDto = new IndexDto();
  constructor(private httpService: HttpService, private toastr: ToastrService) {
    super();
  }

  createBody(val: string, type: string){
    this.request[type] = val;
  }

  onSubmit() {
    if (this.checkValidRequest()) {
      this.toastr.error('Fail data request!');
      return;
    }
    this.submitted = !this.submitted;
    this.httpService.sendRequest(this.request)
      .pipe(takeUntil(this.unSubscribe))
      .subscribe(() => {
        this.submitted = !this.submitted;
        this.request = new RequestDto();
        this.indexDto = new IndexDto();
        this.toastr.success('Success request to server!');
      }, error => {
        console.log(error);
        this.toastr.error('Fail request to server!');
      });
  }

  checkValidRequest(): boolean {
    return !Object.values(this.request).every(x => (x !== null));
  }

}
