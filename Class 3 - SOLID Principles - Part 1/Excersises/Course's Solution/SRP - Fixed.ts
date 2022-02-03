export class Page {
    // Page code here  
}

export enum ProjectType {

}

export interface IProjectProperties {
    name: string,
    type: ProjectType,
    shared: boolean
}

export interface ICloseProjectOptions {
    saveChanges: boolean;
    relaunchApp: boolean;
}

export interface ICreateProject {
    create(properties: IProjectProperties): void
}

export interface IOpenProject {
    open(name: string): void
}

export interface ICloseProject {
    close(name: string, options: ICloseProjectOptions): void
}

export interface ILayout {
    reset(): void;
}

export class Layout implements ILayout {
    public reset(): void {
    }
}

export class CreateProject implements ICreateProject {
    public create(properties: IProjectProperties): void {
    }
}

export class OpenProject implements IOpenProject {
    public open(name: string): void {
    }
}

export class CloseProject implements ICloseProject {
    public close(name: string, options: ICloseProjectOptions): void {
        options.saveChanges ? this.closeAndSaveChanges(name) : this.closeWithoutChanges;

        if (options.relaunchApp) { /*  relaunch app */ }
    }

    private closeAndSaveChanges(name: string): void {

    }

    private closeWithoutChanges(name: string): void {

    }
}

export class RaiderMainPage extends Page {
    public isDarkThemeSet(): boolean {
        return true;
    }
}