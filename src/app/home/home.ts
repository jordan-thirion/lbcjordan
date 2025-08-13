import { Component } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card';
import { ContactComponent } from '../contact/contact';
import { SubCardComponent } from '../sub-card/sub-card';
import { AppModule } from '../app.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [AppModule, ItemCardComponent, ContactComponent, SubCardComponent, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
