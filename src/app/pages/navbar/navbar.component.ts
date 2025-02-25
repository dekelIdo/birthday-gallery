import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true, // Ensure this is set to true
  imports: [CommonModule, RouterModule], // Import necessary modules
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export default class NavbarComponent { }