import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cael';

  public button(){
    alert("I live under your bed but only when you're not there");
  }
  public bombSynagogue(){
    var latDec = (Math.random() * 99999) / 10000;
    var lat = Math.random() * (90 + 90) - 90 + latDec;
    var longDec = (Math.random() * 99999) / 10000;
    var long = (Math.random() * (180 + 180) - 180) + longDec;

    alert("Synagogue bombed at: " + lat + ", " + long);
  }
}
