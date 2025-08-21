import { Component } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card';
import { ContactComponent } from '../contact/contact';
import { SubCardComponent } from '../sub-card/sub-card';
import { AppModule } from '../app.module';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-location',
  imports: [AppModule, ItemCardComponent, ContactComponent, SubCardComponent, FooterComponent],
  templateUrl: './location.html',
  styleUrls: ['./location.scss']
})
export class LocationComponent {
 scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
