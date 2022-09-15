import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  debounceTime,
  forkJoin,
  Observable,
  of,
} from 'rxjs';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  public cities$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public suggestionCities$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public Data$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public showAddress: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDataHttp();
    this.initializeForm();
  }

  getDataHttp() {
    //take the data from the two http requests
    forkJoin([this.http.getData(), this.http.getCities()]).subscribe(
      (data: any) => this.setValuesForkJoin(data)
    );
  }
  setValuesForkJoin(data: any) {
    //set the values of the two http requests
    this.cities$.next(data[1]);
    this.Data$.next(data[0]);
    const { name } = data[0].data.typesDocument.types[0];
    const { name: streetDefault } = data[0].data.streets.types[0];

    this.registerForm.patchValue({
      typeDocument: name,
      address: {
        street: streetDefault,
      },
    });
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      typeDocument: ['', Validators.required],
      document: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{1,10}'),
        ]),
      ],
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z ]{1,50}'),
        ]),
      ],
      phone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('3[0-9]{9}'),
        ]),
      ],
      city: ['', Validators.required],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        numberOne: ['', Validators.required],
        numberTwo: ['', Validators.required],
        complement: ['', Validators.required],
      }),
      optionalAddress: [''],
    });
  }

  register = () => this.loading();

  loading() {
    Swal.fire({
      title: 'Espere por favor...',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton: false,
      timer: 2000,
    }).then((result) => {
      if (
        result.dismiss === Swal.DismissReason.timer &&
        this.registerForm.valid
      ) {
        this.router.navigateByUrl('/dashboard/home');
      }
    });
  }
  selectDocumentType(document: any) {
    this.registerForm.patchValue({
      typeDocument: document.name,
    });
  }
  triggerAdress() {
    this.showAddress = !this.showAddress;
  }
  selectAddress(street: any) {
    this.registerForm.patchValue({
      address: {
        street: street.name,
      },
    });
    this.showAddress = false;
  }
  searchCity() {
    const query = this.registerForm.get('city')?.value;
    const cities = this.cities$.value;
    this.filterSuggestions(query, cities).pipe(debounceTime(500));
  }

  filterSuggestions(query: string, cities: any[]): Observable<any> {

    //filter the cities by the query
    query=query.toLowerCase();
    this.suggestionCities$.next(
      cities.filter(
        (city: any) =>
          city.departamento.toLowerCase().includes(query) ||
          city.municipio.toLowerCase().includes(query)
      )
    );
    return of(undefined);
  }

  selectCity(suggest: any) {
    this.registerForm.patchValue({
      city: suggest.municipio + ' - ' + suggest.departamento,
    });
    this.suggestionCities$.next([]);
  }
}
