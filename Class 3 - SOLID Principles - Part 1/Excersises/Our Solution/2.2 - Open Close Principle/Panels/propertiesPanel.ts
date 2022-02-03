import { PanelBase } from "./panelBase";
import { PanelId, PanelName } from "./panelEnums";

export class PropertiesPanel extends PanelBase{
    constructor(){
        super('fakeLocator', PanelName.PROPERTIES, PanelId.PROPERTIES);
    }
}