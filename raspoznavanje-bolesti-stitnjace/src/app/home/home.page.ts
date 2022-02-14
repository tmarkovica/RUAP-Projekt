import { Component } from '@angular/core';
import { ThyroidDiseaseRecordService } from '../services/thyroid-disease-record.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private service: ThyroidDiseaseRecordService) {}

  ngOnInit() {

  }

  age: number;
  gender: string[] = ["M","F"];
  on_thyroxine: string[] = ["f","t"];
  query_on_thyroxine: string[] = ["f","t"];
  on_antithyroid_medication: string[] = ["f","t"];
  sick: string[] = ["f","t"];
  pregnant: string[] = ["f","t"];
  thyroid_surgery: string[] = ["f","t"];
  I131_treatment: string[] = ["f","t"];
  query_hypothyroid: string[] = ["f","t"];
  query_hyperthyroid: string[] = ["f","t"];
  lithium: string[] = ["f","t"];
  goitre: string[] = ["f","t"];
  tumor: string[] = ["f","t"];
  hypopituitary: string[] = ["f","t"];
  psych: string[] = ["f","t"];
  TSH_measured: string[] = ["f","t"];
  TSH: number;
  T3_measured: string[] = ["f","t"];
  T3: number;
  TT4_measured: string[] = ["f","t"];
  TT4: number;
  T4U_measured: string[] = ["f","t"];
  T4U: number;
  FTI_measured: string[] = ["f","t"];
  FTI: number;
  TBG_measured: string[] = ["f","t"];
  TBG: number;
  diagnosis: string;

}
