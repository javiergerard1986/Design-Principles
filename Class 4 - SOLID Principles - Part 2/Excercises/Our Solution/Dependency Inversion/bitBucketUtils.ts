import IFileVersionSystem from "./IFileVersionSystem";

export class bitBucketUtils implements IFileVersionSystem{
    
    cloneProject(projectName: string, newProjectName: string): void {};
  
    removeSharedProject(projectName: string, projectId?: number): void {};
  
    createEmptyRemoteRepository(name: string): void {};
  
    createRemoteRepositoryFromExisting(projectName: string, newProjectName: string): void {};
  
    pushLocalChanges(projectName: string): void {};
  
    commitChanges(projectName: string, message: string): void {};
}