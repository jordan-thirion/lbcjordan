import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { FooterComponent } from './footer/footer';
import { HeaderComponent } from './header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [AppModule, FooterComponent, HeaderComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
}
