import { IControllerStrategy} from "./IControllerStrategy";

export class ExecutionExplorerComponent implements IControllerStrategy{
    
    createController(name: string): void {
        console.log("Create " + name +  " controller from Execution Explorer Panel");
    }
    deleteController(name: string): void {
        console.log("Delete " + name +  " controller from Execution Explorer Panel");
    }

}