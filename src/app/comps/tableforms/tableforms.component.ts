import { Component, OnInit } from '@angular/core';
import { FromService } from '../../services/from.service';

@Component({
  selector: 'app-tableforms',
  templateUrl: './tableforms.component.html',
  styleUrls: ['./tableforms.component.css']
})
export class TableformsComponent implements OnInit {

  constructor(public svc:FromService) {}

  ngOnInit() {
  }

}
