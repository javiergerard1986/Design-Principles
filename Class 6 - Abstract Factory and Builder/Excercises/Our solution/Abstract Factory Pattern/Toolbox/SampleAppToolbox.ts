import { Toolbox } from "./toolBox";

export class SampleAppToolbox extends Toolbox {
    
    public getToolboxsettings(): string[] {
        return ['settings 4', 'settings 5', 'settings 6'];
    }
    
}