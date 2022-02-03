import { IProject } from "./IProject";

export interface IOpenProject {
    open(name: string): IProject;
}