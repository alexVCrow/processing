export class RequestDto {
  env: string;
  data: string;
  machine: string;
  repo: string;
  constructor(){
    this.env = null;
    this.data = null;
    this.machine = null;
    this.repo = null;
  }
}
