export interface IFeatureFlagsService {
    isFeatureFlagAvailable(featureFlag: string): boolean;
}