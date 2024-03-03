import { Component } from "@angular/core";
import { ItemsService } from "./item/items.service";
@Component({
    selector: 'items',
    template: `
    <h2>{{title}}</h2>
    <ol>
    <li *ngFor="let item of items">
    {{item.name}}{{item.desc}}
    </li>
    </ol>
    `
})
export class Itemscomponent { 
    title="List of items";
    items;
    constructor(service: ItemsService){
        //let service=new ItemsService();
        this.items=service.getItems();
        
    }
}