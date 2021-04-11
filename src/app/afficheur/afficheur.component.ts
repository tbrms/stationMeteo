import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BulletinMeteo } from 'src/shared/models/bulletinMeteo.model';
import { BulletinMeteoWebService } from 'src/shared/webservices/bulletinMeteo.webservice';

@Component({
  selector: 'app-afficheur',
  templateUrl: './afficheur.component.html',
  styleUrls: ['./afficheur.component.scss']
})
export class AfficheurComponent implements OnInit {

  public dernierBulletin: BulletinMeteo | undefined;
  //public dernierBulletinWebService: Observable<BulletinMeteo>;

  constructor(private bulletinMeteoWebService : BulletinMeteoWebService) {
    this.getDernierBulletinWebService();
    //this.dernierBulletinWebService = this.getDernierBulletinWebService();
   }

  ngOnInit(): void {
    

  }

  getDernierBulletin(): BulletinMeteo {
    return new BulletinMeteo('1','2021-02-01',20,1024,80);
  }

  getDernierBulletinWebService() {
    this.bulletinMeteoWebService.getLastBulletinMeteo().subscribe(
      (retour: BulletinMeteo) => {
        console.log(retour);
        this.dernierBulletin = retour;
      }, (error) => {
        console.log(error);
      }, () => {
        
      }
    );
  }

  maj(): void {
    //this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    this.bulletinMeteoWebService.getLastBulletinMeteo().subscribe(
      (retour: BulletinMeteo) => {
        console.log(retour);
        this.dernierBulletin = retour;
      }, (error) => {
        console.log(error);
      }, () => {
        
      }
    );
  }

}
