import { IPanel } from "./IPanel";

export class SampleAppPropertiesPanel implements IPanel {
    
    _tabs: string[];
    
    getTabs(): string[] {
        return this._tabs;
    }

    getPropertiesList(): string[] {
        return ['4', '5', '6'];
    }
    
}