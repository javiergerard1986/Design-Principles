import { PanelBase } from "./panelBase";
import { PanelId, PanelName } from "./panelEnums";

export class MyCustomPanel extends PanelBase{
    constructor(){
        super('fakeLocator', PanelName.MY_CUSTOM, PanelId.MY_CUSTOM);
    }
}