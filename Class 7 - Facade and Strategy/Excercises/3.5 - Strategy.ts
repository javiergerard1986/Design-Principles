// 1 - Refactor the code to apply the Strategy Design Pattern

// 2 - The code must compile 

export interface IFeatureFlagsService {
    isFeatureFlagAvailable(featureFlag: string): boolean;
  }
  
  export class FeatureFlagsService implements IFeatureFlagsService {
    public isFeatureFlagAvailable(featureFlag: string): boolean {
      // In a real-world scenario this method would call a real API
      return true;
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
  
  export class ExplorerTestsSuite {
    private _featuresFlagsService: IFeatureFlagsService;
    private _deviceExplorer: DeviceExplorerComponent;
    private _executionExplorer: ExecutionExplorerComponent;
  
    public initialize(): void {
      this._featuresFlagsService = new FeatureFlagsService();
    }
  
    public setup(): void {
      this._deviceExplorer = new DeviceExplorerComponent();
      this._executionExplorer = new ExecutionExplorerComponent();
    }
  
    public test(): void {
      // Do something
      // Step 1
      // Step 2
      // Step 3
  
      // Create a controller
      if (this._featuresFlagsService.isFeatureFlagAvailable('DEVICE_UI')) {
        this._deviceExplorer.createController('my controller');
      } else {
        this._executionExplorer.createController('my controller');
      }
  
      // Do something else 
      // Step 4
      // Step 5
      // Step 6
      if (this._featuresFlagsService.isFeatureFlagAvailable('DEVICE_UI')) {
        this._deviceExplorer.deleteController('my controller');
      } else {
        this._executionExplorer.deleteController('my controller');
      }
    }
  }