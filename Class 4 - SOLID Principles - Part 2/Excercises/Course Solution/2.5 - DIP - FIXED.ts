export interface IRepository {
  publishChanges(projectName: string): void;
  removeProject(projectName: string): void;
  copyLocally(projectName: string): void;
  copyRemoteProject(originProjetName: string, newProjectName: string): void;
  createEmpty(name: string): void;
}

export class GitLabRepository implements IRepository {

  public publishChanges(projectName: string): void {
  }

  public removeProject(projectName: string): void {
  }

  public copyLocally(projectName: string): void {
  }

  public copyRemoteProject(originProjetName: string, newProjectName: string): void {
  }

  public createEmpty(name: string): void {
  }
}

export class GitHubRepository implements IRepository {
  public publishChanges(projectName: string): void {
  }

  public removeProject(projectName: string): void {
  }

  public copyLocally(projectName: string): void {
  }

  public copyRemoteProject(originProjetName: string, newProjectName: string): void {
  }

  public createEmpty(name: string): void {
  }

}

export class SVNRepository implements IRepository {
  public publishChanges(projectName: string): void {
  }

  public removeProject(projectName: string): void {
  }

  public copyLocally(projectName: string): void {
  }

  public copyRemoteProject(originProjetName: string, newProjectName: string): void {
  }

  public createEmpty(name: string): void {
  }
}

export abstract class VcsTests {
  protected _repostiroy: IRepository;

  public abstract tests(): void;
}

export class VcsGitHubTests extends VcsTests {
  // GitHubRepository will be injected here
  public tests(): void {

  }
}

export class VcsGitLabTests extends VcsTests {
  // GitLabRepository will be injected here

  public tests(): void {

  }
}

export class VcsSVNTests extends VcsTests {
  // SVNRepository will be injected here

  public tests(): void {

  }
}