// 1 - Refactor the code to respect the Single Responsibility Principle 
// 2 - The code must compile 

export class Page {
    // Page code here  
}

export class RaiderMainPage extends Page {
    public isDarkThemeSet(): boolean {
        return true;
    }

    public openProject(projectName: string): void {

    }

    public closeProject(): void {

    }

    public closeAndSaveChanges(): void {

    }

    public closeProjectWithoutChanges(): void {

    }

    public createProject(projectName: string, projectType: string, options: { shared: false }): void {

    }

    public resetLayout(): void {
    }

    public closeProjectAndRelaunchRaider(saveBeforeClosing?: boolean, discardBeforeClosing?: boolean): void {

    }
}