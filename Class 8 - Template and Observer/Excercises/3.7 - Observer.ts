let darkThemeEnabled : boolean;

export const timer = (timeInMs: number): ClassDecorator => {
    return (target: any): void => {
        console.log(`apply ${timeInMs} to ${target}`)
        // decorate target to use timer
    }
}

export class DarkThemeButton {
    public click(): void {
        darkThemeEnabled = !darkThemeEnabled;
    }
}

@timer(100)
export class PanelComponent {
    public setDarkTheme(): void {
        if (darkThemeEnabled) {
            // set dark theme
        }
    }
}

@timer(100)
export class AnotherButton {
    public applyDarkTheme() {
        if (darkThemeEnabled) {
            // set dark theme
        }
    }
}

@timer(100)
export class MenuBar {
    public darkTheme() {
        if (darkThemeEnabled) {
            // set dark theme
        }
    }
}
