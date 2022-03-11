export enum FLAGS {
  DEVICE_UI = 'DEVICE_UI',
}

export interface IFeatureFlagsService {
  isFeatureFlagAvailable(featureFlag: string): boolean;
}

export class FeatureFlagsService implements IFeatureFlagsService {
  public isFeatureFlagAvailable(featureFlag: string): boolean {
    // In a real-world scenario this method would call a real API
    return true;
  }
}

export interface IControllerContext {
  createController(name: string): void;
  deleteController(name: string): void;
}

export class ControllerContext implements IControllerContext {
  private _controllerStrategy: IControllerStrategy;

  constructor(contorllerStrategy: IControllerStrategy) {
    this._controllerStrategy = contorllerStrategy;
  }

  public createController(name: string): void {
    this._controllerStrategy.createController(name);
  }

  public deleteController(name: string): void {
    this._controllerStrategy.deleteController(name);
  }
}

export interface IControllerStrategy {
  createController(name: string): void;
  deleteController(name: string): void;
}

export class ExecutionExplorerControllerStrategy implements IControllerStrategy {
  private _executionExplorer: ExecutionExplorerComponent;

  constructor() {
    this._executionExplorer = new ExecutionExplorerComponent();
  }

  public createController(name: string): void {
    this._executionExplorer.createController(name);
  }

  public deleteController(name: string): void {
    this._executionExplorer.deleteController(name);
  }
}

export class DeviceExplorerControllerStrategy implements IControllerStrategy {
  private _deviceExplorer: DeviceExplorerComponent;

  constructor() {
    this._deviceExplorer = new DeviceExplorerComponent();
  }

  public createController(name: string): void {
    this._deviceExplorer.createController(name);
  }

  public deleteController(name: string): void {
    this._deviceExplorer.deleteController(name);
  }
}

export class ExecutionExplorerComponent {
  public createController(name: string): void {
    // Create a controller using the execution exporer
  }

  public deleteController(name: string): void {
    // Delete a controller using the execution exporer
  }
}

export class DeviceExplorerComponent {
  public createController(name: string): void {
    // Create a controller using the device explorer
  }

  public deleteController(name: string): void {
    // Delete a controller using the device explorer
  }
}

export class BaseTestSuite {
  protected _featuresFlagsService: IFeatureFlagsService;

  public initialize(): void {
    this._featuresFlagsService = new FeatureFlagsService();
  }
}

export class ExplorerTestsSuite extends BaseTestSuite {
  private controllerContext: IControllerContext;

  public initialize(): void {
    super.initialize();
    this.controllerContext = this._featuresFlagsService.isFeatureFlagAvailable(FLAGS.DEVICE_UI) ?
      new ControllerContext(new DeviceExplorerControllerStrategy()) :
      new ControllerContext(new ExecutionExplorerControllerStrategy())
  }

  public test(): void {
    const controllerName: string = 'my controller';

    // Do something
    // Step 1
    // Step 2
    // Step 3

    // Create a controller
    this.controllerContext.createController(controllerName);


    // Do something else 
    // Step 4
    // Step 5
    // Step 6
    this.controllerContext.deleteController(controllerName);
  }
}