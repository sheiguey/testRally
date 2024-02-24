import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CountComponent } from './components/count/count.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {NgClass} from '@angular/common';
import { PiloteService } from '../../services/pilotes/pilote.service';
import { Router } from '@angular/router';
import { IDriver } from '../../models/pilote';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    CountComponent,
    MatTableModule,
    MatButtonModule,
    NgClass
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit{
  @ViewChild('fullScreenElement',  { read: ElementRef }) fullScreenElement!: ElementRef;
  displayedColumns = ['d', 'Pilote', 'Sponsors', 'Marque', 'Vehicules', 'Actions'];
  dataSource = signal<IDriver[]>([]);
  isFullScreen = signal(false);

  depart1Enabled: { [idwialon: number]: boolean } = {};
  depart2Enabled: { [idwialon: number]: boolean } = {};
  arrive1Enabled: { [idwialon: number]: boolean } = {};
  arrive2Enabled: { [idwialon: number]: boolean } = {};

  buttonStates: any= {};

  constructor(private piloteService: PiloteService, private router: Router) {
    
    if (typeof document !== 'undefined') {
      document.addEventListener('fullscreenchange', this.handleFullScreenChange.bind(this));
    }
    
    
  }
  
  ngOnInit(): void {
    this.piloteService.listPilote().subscribe(v => {
      this.dataSource.update(d=> d=v)
      this.setDefaultButtonState();
      console.log('list ', v)
    })
  }

  newDate() {
    const date = new Date(); 
    const year = date.getFullYear(); 
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2); 
    const hours = ('0' + date.getHours()).slice(-2); 
    const minutes = ('0' + date.getMinutes()).slice(-2); 
    const seconds = ('0' + date.getSeconds()).slice(-2); 

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  setDefaultButtonState() {
    
    if (this.dataSource) {
      for (const element of this.dataSource()) {
        this.depart1Enabled[element.idwialon] = false;
        this.depart2Enabled[element.idwialon] = true;
        this.arrive1Enabled[element.idwialon] = true;
        this.arrive2Enabled[element.idwialon] = true;
      }
    }
  }
  
  toggleFullScreen() {
    const element = this.fullScreenElement.nativeElement as HTMLElement
    this.isFullScreen.update((val) => val=true)
    element.requestFullscreen();
  }

  hideFullScreen() {
    if (typeof document !== 'undefined') {
      document.exitFullscreen();
      this.isFullScreen.update((val) => val=false)
    }
  }

  handleFullScreenChange() {
    if (typeof document !== 'undefined') {
      if (!document.fullscreenElement) {
        this.isFullScreen.update((val) => val=false)
      }
    } 
  }

  updateButtonState(idwialon: number, buttonType: string) {
    if (!this.buttonStates[idwialon]) {
        this.buttonStates[idwialon] = { depart1: false, arrive1: false, depart2: false, arrive2: false };
    }

    this.buttonStates[idwialon][buttonType] = !this.buttonStates[idwialon][buttonType];
  }

  update(elem: any) {
    this.router.navigate(['create-pilote'], { queryParams: { data: JSON.stringify(elem) }} )
  }

  depart1(id : number) {
    this.updateButtonState(id, 'depart1');
    this.depart1Enabled[id] = true;
    this.depart2Enabled[id] = true;
    this.arrive1Enabled[id] = false;
    this.arrive2Enabled[id] = true;
    
    let formData = new FormData()
    formData.append('vehicleid', id.toString())
    formData.append('depart1', this.newDate())

    this.piloteService.departOne(formData).subscribe(r => {
      console.log('response ', r)
    })
  }
  
  arrive1(id : number) {
    this.updateButtonState(id, 'arrive1');
   
    this.depart1Enabled[id] = true;
    this.depart2Enabled[id] = false;
    this.arrive1Enabled[id] = true;
    this.arrive2Enabled[id] = true;

    let formData = new FormData()
    formData.append('vehicleid', id.toString())
    formData.append('arriv1', this.newDate())
    this.piloteService.departOne(formData).subscribe(r => {
      console.log('response ', r)
    })
  }

  depart2(id : number) {
    this.updateButtonState(id, 'depart2');
    this.depart1Enabled[id] = true;
    this.depart2Enabled[id] = true;
    this.arrive1Enabled[id] = true;
    this.arrive2Enabled[id] = false;

    let formData = new FormData()
    formData.append('vehicleid', id.toString())
    formData.append('depart2', this.newDate())

    this.piloteService.departOne(formData).subscribe(r => {
      console.log('response ', r)
    })
  }


  arrive2(id : number) {
    this.updateButtonState(id, 'arrive2');
    this.depart1Enabled[id] = true
    this.depart2Enabled[id] = true;
    this.arrive1Enabled[id] = true;
    this.arrive2Enabled[id] = true;

    let formData = new FormData()
    formData.append('vehicleid', id.toString())
    formData.append('arriv2', this.newDate())

    this.piloteService.departOne(formData).subscribe(r => {
      console.log('response ', r)
    })
  }
}




