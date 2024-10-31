import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgIf],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {

  dia?: String

}
