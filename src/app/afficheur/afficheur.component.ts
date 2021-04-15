import { Component, OnInit } from '@angular/core';
import { BulletinMeteo } from 'src/shared/models/bulletinMeteo.model';
import { BulletinMeteoWebService } from 'src/shared/webservices/bulletinMeteo.webservice';

@Component({
  selector: 'app-afficheur',
  templateUrl: './afficheur.component.html',
  styleUrls: ['./afficheur.component.scss']
})
export class AfficheurComponent implements OnInit {

  public dernierBulletin: BulletinMeteo | undefined;

  constructor(private bulletinMeteoWebService : BulletinMeteoWebService) { }

  ngOnInit(): void { 
    this.getDernierBulletin();
  }

  getDernierBulletin() {
    this.bulletinMeteoWebService.getLastBulletinMeteo().subscribe(
      (retour: BulletinMeteo) => {
        //console.log(retour);
        this.dernierBulletin = retour;
      }, (error) => {
        console.log(error);
      }
    );
  }
}
