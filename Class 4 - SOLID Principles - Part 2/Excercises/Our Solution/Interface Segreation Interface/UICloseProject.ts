import { ICloseProject } from "./Project Actions/ICloseProject";

export class UICloseProject implements ICloseProject{
    public close(name: string): void {
        console.log(`Project ${name} has been closed`);
    }
}