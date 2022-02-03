import { Page } from "./page";
import { ProjectActions } from "./projectActions";

export class RaiderMainPage extends Page {
    
    private projectActions: ProjectActions;

    constructor(){
        super();
        this.projectActions = new ProjectActions();
    }

    public getProjectActions(){
        return this.projectActions;
    }

    public isDarkThemeSet(): boolean {
        return true;
    }

    public resetLayout(): void {
    }

}