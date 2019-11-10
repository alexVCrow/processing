export class RunDto {
  run_id: string;
  status: string;
  constructor(runId: string, status: string) {
    this.run_id = runId;
    this.status = status;
  }
}
