import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact';
import { AppModule } from '../app.module';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-maintenance',
  imports: [AppModule, ContactComponent, FooterComponent],
  templateUrl: './maintenance.html',
  styleUrls: ['./maintenance.scss']
})
export class MaintenanceComponent {
  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
