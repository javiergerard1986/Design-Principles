// 1 - Refactor the code to apply the Factory Method Design Pattern

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

    switch (this._environment) {
      case PLATFORM.RAIDER:
        propertiesPanel = new RAIDERPropertiesPanel();
        break;
      case PLATFORM.SAMPLE:
        propertiesPanel = new SampleAppPropertiesPanel();
        break;
      default:
        throw new Error('Unexpected environment');
    }

    const panelProperties = propertiesPanel.getPropertiesList();

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