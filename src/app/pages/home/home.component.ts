import { Component, OnInit } from '@angular/core';
import { OlympicService } from '../../core/services/olympic.service';
import { Olympic } from '../../core/models/olympic.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public totalCountries = 0;
  public totalJOs = 0;
  public error = '';
  titlePage = 'Medals per Country';

  public countries: string[] = [];
  public totals: number[] = [];

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.olympicService.getOlympics().subscribe({
      next: (data: Olympic[]) => {

        this.totalCountries = data.length;

        const allYears = data.flatMap(c =>
          c.participations.map(p => p.year)
        );

        this.totalJOs = new Set(allYears).size;

        this.countries = data.map(c => c.country);

        this.totals = data.map(c =>
          c.participations.reduce(
            (acc, p) => acc + p.medalsCount,
            0
          )
        );
      },
      error: (err) => {
        this.error = err.message;
      }
    });
  }
}