import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-diktat',
  templateUrl: './diktat.component.html',
  styleUrls: ['./diktat.component.scss']
})
export class DiktatComponent implements OnInit {
  public titel: string = '';
  public musikList: [string,string][] = [];
  public loesungsLink: string = '';

  constructor(
    // DikatComponent braucht ActivatedRoute-Funktionalitäten
    private activatedRoute: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    // Bei jeder Änderung der router parameter muss etwas passieren:
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // nämlich das:
      const diktatId = paramMap.get('diktatId');

      if (!diktatId) {
        throw new Error('Keine DiktatId angegeben!');
      }

      // Daten anhand von DikatId ermitteln:
      this.setupDiktatContent(diktatId);
    });
  }

  private setupDiktatContent(diktatId: string): void {
    this.titel = `Titel ${diktatId}`;
    this.musikList = [
      ['Beispiel1', 'Link1'],
      ['Beispiel2', 'Link2'],
    ];
    this.loesungsLink = '/';
  }
}
