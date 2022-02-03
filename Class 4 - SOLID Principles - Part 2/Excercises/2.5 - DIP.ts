// 1 - Refactor the code to respect the Dependency Inversion Principle, taking into account that it should be open to work with different platforms
// in the future (GitHub, SVN, etc.)

// 2 - It isn't mandatory to implement Dependency Injection but it must be clear in the solution where should it be applied. You can leave a comment 
// to explain this. 

// 3 - It's ok to assume that all the tests in this example will work with VCS.

// 4 - The code must compile 

export class VcsTests {
  private _vcsUtils: GitLabUtils;

  constructor() {
    this._vcsUtils = new GitLabUtils();
  }

  public tests(): void {
    // Do VCS Stuff
  }
}

export class GitLabUtils {

  public cloneProject(projectName: string, newProjectName: string): void {
  }

  public removeSharedProject(projectName: string, projectId?: number): void {

  }

  public createEmptyRemoteRepository(name: string): void {

  }

  public createRemoteRepositoryFromExisting(projectName: string, newProjectName: string): void {

  }

  public pushLocalChanges(projectName: string): void {

  }


  public commitChanges(projectName: string, message: string): void {

  }
}

