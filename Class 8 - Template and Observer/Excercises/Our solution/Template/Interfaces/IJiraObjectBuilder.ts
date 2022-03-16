import { OBJECT_TYPE } from "./OBJECT_TYPE";
import { JIRAObject } from "./JIRAObject";

export interface IJiraObjectBuilder {
    setTitle(title: string): void;
    setDescription(description: string): void;
    setType(type: OBJECT_TYPE): void;
    getResult(): JIRAObject;
  }