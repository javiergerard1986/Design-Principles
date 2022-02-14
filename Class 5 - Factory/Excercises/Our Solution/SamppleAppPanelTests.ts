import { SampleAppPropertiesPanel } from "./Panel/SampleAppPropertiesPanel";
import { PanelBaseTest } from "./RaiderBaseTest";

export class SampleAppPanelTests extends PanelBaseTest {
    
    setUp() {
        this._propertiesPanel = new SampleAppPropertiesPanel();
    }
    
    tests() {
        const panelProperties = this._propertiesPanel.getPropertiesList();
        // Additional test stuff here
    }
}