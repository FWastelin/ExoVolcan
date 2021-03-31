import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Volcan } from 'src/app/models/volcan.model';
import { VolcanService } from 'src/app/services/volcan.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  id : number;
  volcan : Volcan;

  constructor(
    private _service : VolcanService,
    private _route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];//snapshot c'est l'image de l'url auquel on met un paramétre
    this._service.getById(this.id, "https://obscure-waters-94665.herokuapp.com/lieux")
                .subscribe(data => this.volcan = data);
  }

}
