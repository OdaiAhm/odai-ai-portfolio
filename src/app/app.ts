import { Component } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Education } from './components/education/education';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Certificates } from './components/certificates/certificates';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',

  imports: [
    Navbar,
    Hero,
    About,
    Education,
    Skills,
    Projects,
    Certificates,
    Contact
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {}