import { PropertiesPanel } from "../Panel/propertiesPanel";

export abstract class PanelCreator{
    public abstract createPropertiesPanel(): PropertiesPanel;
}