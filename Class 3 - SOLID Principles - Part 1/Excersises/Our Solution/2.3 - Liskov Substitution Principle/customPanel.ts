import { PanelBase } from "./panelBase";
import { PanelId, PanelName } from "./panelEnums";

export abstract class CustomPanel extends PanelBase{
    constructor(){
        super(PanelName.MY_CUSTOM, PanelId.MY_CUSTOM);
    }
}