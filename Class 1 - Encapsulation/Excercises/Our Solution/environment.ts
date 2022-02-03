export abstract class Environment {
    protected platform: string;
    protected resolution: string;

    constructor(platform: string){
        this.platform = platform;
    };

    /**
     * Get the environment platform
     * @returns String Platform
     */
     public getPlatform(): string {
        return this.platform;
    }

    /**
     * Get the environment resolution
     * @returns String resolution
     */
     public getResolution(): string {
        return this.resolution;
    }

    /**
     * Set resolution to the environment
     * @param resolution (string) Resolution to set
     */
    public abstract setResolution(resolution: string): void;
}