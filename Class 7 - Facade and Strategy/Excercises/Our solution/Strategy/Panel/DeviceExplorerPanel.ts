import { IExplorerPanel } from "./IExplorerPanel";

export class DeviceExplorerPanel implements IExplorerPanel {
    
    createController(name: string): void {
        console.log("Create " + name +  " controller from Device Explorer Panel");
    }
    deleteController(name: string): void {
        console.log("Delete " + name +  " controller from Device Explorer Panel");
    }

}