import { IAbstractFactory } from "./Factories/IAbstractFactory";
import { PropertiesPanel } from "./Panels/propertiesPanel";
import { PLATFORM } from "./Platforms/platformEnum";
import { PlatformManager } from "./Platforms/platformManager";
import { Toolbox } from "./Toolbox/toolBox";

export class Tests {
    
    platformManager: PlatformManager;
    factory: IAbstractFactory;
    propertiesPanel: PropertiesPanel;
    toolbox: Toolbox;

    public setUp(): void{
        this.platformManager = new PlatformManager();
        this.factory = this.platformManager.initialize();
        this.propertiesPanel = this.factory.createPropertiesPanel();
        this.toolbox = this.factory.createToolbox();
    };

    tests(): void{

        const propertiesPanelSettings = this.propertiesPanel.getPropertiesList();
        const toolboxSettings = this.toolbox.getToolboxsettings();

    }

}