import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ChatBot';
  res = " ";
  output = "Welcome please enter your name";
  ngOnInit(): void { }

  constructor(private http: HttpClient, private router: Router) { }

  query() {
      var res = (<HTMLInputElement>document.getElementById('response')).value;
      console.log(res)
      this.http.post(`http://localhost:3000/`, {response: this.res})
        .subscribe((res) => {
          alert(res);
          //this.output= res;
        });
    }

    displaytext()
    {
      return this.output;
    }
}
