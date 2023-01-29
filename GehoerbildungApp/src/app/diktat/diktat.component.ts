import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDiktatData } from './diktat-data.interface';
import * as diktatJsonData from '../../assets/diktat-data.json';

@Component({
  selector: 'app-diktat',
  templateUrl: './diktat.component.html',
  styleUrls: ['./diktat.component.scss']
})
export class DiktatComponent implements OnInit {
  public diktatData: IDiktatData | undefined;
  private diktatList: { [diktatId: string] : IDiktatData; } = diktatJsonData;

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
      this.diktatData = this.diktatList[diktatId];
    });
  }
}
