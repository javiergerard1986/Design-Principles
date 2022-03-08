export enum PLATFORM {
  RAIDER,
  SAMPLE
}

export interface IPlatformManager {
  initialize(): EnvironmentFactory;
}

export class UnexpectedEnvironmentError implements Error {
  name: string;
  message: string = 'Unexpected environment';
  stack?: string;
}

export class PlatformManager implements IPlatformManager {
  // This might come from a configuration file, environment variable or whatever
  private _platform = PLATFORM.RAIDER;

  public initialize(): EnvironmentFactory {
    switch (this._platform) {
      case PLATFORM.RAIDER:
        return new RAIDEREnvironmentFactory();
      case PLATFORM.SAMPLE:
        return new SampleAppEnvironmentFactory();
      default:
        throw new UnexpectedEnvironmentError();
    }
  }
}


export class PanelTests {
  private _environment: EnvironmentFactory;

  public setUp(): void {
    const environmentManeger = new PlatformManager();
    this._environment = environmentManeger.initialize();
  }

  public tests(): void {
    const propertiesPanel: PropertiesPanel = this._environment.createPropertiesPanel();
    const toolboxPanel: ToolboxPanel = this._environment.createToolboxPanel();

    const panelProperties = propertiesPanel.getPropertiesList();
    const toolboxSettings = toolboxPanel.getToolboxsettings();

    // Additional test stuff here
  }
}

export abstract class EnvironmentFactory {
  public abstract createPropertiesPanel(): PropertiesPanel;
  public abstract createToolboxPanel(): ToolboxPanel;
}

export class RAIDEREnvironmentFactory extends EnvironmentFactory {
  public createPropertiesPanel(): PropertiesPanel {
    throw new RAIDERPropertiesPanel();
  }

  public createToolboxPanel(): ToolboxPanel {
    return new RAIDERToolboxPanel();
  }
}

export class SampleAppEnvironmentFactory extends EnvironmentFactory {
  public createPropertiesPanel(): PropertiesPanel {
    throw new SampleAppPropertiesPanel();
  }

  public createToolboxPanel(): ToolboxPanel {
    return new SampleAppToolboxPanel();
  }
}

export abstract class PropertiesPanel {
  protected _tabs: string[];

  public get tabs(): string[] {
    return this._tabs;
  }

  public abstract getPropertiesList(): string[];
}

export class RAIDERPropertiesPanel extends PropertiesPanel {
  public getPropertiesList(): string[] {
    return ['1', '2', '3'];
  }
}

export class SampleAppPropertiesPanel extends PropertiesPanel {
  public getPropertiesList(): string[] {
    return ['4', '5', '6'];
  }
}

export abstract class ToolboxPanel {
  public abstract getToolboxsettings(): string[];
}

export class RAIDERToolboxPanel extends ToolboxPanel {
  public getToolboxsettings(): string[] {
    return ['settings 1', 'settings 2', 'settings 3'];
  }
}

export class SampleAppToolboxPanel extends ToolboxPanel {
  public getToolboxsettings(): string[] {
    return ['settings 4', 'settings 5', 'settings 6'];
  }

}