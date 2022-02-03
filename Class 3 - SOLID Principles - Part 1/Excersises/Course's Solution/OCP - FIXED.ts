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

export class UnexpectedPanelException extends Error {

}

export class MainPanelGroup extends Component {
    private _panelCollection: Map<PanelName, PanelId>;
    private _panelFactory: IPanelFactory;

    constructor(locator: string, panelFactory: IPanelFactory) {
        super(locator);
        this._panelCollection = new Map<PanelName, PanelId>();
        this._panelFactory = panelFactory;
    }

    public findPanel(panelName: PanelName): PanelBase {
        const id = this._panelCollection.get(panelName)

        return this._panelFactory.createPanel(id);
    }
}

export interface IPanelFactory {
    createPanel(panelId: PanelId): PanelBase;
}

export class PanelFactory implements IPanelFactory {
    public createPanel(panelId: PanelId): PanelBase {
        switch (panelId) {
            case PanelId.PROPERTIES:
                return new PropertiesPanel();
            case PanelId.TOOLBOX:
                return new ToolboxPanel();
            case PanelId.MY_CUSTOM:
                return new MyCustomPanel();
            default:
                throw new UnexpectedPanelException();
        }
    }
}

export abstract class PanelBase extends Component {

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