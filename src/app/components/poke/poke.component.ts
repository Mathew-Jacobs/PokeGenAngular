import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.scss']
})
export class PokeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  genPoke() {
    this._router.navigate(['/poke']);
  }
}
