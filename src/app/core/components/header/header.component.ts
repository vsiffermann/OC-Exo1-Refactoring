import { Component, Input } from '@angular/core';
import { APP_TITLE } from '../../app.constants';

export interface Indicator {
  label: string;
  value: number;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  appTitle = APP_TITLE;

  @Input() pageTitle = '';
  @Input() indicators: Indicator[] = [];

  trackByLabel(index: number, item: Indicator): string {
    return item.label;
  }
}