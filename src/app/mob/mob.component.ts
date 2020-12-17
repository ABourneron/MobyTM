import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mob',
  templateUrl: './mob.component.html',
  styleUrls: ['./mob.component.scss']
})
export class MobComponent implements OnInit {

  @Input() mobId: string = "5fdb3fd841c7532387f9e143";
  @Input() mobName: string = "";
  @Input() mobStatus: string = "";
  @Input() mobDesc: string = "";
  @Input() mobPrice: string = "";

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.mobStatus;
  }

}