import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IndexDto} from '../../../../dto/IndexDto';
import {DestroyComponent} from '../destroy/destroy.component';
import {HttpService} from '../../../../service/http.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html'
})
export class BaseComponent extends DestroyComponent implements OnInit {
  @Input() indexDto: IndexDto;
  @Output() body = new EventEmitter<string>();
  typeIndex: string;
  typeApi: string;
  items: any[] = [];

  constructor(private apiService: HttpService){
    super();
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.unSubscribe = this.apiService[this.typeApi]()
      .subscribe( data => {
        this.items = data;
        this.setValueIndex(null);
        this.sendEmit(null);
      });
  }

  identify(index, arr: any) {
    return arr;
  }
  addToRequest(val: string, index: number) {
    if (this.isActiveClass(index)) {
      this.setValueIndex(null);
      this.sendEmit(null);
    } else {
      this.setValueIndex(index);
      this.sendEmit(val);
    }
  }
  sendEmit(val: string){
    this.body.emit(val);
  }

  setValueIndex(val: number){
    this.indexDto[this.typeIndex] = val;
  }

  isActiveClass(index: number){
    return this.indexDto[this.typeIndex] === index
  }
}
