import { ITab } from "./ITab";
import { PanelBase } from "./panelBase";
import { PanelId, PanelName } from "./panelEnums";

export class ToolboxPanel extends PanelBase implements ITab{
    
    tabs: string[];
    
    constructor(){
        super(PanelName.TOOLBOX, PanelId.TOOLBOX);
        this.tabs = ['Toolbox Tab A Tooltab', 'Toolbox Tab B Tooltab', 'Toolbox Tab C Tooltab'];
    }

    getTabs(): string[] {
        return this.tabs;
    }
}