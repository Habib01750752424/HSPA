import { Component } from "@angular/core";


@Component({
   selector:'apps-property-card',
  //  template:`<h1>This is a property card Component</h1>`,
  templateUrl:"property-card.component.html",
  //  styles:[
  //    'h1{font-weight:bold;font-size:50px}'
  //   ]
  styleUrls:["property-card.component.css"]
})


export class PropertyCardComponent{
    property:any={
      "Id":1,
      "Name":"Baba and Ma House",
      "Type":"House",
      "Price":5000000
    }
}
