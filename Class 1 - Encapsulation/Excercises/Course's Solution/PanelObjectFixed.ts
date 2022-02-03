export class Element {
    protected locator: string;

    constructor(locator: string) {
        this.locator = locator;
    }
    public toString(): string {
        return this.locator;
    }

    public dragAndDrop(from: number, to: number): void { }
}

// explain why enums are useful on this situation
export enum Platform {
    ELECTRON,
    BROWSER,
}

export enum Resolution {
    r800x600 = "800x600",
    r1920x1080 = "1920x1080",
    r1024x768 = "1024x768",
}

// abstract class instead of interface
export abstract class WindowConfig {
    public abstract getPlatform(): Platform;
    public abstract getResolution(): Resolution;
}

// why interface is somehow adecuate on this scenario
export interface IPosition {
    getPanelPosition(): number;
}

export class RaiderWindowConfig extends WindowConfig {
    protected platform: Platform;
    protected resolution: Resolution;

    public getPlatform(): Platform {
        return (this.platform ? this.platform : Platform.ELECTRON);
    }

    public getResolution(): Resolution {
        return (this.resolution ? this.resolution : Resolution.r800x600);
    }
}

// Delegate the responsibility to calculate the position to another class
export class RaiderPositionCalculator implements IPosition {
    protected config: WindowConfig;

    constructor(config: WindowConfig) {
        this.config = config;
    }

    private getElectronPosition() {
        const resolution: Resolution = this.config.getResolution();

        if (resolution === Resolution.r800x600) return (0.5 * 30) / 33 + 55;
        if (resolution === Resolution.r1920x1080) return (0.9 * 88) / 78 + 22;
    }

    private getBrowserPosition() {
        const resolution: Resolution = this.config.getResolution();
        if (resolution === Resolution.r1024x768) return (0.9 * 88) / 78 + 22;
    }

    public getPanelPosition(): number {
        switch (this.config.getPlatform()) {
            case Platform.ELECTRON:
                return this.getElectronPosition();
            case Platform.BROWSER:
                return this.getBrowserPosition();
            default:
                throw new NotExpectedPlatformError();
        }
    }
}

// CustomException so code looks more readable
export class NotExpectedPlatformError implements Error {
    name: string;
    message: string;
    stack?: string;
}

// delegate concrete and shared actions from the Panels to another class
export class ResizeBehavior {
    private coordinatesCalulator: IPosition;

    private panel: Element;

    private constructor(panelBorder: Element, config: WindowConfig) {
        this.coordinatesCalulator = new RaiderPositionCalculator(config);
        this.panel = panelBorder;
    }

    public async moveTo(to: number): Promise<void> {
        const actualPositionX: number = this.coordinatesCalulator.getPanelPosition();
        this.panel.dragAndDrop(actualPositionX, to);
    }

    public getPosition(): number {
        return this.coordinatesCalulator.getPanelPosition();
    }
}

// PanelObject can perform the moveTo without knowing implementation details
export default class PanelObject {
    protected panelBorder: Element;
    protected window: WindowConfig;
    protected resizeBehaviour: ResizeBehavior

    constructor(windowsConfig: WindowConfig) {
        this.panelBorder = new Element('');
        this.window = windowsConfig;

        (windowsConfig === null) ? this.window = new RaiderWindowConfig()
            : this.window = windowsConfig;

    }

    public async moveTo(to: number): Promise<void> {
        await this.resizeBehaviour.moveTo(to);
    }
};