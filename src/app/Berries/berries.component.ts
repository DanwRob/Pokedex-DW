import { Component, OnInit } from '@angular/core';
import { BerriesService } from './berries.service';
import { IBerrie } from './IBerrie';

@Component({
  templateUrl: './berries.component.html',
  styleUrls: ['./berries.component.css']
})
export class BerriesComponent implements OnInit {
  berries!:IBerrie[];
  private limitBerries: number = 10;
  private offset: number = 0;
  constructor(private berrieService: BerriesService){

  }

  ngOnInit(): void {
      this.berrieService.getBerries(this.limitBerries, this.offset).subscribe({
        next: data =>{
       this.berries = data;
       this.offset += this.limitBerries;
      }});
  }

  showMore(){
    this.berrieService.getBerries(this.limitBerries, this.offset).subscribe({
      next: data => {
        data.forEach(berrie =>{
          this.berries.push(berrie);
        });
        this.offset += this.limitBerries;
      }
    });
  }
}
