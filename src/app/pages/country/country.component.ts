import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OlympicService } from '../../core/services/olympic.service';
import { Olympic } from '../../core/models/olympic.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  public titlePage = '';
  public totalEntries = 0;
  public totalMedals = 0;
  public totalAthletes = 0;
  public error = '';

  public years: number[] = [];
  public medals: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private olympicService: OlympicService
  ) {}

  ngOnInit(): void {

    const countryName = this.route.snapshot.paramMap.get('countryName');

    if (!countryName) {
      this.router.navigate(['/not-found']);
      return;
    }

    this.olympicService.getCountryByName(countryName).subscribe({
      next: (country: Olympic | undefined) => {

        if (!country) {
          this.router.navigate(['/not-found']);
          return;
        }

        this.titlePage = country.country;

        this.totalEntries = country.participations.length;

        this.totalMedals = country.participations.reduce(
          (acc, p) => acc + p.medalsCount,
          0
        );

        this.totalAthletes = country.participations.reduce(
          (acc, p) => acc + p.athleteCount,
          0
        );

        this.years = country.participations.map(p => p.year);
        this.medals = country.participations.map(p => p.medalsCount);
      },
      error: (err) => {
        this.error = err.message;
      }
    });
  }
}