import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Gibi } from 'src/app/models/gibi.model';
import { GibiService } from 'src/app/services/gibi/gibi.service';

@Component({
  selector: 'app-gibi-index',
  templateUrl: './gibi-index.component.html',
  styleUrls: ['./gibi-index.component.css']
})
export class GibiIndexComponent implements OnInit {

  gibis: Gibi[];

  searchId: string;
  searchTitulo: string;

  constructor( private router: Router, private gibiService: GibiService) { 
    this.gibis = new Array<Gibi>();
    this.searchId = "";
    this.searchTitulo = "";
  }

  ngOnInit(): void {
  }

  goToCreate(): void {
    this.router.navigateByUrl("gibi-create");
  }

  clearList(): void {
    this.gibis = [];
  }

  get(): void {
    this.clearList();

    if (this.searchId !== "") {
      const id: number = Number(this.searchId);
      this.getById(id);
      return;
    }

    if (this.searchTitulo !== "") {
      this.getByTitulo(this.searchTitulo);
      return;
    }

    this.getAll();
  }

  getById(id: number): void {
    this.gibiService.getById(id)
      .pipe(
        take(1)
      )
      .subscribe(data => {
        console.log(data);
        if (data != null)
          this.gibis.push(data);
      });
  }

  getByTitulo(titulo: string): void {
    this.gibiService.getByTitulo(titulo)
      .subscribe(gibis => {
        this.gibis = gibis;
      });
  }

  getAll(): void {
    this.gibiService.getAll()
    .subscribe(gibis => { 
      this.gibis = gibis;
    });
   }

  goToEdit(id: number): void {
    this.router.navigate(["gibi-edit", id]);
  }

  delete(id: number): void {
    this.gibiService.delete(id)
     .subscribe(() => {
       this.get();
     });
  }
}
