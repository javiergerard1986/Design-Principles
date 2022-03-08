import { Facade } from "../facade/facade";

export class JenkinsBlocksRunner {

    private _facade = Facade.getInstance();

    public executeE2ETests(): void {
        this._facade.recordE2EExecution();

        // Additional block behavior
        // .....
        // .....
        // .....
    }

    public generateSummary(): void {
        // Artifacts, installers, published packages, etc.
        // ....
        // ....
        // ....

        // Put a test execution recording preview into the summary
        this._facade.generateSummary();

        //Insert preview into the summary here
        // ....

        // Additional blck behavior implemented here
        // ....
        // ....
        // ....
    }

}