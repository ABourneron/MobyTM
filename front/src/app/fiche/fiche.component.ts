import { Component, OnInit } from '@angular/core';
import { ApiService, mobs } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})


export class FicheComponent implements OnInit {
  mobylette: mobs = {_id:"", name:"", price:"", desc:"", status:""};

  constructor(private api: ApiService, private route: ActivatedRoute, ) { 

    this.api.getMob(this.route.snapshot.params['id']).subscribe((resp: any) => {
      this.mobylette = resp[0];
      
    });

    
    
  }

  ngOnInit() {
  }

}

