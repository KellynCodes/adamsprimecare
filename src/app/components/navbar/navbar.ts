import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'adam-navbar',
  standalone: true,
 imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {}
