import { IExplorerPanel} from "./IExplorerPanel";

export class ExecutionExplorerPanel implements IExplorerPanel{
    
    createController(name: string): void {
        console.log("Create " + name +  " controller from Execution Explorer Panel");
    }
    deleteController(name: string): void {
        console.log("Delete " + name +  " controller from Execution Explorer Panel");
    }

}