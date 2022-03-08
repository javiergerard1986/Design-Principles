export enum JIRA_OBJECT_TYPE {
  STORY = 1,
  EPIC = 2,
  RISK = 3,
  INCONSISTENCY = 4,
}

export interface Builder {
  reset(): void;
  setProjectName(name: string): Builder;
  setType(type: JIRA_OBJECT_TYPE): Builder;
  setTitle(title: string): Builder;
  setDescription(description: string): Builder;
  setComments(comments: string[]): Builder;
  setLabels(labels: string[]): Builder;
  setAssignee(assignee: string): Builder;
  setStoryPoints(storyPoints: number): Builder;
}

export class JiraObjectBuilder implements Builder {

  private jiraObject: JIRAObject;

  public reset(): void {
    this.jiraObject = new JIRAObject();
  }

  public setProjectName(name: string): Builder {
    console.log('Set project name...');
    return this;
  }

  public setType(type: JIRA_OBJECT_TYPE): Builder {
    console.log('Set type...');
    return this;
  }

  public setTitle(title: string): Builder {
    console.log('Set title...');
    return this;
  }

  public setDescription(description: string): Builder {
    console.log('Set description...');
    return this;
  }

  public setComments(comments: string[]): Builder {
    console.log('Set comments...');
    return this;
  }

  public setLabels(labels: string[]): Builder {
    console.log('Set labels...');
    return this;
  }

  public setAssignee(assignee: string): Builder {
    console.log('Set assignee...');
    return this;
  }

  public setStoryPoints(storyPoints: number): Builder {
    console.log('Set story points...');
    return this;
  }

  public getProduct(): JIRAObject {
    const product: JIRAObject = this.jiraObject;
    this.reset();
    return product;
  }

}

export class Director {
  private _builder: Builder;

  constructor(builder: Builder) {
    this._builder = builder;
  }

  public set builder(builder: Builder) {
    this._builder = builder;
  }

  public createNightlyReportInconsistency(testResult: string) {
    const projectName = 'RA';
    const type = JIRA_OBJECT_TYPE.INCONSISTENCY;
    const title = `${testResult} - INCONSISTENCY`;
    const labels = ['inconsistency', 'triage'];

    this._builder.reset();
    this._builder.setProjectName(projectName).setType(type).setTitle(title).setLabels(labels);
  }
}

export class JIRAObject {
  // JIRAObject code here...
}

export class NighlyReportGenerator {
  public createNightyReport(): void {
    // Do awesome stuff to generate the nightly report information
    // The following collection will be initializated using actual nightly report information
    const testFailureResults = ['tc-2 failed! :(', 'tc-3 is unstable! :|']

    testFailureResults.forEach((testResult: string) => {
      // Process failure results and create tickets

      this.createJIRAInconsistencies(testResult);
    })
  }

  private createJIRAInconsistencies(testResult: string): void {
    const builder: JiraObjectBuilder = new JiraObjectBuilder();
    const director: Director = new Director(builder);

    director.createNightlyReportInconsistency(testResult);

    const jiraObject: JIRAObject = builder.getProduct();
  }
}
