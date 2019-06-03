import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { AppService } from './app.service';
import { environment } from '../environments/environment';

@Injectable()
export class WebsocketService {
    public messages;

    constructor(wsService: AppService) {
        this.messages = wsService
            .connect(environment.websocketUrl)
            .map((response) => {
                let data = response.data;
                return data;
            });
    }
}