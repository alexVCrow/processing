import {Component} from '@angular/core';
import {HttpService} from '../../../service/http.service';
import {BaseComponent} from '../shared/base/base.component';

const INDEX = 'repoIndex';
const API = 'getRepos';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent extends BaseComponent {
  constructor(private httpService: HttpService) {
    super(httpService);
    this.typeIndex = INDEX;
    this.typeApi = API;
  }

}
