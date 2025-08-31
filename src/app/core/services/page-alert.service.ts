import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageAlertService {
  showAlert = signal<boolean>(false);
  message = signal<string>('');
  currentTimeOut: any;

  constructor() { }

  alertMessage(message: string, duration: number){
    this.message.set(message);
    this.showAlert.set(true);

    if(this.currentTimeOut){
      clearTimeout(this.currentTimeOut);
    }

    this.currentTimeOut = setTimeout(()=>{
      this.message.set('');
      this.showAlert.set(false);
    }, duration)
  }
}
