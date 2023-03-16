import { Injectable } from '@angular/core';
import * as Stomp from '@stomp/stompjs';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private stompClient: Stomp.Client = {} as Stomp.Client;
  private subscription: Stomp.StompSubscription = {} as Stomp.StompSubscription;

  constructor() { }

  public connect(topic: string): Observable<string> {
    // creazione del client WebSocket
    this.stompClient = new Stomp.Client({
      brokerURL: 'ws://192.168.50.170:8080/websocket', // TODO

      debug: (str: string) => {
        console.log(str);
      }
    });

    // connessione al server WebSocket
    return new Observable<string>((observer) => {
      this.stompClient.onConnect = (frame) => {
        // iscrizione al topic
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

