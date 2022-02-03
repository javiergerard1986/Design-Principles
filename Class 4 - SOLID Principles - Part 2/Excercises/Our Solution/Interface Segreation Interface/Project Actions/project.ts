import { IProject } from "./IProject";

export class Project implements IProject{
    name: string;
    projectType: string;
    shared: boolean;

    constructor(name: string, projectType: string, shared: boolean) {
        this.name = name;
        this.projectType = projectType;
        this.shared = shared;
    }
}