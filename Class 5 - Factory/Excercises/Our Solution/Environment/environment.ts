import { PropertiesPanel } from "../Panel/propertiesPanel";

export abstract class Environment{
    public abstract createPropertiesPanel(): PropertiesPanel;
}