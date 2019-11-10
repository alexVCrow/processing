import {Component} from '@angular/core';
import {HttpService} from '../../../service/http.service';
import {BaseComponent} from '../shared/base/base.component';

const INDEX = 'envIndex';
const API = 'getEnvs';

@Component({
  selector: 'app-env',
  templateUrl: './env.component.html',
  styleUrls: ['./env.component.css']
})
export class EnvComponent extends BaseComponent {
  constructor(private httpService: HttpService) {
    super(httpService);
    this.typeIndex = INDEX;
    this.typeApi = API;
  }

}
