import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [AppModule, RouterLink],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  // Footer component logic can be added here if needed

}
