import { ISubscriber } from "./ISubscriber";

export class AnotherButton implements ISubscriber {
    
    update(darkThemeEnabled: boolean): void {
        if (darkThemeEnabled) {
            // set dark theme
        }
    }
    
}