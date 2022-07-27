import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.sass']
})
export class PartnersComponent implements OnInit {

  logos = ["3dx_companylogo_black.png",
    "Airtech_logo.png",
    "AVSystem_logo_basic.png",
    "FAGH-Kol.png",
    "mat_biale_102x42.png",
    "maxi_biale_108x33.png",
    "mesco_biale_108x23.png",
    "seco_biale_120x30.png",
    "treko_biale_135x40.png",
    "VTM.png"
    ]

  logos2 = [
    "3dconexion.png",
    "airtech.png",
    "batemo.png",
    "bossard.png",
    "columbus.png",
    "emkay.png",
    "fagh.png",
    "finnotech.png",
    "helukabel.png",
    "Mat.png",
    "materials.png",
    "maxi_pizza.png",
    "mesco.png",
    "mgm.png",
    "miquido.png",
    "msc.png",
    "seco.png",
    "stahwille.png",
    "stereolabs.png",
    "treko.png",
    "up.png",
    "VTM.png",
    "weip.png",
    "zyxel.png"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
