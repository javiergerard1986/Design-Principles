import { Element } from "./element";

export class Component {
    private container: Element;

    constructor(locator: string) {
        this.container = new Element(locator);
    }

    public getContainer(): Element {
        return this.container;
    }
}