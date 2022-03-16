import { ISubscriber } from "./ISubscriber";

export class PanelComponent implements ISubscriber {
    
    update(darkThemeEnabled: boolean): void {
        if (darkThemeEnabled) {
            // set dark theme
        }
    }

}