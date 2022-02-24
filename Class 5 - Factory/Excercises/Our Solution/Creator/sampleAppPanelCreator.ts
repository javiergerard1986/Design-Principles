import { SampleAppPropertiesPanel } from "../Panel/SampleAppPropertiesPanel";
import { PanelCreator } from "./panelCreator";

export class SampleAppPanelCreator extends PanelCreator {
    
    public createPropertiesPanel(): SampleAppPropertiesPanel {
        return new SampleAppPropertiesPanel();
    }
    
}