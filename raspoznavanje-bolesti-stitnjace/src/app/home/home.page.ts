import { Component } from '@angular/core';
import { ThyroidDiseaseRecord } from '../interfaces/thyroid-disease-record';
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
  on_thyroxine: boolean;
  query_on_thyroxine: boolean;
  on_antithyroid_medication: boolean;
  sick: boolean;
  pregnant: boolean;
  thyroid_surgery: boolean;
  I131_treatment: boolean;
  query_hypothyroid: boolean;
  query_hyperthyroid: boolean;
  lithium: boolean;
  goitre: boolean;
  tumor: boolean;
  hypopituitary: boolean;
  psych: boolean;
  TSH_measured: boolean;
  TSH: number;
  T3_measured: boolean;
  T3: number;
  TT4_measured: boolean;
  TT4: number;
  T4U_measured: boolean;
  T4U: number;
  FTI_measured: boolean;
  FTI: number;
  TBG_measured: boolean;
  TBG: number;
  diagnosis: string;

  thyroidDiseaseRecord: ThyroidDiseaseRecord = { 
    age : 0,
    gender :  "",
    on_thyroxine :  false,
    query_on_thyroxine :  false,
    on_antithyroid_medication :  false,
    sick :  false,
    pregnant :  false,
    thyroid_surgery :  false,
    I131_treatment :  false,
    query_hypothyroid :  false,
    query_hyperthyroid :  false,
    lithium :  false,
    goitre :  false,
    tumor :  false,
    hypopituitary :  false,
    psych :  false,
    TSH_measured :  false,
    TSH : 0,
    T3_measured :  false,
    T3 : 0,
    TT4_measured :  false,
    TT4 : 0,
    T4U_measured :  false,
    T4U : 0,
    FTI_measured :  false,
    FTI : 0,
    TBG_measured :  false,
    TBG : 0,
    diagnosis :  ""
  }
}
