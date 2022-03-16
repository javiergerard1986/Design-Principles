import { ISubscriber } from "../Suscribers/ISubscriber";
import { IPublisher } from "./IPublisher";

export class Publisher implements IPublisher {
    
    subscribers: ISubscriber[];
    private darkThemeEnabled: boolean;

    public Publisher(){
    }

    suscribe(subscriber: ISubscriber): void {
        this.subscribers.push(subscriber);
    }
    
    unsubscribe(subscriber: ISubscriber): void {
        this.subscribers.forEach((element, index) => {
            if(element === subscriber) this.subscribers.splice(index, 1);
        });
    }
    
    notifySubscribers(): void {
        for(let x = 0; x < this.subscribers.length; x++) {
            this.subscribers[x].update(this.darkThemeEnabled);
        }
    }
    
    click(): void {
        // Click on button
        this.darkThemeEnabled = !this.darkThemeEnabled;
        this.notifySubscribers();
    }
    
}