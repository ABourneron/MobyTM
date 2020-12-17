import { Component, Input, OnInit } from '@angular/core';
import { ApiService, mobs } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})

export class FicheComponent implements OnInit {

  mobylettes: mobs = { _id: '', name: '', desc: '', price: "", status: '' };

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);

    this.api.getMob(this.route.snapshot.params.id).subscribe(
      (data: mobs) => this.mobylettes = { ...data }
    );
    console.log(this.mobylettes);
  }


}

