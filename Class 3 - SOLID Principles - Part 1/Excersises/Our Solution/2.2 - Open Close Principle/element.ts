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