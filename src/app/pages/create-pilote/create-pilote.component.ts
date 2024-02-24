import { Component, ViewChild, ElementRef, ChangeDetectionStrategy, signal, OnInit, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { PiloteService } from '../../services/pilotes/pilote.service';

@Component({
  selector: 'app-create-pilote',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create-pilote.component.html',
  styleUrl: './create-pilote.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePiloteComponent implements OnInit {
  @ViewChild('fullScreenElement',  { read: ElementRef }) fullScreenElement!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  fileName: string = ''
  isFullScreen = signal(false);
  vehicule = signal<any>({})
  formulaire: FormGroup;
 
  constructor( private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private route: ActivatedRoute, private piloteService: PiloteService,) {
    this.route.queryParams.subscribe(params => {
      if (params && params['data']) {
        this.vehicule.update((v) => v = JSON.parse(params['data']) );
        console.log(this.vehicule());
      }
    });
   
    this.formulaire = this.formBuilder.group({
      vehicleid: [this.vehicule().idwialon],
      name: [this.vehicule().name],
      // drivnm: [this.vehicule().drivnm],
      // photo: [''],
      sponsor: [this.vehicule().sponsor],
      marque: [this.vehicule().marques],
     
    });
  }

  ngOnInit(): void {
  }

  toggleFullScreen() {
    const element = this.fullScreenElement.nativeElement as HTMLElement
    this.isFullScreen.update((val) => val=true)
    element.requestFullscreen();
  }

  uploadFile() {
    this.fileInput.nativeElement.click();
  }

  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    if (files && files.length > 0) {
      this.fileName = files[0].name;
    }
  }

  create() {
    const formData = new FormData();

    formData.append('vehicleid', this.vehicule().idwialon);
    formData.append('name', this.formulaire.get('name')?.value);
    //formData.append('drivnm', this.formulaire.get('drivnm')?.value);
    formData.append('sponsor', this.formulaire.get('sponsor')?.value);
    formData.append('marque', this.formulaire.get('marque')?.value);
    
    const fileInput = this.fileInput.nativeElement as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      formData.append('photo', fileInput.files[0]);
    }

    this.piloteService.departOne(formData).subscribe(r => {
      this._snackBar.openFromComponent(SnackbarComponent, {
           horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 3000
      })
    })

  }
}
