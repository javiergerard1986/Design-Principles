import { MyCustomPanel } from "./myCustomPanel";
import { PanelBase } from "./panelBase";
import { PropertiesPanel } from "./propertiesPanel";
import { ToolboxPanel } from "./toolboxPanel";

export class PanelManager {
    
    loadPanels(): PanelBase[] {
        let panels: PanelBase[];
        let propertiesPanel: PanelBase = new PropertiesPanel();
        let toolboxPanel: PanelBase = new ToolboxPanel();
        let customPanel: PanelBase = new MyCustomPanel();
        panels.push(propertiesPanel, toolboxPanel, customPanel);
        return panels;
    }

    findPanelByName(name: string, panelsCollection: PanelBase[]): PanelBase {
        let panel: PanelBase;
        for(let x = 0; x < panelsCollection.length; x++){
            if(panelsCollection[x].getName() === name) {
                panel = panelsCollection[x];
            }
        }

        return panel;
    }



}