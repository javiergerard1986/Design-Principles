import { IProject } from "./Project Actions/IProject";
import { IOpenProject } from "./Project Actions/IOpenProject";
import { Project } from "./Project Actions/project";

export class UIOpenProject implements IOpenProject {
    open(name: string): IProject {
        console.log('Project opened!');
        // instance a new project to simulate I'm opening it
        const project: IProject = new Project('open project', 'TYPE2', false);
        return project;
    }
}