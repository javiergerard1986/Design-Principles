// 1 - Refactor the code to apply the Abstract Factory Design Pattern

// 2 - The code must compile 

export enum PLATFORM {
  RAIDER,
  SAMPLE
}

export class PanelTests {

  // This might come from a configuration file, environment variable or whatever
  private _environment = PLATFORM.RAIDER;

  public tests(): void {
    let propertiesPanel: any;
    let toolboxPanel: any;
    

    switch (this._environment) {
      case PLATFORM.RAIDER:
        propertiesPanel = new RAIDERPropertiesPanel();
        toolboxPanel = new RAIDERToolboxPanel();
        break;
      case PLATFORM.SAMPLE:
        propertiesPanel = new SampleAppPropertiesPanel();
        toolboxPanel = new SampleAppToolboxPanel();

        break;
      default:
        throw new Error('Unexpected environment');
    }

    const panelProperties = propertiesPanel.getPropertiesList();
    const toolboxSettings = toolboxPanel.getToolboxsettings();

    // Additional test stuff here
  }
}

export class RAIDERPropertiesPanel {
  private _tabs: string[];

  public get tabs(): string[] {
    return this._tabs;
  }

  public getPropertiesList(): string[] {
    return ['1', '2', '3'];
  }
}

export class SampleAppPropertiesPanel {
  private _tabs: string[];

  public get tabs(): string[] {
    return this._tabs;
  }

  public getPropertiesList(): string[] {
    return ['4', '5', '6'];
  }
}

export class RAIDERToolboxPanel {
  public getToolboxsettings(): string[] {
    return ['settings 1', 'settings 2', 'settings 3'];
  }
}

export class SampleAppToolboxPanel {
  public getToolboxsettings(): string[] {
    return ['settings 4', 'settings 5', 'settings 6'];
  }
}