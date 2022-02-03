import { ICreateProject } from "./Project Actions/ICreateProject";
import { IProject } from "./Project Actions/IProject";
import { Project } from "./Project Actions/project";

export class UICreateProject implements ICreateProject{
    public create(name: string, projectType: string, shared: boolean): IProject{
        console.log('Project created!');
        return new Project(name, projectType, shared);
    }
}