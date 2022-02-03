import { IProject } from "./IProject";

export interface ICreateProject {
    create(name: string, projectType: string, shared: boolean): IProject;
}