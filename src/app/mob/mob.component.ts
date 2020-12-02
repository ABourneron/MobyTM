import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mob',
  templateUrl: './mob.component.html',
  styleUrls: ['./mob.component.scss']
})
export class MobComponent implements OnInit {

  @Input() mobName: string = "";
  @Input() mobStatus: string = "";
  @Input() mobDesc: string = "";

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.mobStatus;
  }

}