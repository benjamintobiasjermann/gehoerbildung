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
  public diktatData: IDiktatData | undefined = undefined;
  public diktatDictionary: { [diktatId: string] : IDiktatData; } = diktatJsonData;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const diktatId = paramMap.get('diktatId');

      this.diktatData = !!diktatId
        ? this.diktatDictionary[diktatId]
        : undefined;
    });
  }
}
