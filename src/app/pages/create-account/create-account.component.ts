import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { HostListener } from "@angular/core";
import { NgwWowService } from 'ngx-wow';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit, AfterViewInit {

  tag: boolean = false;
  width: string = '55';
  mensaje!: string;
  err: boolean = false;
  forma: FormGroup;
  @ViewChild('number_identify', {static: false}) number_identify!: ElementRef;

  constructor(
    public dialog: MatDialog, 
    private wowService: NgwWowService,
    private el: ElementRef
  ){

    this.forma = new FormGroup({
      identify: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });

    this.wowService.init(); 
    if(window.innerWidth > 1020){
      this.width = '55';
    }else if(window.innerWidth <= 1019){
      this.width = '100';
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // generamos un observable, para setear el campo cuando intente escribir numeros negativos
    let obs = fromEvent(this.number_identify.nativeElement, 'keyup')
    .pipe (
      // extraemos el valor del input
      map((e:any) => e.target.value),
      // filtramos solo los numeros
      filter( (valor: string) =>  this.esNumero( valor) ),
      // esperamos 250 ms
      debounceTime(250),
      // seteamos el valor de err
      tap(() => this.err = false),
    )
    .subscribe()

  }

  esNumero(valor: any){
    // verificamos si valor es solo numeros
    if(!valor.replace(/[^0-9]/g, "")){
      this.err = true;
      this.mensaje = 'Solo se aceptan números'
      this.forma.setValue({identify: ''});
    }
    return valor
  }

  openDialog(): void {
    this.dialog.open(ModalComponent, { width: '350px',});
  }

  @HostListener('window:resize', ['$event'])
  public changeImg( $event: Event){
    const widthWindow = window.innerWidth;
    if ( widthWindow > 1020 ) {
      this.width = '55';
    }else if ( widthWindow <= 1019 ) {
      this.width = '100';
    }
  }

  public getErrorMessage(campo: string) {
    return this.forma.controls[campo].errors && this.forma.controls[campo].touched;
  }
 

}
