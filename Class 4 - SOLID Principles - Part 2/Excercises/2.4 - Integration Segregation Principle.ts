// 1 - Refactor the code to respect the Interface Segregation Principle

// 2 - The code must compile 

export interface IProject {
}

export class Project implements IProject {
    private _name: string
    private _projectType: string
    private _shared: boolean;

    constructor(name: string, projectType: string, shared: boolean) {
        this._name = name;
        this._projectType = projectType;
        this._shared = shared;
    }
}

export interface IProjectActions {
    create(name: string, projectType: string, shared: boolean): IProject
    open(name: string): IProject
    close(name: string): void
}

export class UICreateProject implements IProjectActions {
    public create(name: string, projectType: string, shared: boolean): IProject {
        console.log('Project created!');
        return new Project(name, projectType, shared);
    }
    open(name: string): IProject {
        throw new Error("Method not implemented.");
    }
    close(name: string): void {
        throw new Error("Method not implemented.");
    }
}

export class UIOpenProject implements IProjectActions {
    create(name: string, projectType: string, shared: boolean): IProject {
        throw new Error("Method not implemented.");
    }

    open(name: string): IProject {
        console.log('Project opened!');
        // instance a new project to simulate I'm opening it
        const project: IProject = new Project('open project', 'TYPE2', false);
        return project;
    }

    close(name: string): void {
        throw new Error("Method not implemented.");
    }
}

export class UICloseProject implements IProjectActions {
    create(name: string, projectType: string, shared: boolean): IProject {
        throw new Error("Method not implemented.");
    }
    open(name: string): IProject {
        throw new Error("Method not implemented.");
    }
    public close(name: string): void {
        console.log(`Project ${name} has been closed`);
    }
}