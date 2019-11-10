import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API = 'http://localhost:8080/freelance/';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getEnvs() {
    return this.http.get(`${API}envs`);
  }
  getRepos() {
    return this.http.get(`${API}repos`);
  }
  getData() {
    return this.http.get(`${API}data`);
  }
  getMachines() {
    return this.http.get(`${API}machines`);
  }
  getRuns() {
    return this.http.get(`${API}runs`);
  }
  sendRequest(body: any) {
    return this.http.post(`${API}run`, body);
  }
}
