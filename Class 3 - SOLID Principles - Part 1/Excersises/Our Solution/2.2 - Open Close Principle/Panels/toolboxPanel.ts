import { PanelBase } from "./panelBase";
import { PanelName, PanelId } from "./panelEnums";

export class ToolboxPanel extends PanelBase{
    
    constructor(){
        super('fakeLocator', PanelName.TOOLBOX, PanelId.TOOLBOX);
    }
}