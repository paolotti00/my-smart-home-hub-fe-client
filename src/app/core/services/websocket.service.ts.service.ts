import { Injectable } from '@angular/core';
import * as Stomp from '@stomp/stompjs';
import {Observable} from "rxjs";
import {serverConstants} from "../constants/server.constants";
import * as constants from "constants";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private stompClient: Stomp.Client = {} as Stomp.Client;
  private subscription: Stomp.StompSubscription = {} as Stomp.StompSubscription;

  constructor() { }

  public connect(topic: string): Observable<string> {
    // WebSocket creation
    this.stompClient = new Stomp.Client({
      brokerURL: serverConstants.WEBS_SOCKET_URL,
      debug: (str: string) => {
        console.log(str);
      }
    });

    // WebSocket connection
    return new Observable<string>((observer) => {
      this.stompClient.onConnect = (frame) => {
        // WebSocket subscribing
        this.subscription = this.stompClient.subscribe("/topic"+topic, (message) => {
          console.log("received by websocket " + message.body )
          observer.next(JSON.parse(message.body));
        });
      };
      this.stompClient.activate();
    });
  }

  public disconnect(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.stompClient && this.stompClient.connected) {
      this.stompClient.deactivate();
    }
  }
}

