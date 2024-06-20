import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ActivityReportComponent } from './components/activity-report/activity-report.component';

@Component({
  selector: 'cra-root',
  standalone: true,
  imports: [RouterOutlet, ActivityReportComponent],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css'
})
export class AppComponent {
  title = 'operation-cra';
}
