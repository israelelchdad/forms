import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Forms } from '../../model/forms';
import { FromService } from '../../services/from.service';

@Component({
  selector: 'app-formms',
  templateUrl: './formms.component.html',
  styleUrls: ['./formms.component.css']
})
export class FormmsComponent implements OnInit {
  name=new FormControl('')
  phone =new FormControl('')
  puple:{}[]=[]
  forms = new FormGroup(
    { name:new FormControl(''),
      phone:new FormControl(''),
      wotsup:new FormControl('')
    })

  constructor(public svc:FromService) { }

  ngOnInit() {
  }
  sendtotable(){
    this.puple.push(
      {name:this.name.value,
      phone:this.phone.value})
  }
  shep=new FormControl('')
  sendshep(){
    this.shep.setValue('moo')

  }
  send(){
   
    this.svc.araeyform=this.forms.value

  }

}
