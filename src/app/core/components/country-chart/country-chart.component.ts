import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.scss']
})
export class CountryChartComponent implements OnChanges, OnDestroy {

  @Input() years: number[] = [];
  @Input() medals: number[] = [];

  private lineChart?: Chart<'line', number[], number>;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.years.length && this.medals.length) {
      this.buildChart();
    }
  }

  private buildChart(): void {

    if (this.lineChart) {
      this.lineChart.destroy();
    }

    this.lineChart = new Chart('countryChart', {
      type: 'line',
      data: {
        labels: this.years,
        datasets: [{
          label: 'Medals',
          data: this.medals
        }]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

  ngOnDestroy(): void {
    this.lineChart?.destroy();
  }
}