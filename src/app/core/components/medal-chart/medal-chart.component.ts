import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-medal-chart',
  templateUrl: './medal-chart.component.html',
  styleUrls: ['./medal-chart.component.scss']
})
export class MedalChartComponent implements OnChanges, OnDestroy {

  @Input() countries: string[] = [];
  @Input() totals: number[] = [];

  private pieChart?: Chart<'pie', number[], string>;

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.countries.length && this.totals.length) {
      this.buildPieChart();
    }
  }

  private buildPieChart(): void {

    if (this.pieChart) {
      this.pieChart.destroy();
    }

    this.pieChart = new Chart('DashboardPieChart', {
      type: 'pie',
      data: {
        labels: this.countries,
        datasets: [{
          label: 'Medals',
          data: this.totals
        }]
      },
      options: {
        aspectRatio: 2.5,
        onClick: (event) => {
          if (event.native && this.pieChart) {
            const points = this.pieChart.getElementsAtEventForMode(
              event.native,
              'nearest',
              { intersect: true },
              true
            );

            if (points.length) {
              const index = points[0].index;
              const country = this.countries[index];
              this.router.navigate(['country', country]);
            }
          }
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.pieChart?.destroy();
  }
}