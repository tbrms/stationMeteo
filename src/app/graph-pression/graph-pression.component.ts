import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { DonneesGraphWebService } from 'src/shared/webservices/donneesGraph.webservice';

@Component({
  selector: 'app-graph-pression',
  templateUrl: './graph-pression.component.html',
  styleUrls: ['./graph-pression.component.scss']
})
export class GraphPressionComponent implements OnInit {

  pressions: any[]= [];

  view: [number,number] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Pression';
  timeline = false;
  xAxisTickFormatting = 'formatDate'; 
  colorScheme = {domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']};
  autoScale = true;
  //yScaleMin : number = -10.0; [yScaleMin]="yScaleMin"
  //yScaleMax : number = 40.0;   [yScaleMax]="yScaleMax"

  constructor(private donneesGraphWebService : DonneesGraphWebService) { }

  ngOnInit(): void {
    console.log('Init Pression');
    this.getPressions();
  }

  /* get $data(): Observable<any[]> {
    return this.donneesGraphWebService.getPressions().pipe(
      map(data => [data])
    );
  } */

  getPressions() : void {
    console.log('GraphPressionComponent.getPressions');
    this.donneesGraphWebService.getPressions()
    .subscribe((data: any[]) => {
      this.pressions = [data];
      console.log('Pressions: ', this.pressions);
    });
  }

  onSelect(event: any) {
    console.log(event);
  }

}
