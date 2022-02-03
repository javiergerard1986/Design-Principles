// 1 - Refactor the code to respect the Open-Closed Principle
// 2 - The code must compile 


export enum PanelName {
    PROPERTIES = 'Properties',
    TOOLBOX = 'Toolbox',
    MY_CUSTOM = 'My Custom Panel'
}

export enum PanelId {
    PROPERTIES = 'core.properties',
    TOOLBOX = 'core.toolbox',
    MY_CUSTOM = 'core.custom'
}

export class Element {
    constructor(locator: string) {
        // constructor code here
    }

    public find(locator: string): Element {
        return new Element(locator);
    }

    public withAttribute(name: string, value: string): Element {
        return new Element('fakeLocator');
    }
}

export class Component {
    private container: Element;

    constructor(locator: string) {
        this.container = new Element(locator);
    }

    public getContainer(): Element {
        return this.container;
    }
}

export class MainPanelGroup extends Component {
    private _panelCollection: Map<string, string>;

    constructor(locator: string) {
        super(locator);
        this._panelCollection = new Map<string, string>();
    }

    public findPanel(panelName: PanelName): PanelBase {
        const panelId = this._panelCollection.get(panelName);

        if (panelId === "core.properties") {
            return new PropertiesPanel()
        } else if (panelId === "core.toolbox") {
            return new ToolboxPanel();
        } else if (panelId === "core.custom") {
            return new MyCustomPanel();
        }
    }
}

export class PanelBase extends Component {

}

export class PropertiesPanel extends PanelBase {
    constructor() {
        super('fakeSelector1')
    }
}

export class ToolboxPanel extends PanelBase {
    constructor() {
        super('fakeSelector2')
    }
}

export class MyCustomPanel extends PanelBase {
    constructor() {
        super('fakeSelector2')
    }
}