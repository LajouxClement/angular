import { Component, OnInit } from '@angular/core';
import { products } from "../product";

@Component({
  selector: 'app-candle',
  templateUrl: './candle.component.html',
  styleUrls: ['./candle.component.css']
})
export class CandleComponent implements OnInit {
  products = products;
  
  constructor() { }

  ngOnInit() {
  }

}