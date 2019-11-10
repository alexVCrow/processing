import {Component} from '@angular/core';
import {HttpService} from '../../../service/http.service';
import {BaseComponent} from '../shared/base/base.component';

const INDEX = 'dataIndex';
const API = 'getData';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent extends BaseComponent {
  constructor(private httpService: HttpService) {
    super(httpService);
    this.typeIndex = INDEX;
    this.typeApi = API;
  }

}
