import { Component } from "./component";
import { PanelManager } from "./Panels/panelManager";
import { PanelBase } from "./Panels/panelBase";

export class MainPanelGroup extends Component{

    private collectionPanels: PanelBase[];
    private panelManager: PanelManager;

    constructor(locator: string) {
        super(locator);
        this. collectionPanels = this.loadPanels();
    }

    public findPanel(panelName: string): PanelBase {
        return this.panelManager.findPanelByName(panelName, this.collectionPanels);
    }

    private loadPanels(): PanelBase[]{
        return this.panelManager.loadPanels();
    }
}