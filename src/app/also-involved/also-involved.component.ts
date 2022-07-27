import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-also-involved',
  templateUrl: './also-involved.component.html',
  styleUrls: ['./also-involved.component.sass']
})
export class AlsoInvolvedComponent implements OnInit {

  people = [
    {
      name: "Stanisław Dudiak",
      position: "ROS Developer",
      facebook: "",
      linkedin: ""
    },
    {
      name: "Wojciech Ciężobka",
      position: "ROS Developer",
      facebook: "",
      linkedin: ""
    },
    {
      name: "Dawid Banaszczyk",
      position: "ROS Developer",
      facebook: "",
      linkedin: ""
    },
    {
      name: "Bartosz Bobkowski",
      position: "Unit Communication Officer",
      facebook: "",
      linkedin: ""
    },
    {
      name: "Oliver Lichota",
      position: "Unit Testing Officer",
      facebook: "",
      linkedin: ""
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
