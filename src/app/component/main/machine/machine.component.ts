import {Component} from '@angular/core';
import {HttpService} from '../../../service/http.service';
import {BaseComponent} from '../shared/base/base.component';
const INDEX = 'machineIndex';
const API = 'getMachines';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent extends BaseComponent {
  constructor(private httpService: HttpService) {
    super(httpService);
    this.typeIndex = INDEX;
    this.typeApi = API;
  }
}
