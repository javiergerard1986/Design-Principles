import { PanelId, PanelName } from "./panelEnums";
import { PanelBase } from "./panelBase";
import { ITab } from "./ITab";

export class PropertiesPanel extends PanelBase implements ITab{

    tabs: string[];

    constructor(){
        super(PanelName.PROPERTIES, PanelId.PROPERTIES);
        this.tabs = ['Properties Tab 1 Awesome Tab', 'Properties Tab 2 Awesome Tab', 'Properties Tab 3 Awesome Tab'];
    }

    getTabs(): string[] {
        return this.tabs;
    }
}