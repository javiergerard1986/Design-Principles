import { TicketBuilder } from "./Builders/TicketBuilder";
import { Director } from "./director";
import { NightlyReportTicket } from "./Tickets/nightlyReportTicket";

export class NightlyReportGenerator {
    
  director: Director = new Director();
  ticketBuilder: TicketBuilder = new TicketBuilder();

  public createNightlyReport(): void {
    // Do awesome stuff to generate the nightly report information
    // The following collection will be initializated using actual nightly report information
    const testFailureResults = ['tc-2 failed! :(', 'tc-3 is unstable! :|']
    const jiraObjects: NightlyReportTicket[] = [];
    
    testFailureResults.forEach((testResult: string) => {
    this.director.makeNightlyReportTicket(this.ticketBuilder, `${testResult} - INCONSISTENCY`);

    // Process failure results and create tickets
    jiraObjects.push(this.ticketBuilder.getResult());
    });
    
    // Now... create the JIRA objects!
      this.createJIRAInconsistencies(jiraObjects);
  }
    
  private createJIRAInconsistencies(jiraObjects: NightlyReportTicket[]): void {
    // Calls JIRA API to create the required incosistencies
  }        

}