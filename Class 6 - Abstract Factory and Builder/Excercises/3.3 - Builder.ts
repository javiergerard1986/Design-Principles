// 1 - Refactor the code to apply the Builder Design Pattern

// 2 - The code must compile 

export class JIRAObject {
  private projectName: string;
  private type: string;
  private title: string;
  private description?: string;
  private comment?: string;
  private labels?: string[];
  private assignee?: string;
  private storyPoints?: number

  constructor(
    projectName: string,
    type: string,
    title: string,
    description?: string,
    comment?: string,
    labels?: string[],
    assignee?: string,
    storyPoints?: number) {

    this.projectName = projectName;
    this.type = type;
    this.title = title;
    this.description = description;
    this.comment = comment;
    this.labels = labels;
    this.assignee = assignee;
    this.storyPoints = storyPoints;
  }
}

export class NighlyReportGenerator {
  public createNightyReport(): void {
    // Do awesome stuff to generate the nightly report information
    // The following collection will be initializated using actual nightly report information
    const testFailureResults = ['tc-2 failed! :(', 'tc-3 is unstable! :|']
    const jiraObjects: JIRAObject[] = [];

    testFailureResults.forEach((testResult: string) => {
      
      // Process failure results and create tickets
      const projectName = 'RA';
      const type = '4'; // 4 stands for 'inconsistency' 
      const title = `${testResult} - INCONSISTENCY`;
      const labels = ['inconsistency', 'triage'];

      const jiraObject: JIRAObject = new JIRAObject(projectName, type, title, null, null, labels);

      jiraObjects.push(jiraObject);
    });

    // Now... create the JIRA objects!
    this.createJIRAInconsistencies(jiraObjects);
  }

  private createJIRAInconsistencies(jiraObjects: JIRAObject[]): void {
    // Calls JIRA API to create the required incosistencies
  }
}