import { MyCustomPanel } from "./myCustomPanel";
import { PanelBase } from "./panelBase";
import { PropertiesPanel } from "./propertiesPanel";
import { ToolboxPanel } from "./toolboxPanel";

export class PanelManager {
    
    loadPanels(): PanelBase[] {
        let panels: PanelBase[];
        panels.push(new PropertiesPanel(), new ToolboxPanel(), new MyCustomPanel());
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