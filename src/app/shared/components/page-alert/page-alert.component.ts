import { Component } from '@angular/core';
import { PageAlertService } from '../../../core/services/page-alert.service';

@Component({
  selector: 'app-page-alert',
  imports: [],
  templateUrl: './page-alert.component.html',
  styleUrl: './page-alert.component.css',
  standalone:true
})
export class PageAlertComponent {
  alertService: PageAlertService;

  constructor(private _alertService: PageAlertService){
    this.alertService = _alertService;
  }

  close(){
    this._alertService.message.set('');
    this._alertService.showAlert.set(false);
  }
}
