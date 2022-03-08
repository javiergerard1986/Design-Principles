import { Context } from "../Context/Context";
import { FeatureFlagsService } from "../FeatureFlagsService/FeatureFlagsService";

export class ExplorerTestsSuite {

    private _context: Context;
    private _featuresFlagsService: FeatureFlagsService;
  
    public initialize(): void {
      this._context = new Context();
      this._featuresFlagsService = new FeatureFlagsService();
    }
  
    public setup(): void {
        this._context.setContext(this._featuresFlagsService.isFeatureFlagAvailable('DEVICE_UI'));
    }
      
  
    public test(): void {
      // Do something
      // Step 1
      // Step 2
      // Step 3
  
      // Create a controller
      this._context.getExplorerPanel().createController("Controller AZF");
  
      // Do something else 
      // Step 4
      // Step 5
      // Step 6
      this._context.getExplorerPanel().deleteController("Controller AZF");
    }

}