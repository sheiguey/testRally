import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, catchError,throwError, concat, toArray, map } from 'rxjs';
import { NewDataFinal } from '../../models/input';
import { IDriver } from '../../models/pilote';

@Injectable({
  providedIn: 'root'
})
export class PiloteService {
  dataSourceFinal1 = signal<NewDataFinal[]>([])
  dataSourceFinal2 = signal<NewDataFinal[]>([])
  resSpecial1 = signal<NewDataFinal[]>([])
  resSpecial2 = signal<NewDataFinal[]>([])
  resSpecial3 = signal<NewDataFinal[]>([])
  resSpecial4 = signal<NewDataFinal[]>([])

  constructor(private http: HttpClient) { }

  listPilote(): Observable<IDriver[]> {
    return this.http.get<IDriver[]>('listvehicles')
  }

  departOne(dep: any): Observable<any> {
    const head = {
      headers: new HttpHeaders({ 
        "Content-Type": "multipart/form-data",
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive"
      })
    }
    return this.http.post('updateinfosvehicle', dep)
  }

  listSpeciales(): Observable<any> {
    return this.http.get('listspeciales')
  }

  listConcat(): Observable<any> {
    return concat(
      this.http.get('listvehicles'),
      this.http.get('listspeciales')
    ).pipe(
      catchError((error : any ) => {
        // Handle the error here
      console.error('Error man:', error);
      // Optionally, re-throw the error or return a default value
      return throwError('Something went wrong');
      }),
      toArray(),
      map(r => ({
        'vehicule': r[0],
        'resultat': r[1]
      }))
    )
  }

  resultatSpeciale() {
    this.listConcat().pipe(
      map(r => {
        let newData1: NewDataFinal[] = []
        let newData2: NewDataFinal[] = []
        let newD1: NewDataFinal[] = []
        let newD2: NewDataFinal[] = []
        let newD3: NewDataFinal[] = []
        let newD4: NewDataFinal[] = []

        /* Resultat final 1 */
        r.vehicule.map((v: any)=> {
          r.resultat['SPECIALE 1'].map((r: any) => {
            if (v.idwialon === r.vehicleid) {
              console.log('speciale 1', r)
              console.log('vehicule 1', v)

              newData1.push({ 
                ranking: r.ranking,
                name: v.name,
                drivnm: v.drivnm,
                photo: v.photo,
                marque: v.marques,
                vehicule: v.models,
                totalKilometrage: '',
                hourTotal: r.duree,
                sponsor: v.sponsor
               });
  
              newData1.sort((a: any, b: any) => a.ranking - b.ranking);
              this.dataSourceFinal1.update(v => v=newData1)
            }
          })
        })

        /* Resultat final 2 */
        r.vehicule.map((v: any) => {
          r.resultat['SPECIALE 2'].map((r: any) => {
            if (v.idwialon === r.vehicleid) {
              newData2.push({ 
                ranking: r.ranking,
                drivnm: v.drivnm,
                name: v.name,
                photo: v.photo,
                marque: v.marques,
                vehicule: v.models,
                totalKilometrage: '',
                hourTotal: r.duree,
                sponsor: v.sponsor
              });
  
              newData2.sort((a: any, b: any) => a.ranking - b.ranking);
              this.dataSourceFinal2.update(v => v=newData2)
            }
          })
        })

        /* Resultat speciale 1 */
        r.vehicule.map((v:any) => {
          r.resultat['SPECIALE 1 ARRIVEE 1'].map((r: any)=> {
            if (v.idwialon === r.vehicleid) {
              newD1.push({
                ranking: r.ranking,
                drivnm: v.drivnm,
                photo: v.photo,
                name: v.name,
                marque: v.marques,
                vehicule: v.models,
                totalKilometrage: '',
                hourTotal: r.duree,
                sponsor: v.sponsor
              })
              newD1.sort((a: any, b:any) => a.ranking - b.ranking)
              this.resSpecial1.update((v) => v = newD1)
            }
          })
        })
        /* Resultat speciale 2 */
        r.vehicule.map((v: any) => {
          r.resultat['SPECIALE 1 ARRIVEE 2'].map((r: any) => {
            if (v.idwialon === r.vehicleid) {
              newD2.push({
                ranking: r.ranking,
                drivnm: v.drivnm,
                photo: v.photo,
                name: v.name,
                marque: v.marques,
                vehicule: v.models,
                totalKilometrage: '',
                hourTotal: r.duree,
                sponsor: v.sponsor
              })
              newD2.sort((a: any, b:any) => a.ranking - b.ranking)
              this.resSpecial2.update((v) => v = newD2)
            }
          })
        })

        /* Resultat speciale 3 */
        r.vehicule.map((v: any) => {
          r.resultat['SPECIALE 2 ARRIVEE 1'].map((r: any) => {
            if (v.idwialon === r.vehicleid) {
              newD3.push({
                ranking: r.ranking,
                drivnm: v.drivnm,
                name: v.name,
                photo: v.photo,
                marque: v.marques,
                vehicule: v.models,
                totalKilometrage: '',
                hourTotal: r.duree,
                sponsor: v.sponsor
              })
              newD3.sort((a: any, b:any) => a.ranking - b.ranking)
              this.resSpecial3.update((v) => v = newD3)
            }
          })
        })

        /* Resultat speciale 4 */
        r.vehicule.map((v: any) => {
          r.resultat['SPECIALE 2 ARRIVEE 2'].map((r: any) => {
            if (v.idwialon === r.vehicleid) {
              newD4.push({
                ranking: r.ranking,
                drivnm: v.drivnm,
                name: v.name,
                photo: v.photo,
                marque: v.marques,
                vehicule: v.models,
                totalKilometrage: '',
                hourTotal: r.duree,
                sponsor: v.sponsor
              })
              newD4.sort((a: any, b:any) => a.ranking - b.ranking)
              this.resSpecial4.update((v) => v = newD4)
            }
          })
        })

      })
    ).subscribe()
  }
}
