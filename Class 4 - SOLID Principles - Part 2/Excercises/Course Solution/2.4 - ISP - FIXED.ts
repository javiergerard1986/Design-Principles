export interface IProject {
}

export enum ProjectType {
    TYPE1,
    TYPE2
}

export interface IProjectProperties {
    name: string,
    type: ProjectType,
    shared: boolean
}

export class Project implements IProject {
    private _projectProperties: IProjectProperties;

    constructor(projectProperties: IProjectProperties) {
        this._projectProperties = projectProperties;
    }
}

export interface ICreateProject {
    create(projectProperties: IProjectProperties): IProject
}

export interface IOpenProject {
    open(name: string): IProject
}

export interface ICloseProject {
    close(name: string): void
}

export class UICreateProject implements ICreateProject {
    public create(projectProperties: IProjectProperties): IProject {
        console.log('Project created!');
        return new Project(projectProperties);
    }
}

export class UIOpenProject implements IOpenProject {
    open(name: string): IProject {
        console.log('Project opened!');
        // instance a new project to simulate I'm opening it
        const project: IProject = new Project({ name: 'open project', type: ProjectType.TYPE2, shared: false });
        return project;
    }
}

export class UICloseProject implements ICloseProject {
    public close(name: string): void {
        console.log(`Project ${name} has been closed`);
    }
}