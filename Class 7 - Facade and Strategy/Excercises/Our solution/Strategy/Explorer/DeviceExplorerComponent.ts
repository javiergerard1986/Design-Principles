import { IControllerStrategy } from "./IControllerStrategy";

export class DeviceExplorerComponent implements IControllerStrategy {
    
    createController(name: string): void {
        console.log("Create " + name +  " controller from Device Explorer Panel");
    }
    deleteController(name: string): void {
        console.log("Delete " + name +  " controller from Device Explorer Panel");
    }

}