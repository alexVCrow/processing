export class EnvDto {
  env: string;
  docker_file: string;
  constructor(env: string, docker_file: string) {
    this.env = env;
    this.docker_file = docker_file;
  }
}
