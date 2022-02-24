import { TicketBuilder } from "./Builders/TicketBuilder";

export class Director {
    
    makeNightlyReportTicket(builder: TicketBuilder, testResult: string){
        builder.setProjectName('RA');
        builder.setType('4');
        builder.setTitle(testResult);
        builder.setLabels(['inconsistency', 'triage']);
    }

}