import { IPanel } from "./IPanel";

export class RaiderPropertiesPanel implements IPanel {
    
    _tabs: string[];
    
    getTabs(): string[] {
        return this._tabs;
    }

    getPropertiesList(): string[] {
        return ['1', '2', '3'];
    }
    
}