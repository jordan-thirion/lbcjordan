import { Component } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card';
import { ContactComponent } from '../contact/contact';
import { SubCardComponent } from '../sub-card/sub-card';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-home',
  imports: [AppModule, ItemCardComponent, ContactComponent, SubCardComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  
}
