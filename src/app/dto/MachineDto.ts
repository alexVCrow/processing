export class MachineDto {
  machine: string;
  cpu: string;
  memory: string;
  constructor(machine: string, cpu: string, memory: string) {
    this.machine = machine;
    this.cpu = cpu;
    this.memory = memory;
  }
}
