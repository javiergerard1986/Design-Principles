import { ISubscriber } from "../Suscribers/ISubscriber";

export interface IPublisher {

    subscribers: ISubscriber[];

    suscribe(subscriber: ISubscriber): void;
    unsubscribe(subscriber: ISubscriber): void;
    notifySubscribers(): void;
}