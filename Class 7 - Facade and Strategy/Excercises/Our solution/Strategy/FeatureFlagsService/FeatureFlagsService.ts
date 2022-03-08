import { IFeatureFlagsService } from "./IFeatureFlagsService";

export class FeatureFlagsService implements IFeatureFlagsService {
    
    public isFeatureFlagAvailable(featureFlag: string): boolean {
      // In a real-world scenario this method would call a real API
      return true;
    }
  
}