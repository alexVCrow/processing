export class RepoDto {
  repo: string;
  path: string;
  constructor(repo: string, path: string) {
    this.repo = repo;
    this.path = path;
  }
}
