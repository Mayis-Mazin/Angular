import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private Route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.Route.snapshot.paramMap.get('id')
    console.log(id)
  }

}
