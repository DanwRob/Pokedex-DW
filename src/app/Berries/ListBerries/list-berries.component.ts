import { Component, Input } from '@angular/core';
import { IBerrie } from '../IBerrie';

@Component({
  selector: 'dlwi-list-berries',
  templateUrl: './list-berries.component.html',
  styleUrls: ['./list-berries.component.css']
})
export class ListBerriesComponent {
  @Input() berrie!:IBerrie;
}
