import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { DonneesGraphWebService } from 'src/shared/webservices/donneesGraph.webservice';

@Component({
  selector: 'app-graph-humidite',
  templateUrl: './graph-humidite.component.html',
  styleUrls: ['./graph-humidite.component.scss']
})
export class GraphHumiditeComponent implements OnInit {
  humidites: any[]= [];

  view: [number,number] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Temperature';
  timeline = false;
  xAxisTickFormatting = 'formatDate'; 
  colorScheme = {domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']};
  autoScale = true;
  //yScaleMin : number = -10.0; [yScaleMin]="yScaleMin"
  //yScaleMax : number = 40.0;   [yScaleMax]="yScaleMax"

  constructor(private donneesGraphWebService : DonneesGraphWebService) { }

  ngOnInit(): void {
    this.getHumidites();
  }

  getHumidites(){
    this.donneesGraphWebService.getHumidites()
    .subscribe((data: any[]) => {
      this.humidites = [data];
    });
  }
  
  onSelect(event: any) {
    console.log(event);
  }

}
