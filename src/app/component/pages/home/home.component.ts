import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Volcan } from 'src/app/models/volcan.model';
import { VolcanService } from 'src/app/services/volcan.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  volcans : Volcan[] = []

  constructor(
    private _service : VolcanService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.loadItems("https://obscure-waters-94665.herokuapp.com/lieux");
  }
  loadItems(url : string){
    this._service.getAll(url).subscribe(data => this.volcans = data);
  }
  toInfo(id : number){
    this._router.navigate([`info/${id}`]);
  }

}
