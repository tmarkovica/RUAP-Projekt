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
    this.service.diagnosis.subscribe(val => {
      this.diagnosis = val;
    });
  }

  diagnosis: string;

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

  dataInputCheck(): boolean {
    return true;
  }

  buttonSend() {
    if (this.dataInputCheck()) {
      this.service.send(this.thyroidDiseaseRecord);
    }
    else {
      alert("Incorrect data, not able to send.");
    }      
  }

  c: number = 1;

  tempFill() {
    if (this.c==1) {
      this.thyroidDiseaseRecord.age = 32;
      this.thyroidDiseaseRecord.gender = "F";
      this.thyroidDiseaseRecord.on_thyroxine = false;
      this.thyroidDiseaseRecord.query_on_thyroxine = false;
      this.thyroidDiseaseRecord.on_antithyroid_medication = false;
      this.thyroidDiseaseRecord.sick = false;
      this.thyroidDiseaseRecord.pregnant = false;
      this.thyroidDiseaseRecord.thyroid_surgery = false;
      this.thyroidDiseaseRecord.I131_treatment = false;
      this.thyroidDiseaseRecord.query_hypothyroid = false;
      this.thyroidDiseaseRecord.query_hyperthyroid = false;
      this.thyroidDiseaseRecord.lithium = false;
      this.thyroidDiseaseRecord.goitre = false;
      this.thyroidDiseaseRecord.tumor = false;
      this.thyroidDiseaseRecord.psych = false;
      this.thyroidDiseaseRecord.TSH_measured = false;
      this.thyroidDiseaseRecord.TSH = 0;
      this.thyroidDiseaseRecord.T3_measured = false;
      this.thyroidDiseaseRecord.T3 = 0;
      this.thyroidDiseaseRecord.TT4_measured = false;
      this.thyroidDiseaseRecord.TT4 = 0;
      this.thyroidDiseaseRecord.T4U_measured = false;
      this.thyroidDiseaseRecord.T4U = 0;
      this.thyroidDiseaseRecord.FTI_measured = false;
      this.thyroidDiseaseRecord.FTI = 0;
      this.thyroidDiseaseRecord.TBG_measured = true;
      this.thyroidDiseaseRecord.TBG = 36;
      this.thyroidDiseaseRecord.diagnosis = "";
    }

    if (this.c==2) {
      this.thyroidDiseaseRecord.age = 27;
      this.thyroidDiseaseRecord.gender = "F";
      this.thyroidDiseaseRecord.on_thyroxine = true;
      this.thyroidDiseaseRecord.query_on_thyroxine = false;
      this.thyroidDiseaseRecord.on_antithyroid_medication = false;
      this.thyroidDiseaseRecord.sick = false;
      this.thyroidDiseaseRecord.pregnant = false;
      this.thyroidDiseaseRecord.thyroid_surgery = true;
      this.thyroidDiseaseRecord.I131_treatment = false;
      this.thyroidDiseaseRecord.query_hypothyroid = true;
      this.thyroidDiseaseRecord.query_hyperthyroid = false;
      this.thyroidDiseaseRecord.lithium = false;
      this.thyroidDiseaseRecord.goitre = false;
      this.thyroidDiseaseRecord.tumor = false;
      this.thyroidDiseaseRecord.psych = false;
      this.thyroidDiseaseRecord.TSH_measured = true;
      this.thyroidDiseaseRecord.TSH = 88;
      this.thyroidDiseaseRecord.T3_measured = true;
      this.thyroidDiseaseRecord.T3 = 0.9;
      this.thyroidDiseaseRecord.TT4_measured = true;
      this.thyroidDiseaseRecord.TT4 = 79;
      this.thyroidDiseaseRecord.T4U_measured = true;
      this.thyroidDiseaseRecord.T4U = 0.92;
      this.thyroidDiseaseRecord.FTI_measured = true;
      this.thyroidDiseaseRecord.FTI = 86;
      this.thyroidDiseaseRecord.TBG_measured = false;
      this.thyroidDiseaseRecord.TBG = 0;
      this.thyroidDiseaseRecord.diagnosis = "";
    }

    if (this.c>=3) {
      this.thyroidDiseaseRecord.age = 0;
      this.thyroidDiseaseRecord.gender = "";
      this.thyroidDiseaseRecord.on_thyroxine = false;
      this.thyroidDiseaseRecord.query_on_thyroxine = false;
      this.thyroidDiseaseRecord.on_antithyroid_medication = false;
      this.thyroidDiseaseRecord.sick = false;
      this.thyroidDiseaseRecord.pregnant = false;
      this.thyroidDiseaseRecord.thyroid_surgery = false;
      this.thyroidDiseaseRecord.I131_treatment = false;
      this.thyroidDiseaseRecord.query_hypothyroid = false;
      this.thyroidDiseaseRecord.query_hyperthyroid = false;
      this.thyroidDiseaseRecord.lithium = false;
      this.thyroidDiseaseRecord.goitre = false;
      this.thyroidDiseaseRecord.tumor = false;
      this.thyroidDiseaseRecord.psych = false;
      this.thyroidDiseaseRecord.TSH_measured = false;
      this.thyroidDiseaseRecord.TSH = 0;
      this.thyroidDiseaseRecord.T3_measured = false;
      this.thyroidDiseaseRecord.T3 = 0;
      this.thyroidDiseaseRecord.TT4_measured = false;
      this.thyroidDiseaseRecord.TT4 = 0;
      this.thyroidDiseaseRecord.T4U_measured = false;
      this.thyroidDiseaseRecord.T4U = 0;
      this.thyroidDiseaseRecord.FTI_measured = false;
      this.thyroidDiseaseRecord.FTI = 0;
      this.thyroidDiseaseRecord.TBG_measured = false;
      this.thyroidDiseaseRecord.TBG = 0;
      this.thyroidDiseaseRecord.diagnosis = "";
      this.c=0;
    }

    this.c++;
  }
}
