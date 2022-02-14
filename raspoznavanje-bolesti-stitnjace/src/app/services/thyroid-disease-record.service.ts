import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ThyroidDiseaseRecord } from '../interfaces/thyroid-disease-record';

@Injectable({
  providedIn: 'root'
})
export class ThyroidDiseaseRecordService {

  constructor(private http: HttpClient) {
    this.url = this.proxyUrl + this.url;
  }

  private proxyUrl: string = 
  "https://cors-anywhere.herokuapp.com/";

  private url: string = 
  "";

  private apiKey = '';

  weight: BehaviorSubject<string> = new BehaviorSubject<string>(null);


  send(thyroidData: ThyroidDiseaseRecord) {
    console.log(`customerData: ${thyroidData}`);
    console.log(thyroidData);
    var len = Object.keys(thyroidData).length;
    console.log(len.toString());
    let str: string = len.toString();
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.apiKey
      })
    };

    this.http.post(this.url, {
            "Inputs": {
              "input1":
              [
                {
                  'age': thyroidData.age,   
                  'gender': thyroidData.gender,   
                  'on_thyroxine': thyroidData.on_thyroxine,   
                  'query_on_thyroxine': thyroidData.query_on_thyroxine,   
                  'on_antithyroid_medication': thyroidData.on_antithyroid_medication,   
                  'sick': thyroidData.sick,   
                  'pregnant': thyroidData.pregnant,   
                  'thyroid_surgery': thyroidData.thyroid_surgery,   
                  'I131_treatment': thyroidData.I131_treatment,   
                  'query_hypothyroid': thyroidData.query_hypothyroid,   
                  'query_hyperthyroid': thyroidData.query_hyperthyroid,   
                  'lithium': thyroidData.lithium,   
                  'goitre': thyroidData.goitre,   
                  'tumor': thyroidData.tumor,   
                  'hypopituitary': thyroidData.hypopituitary,   
                  'psych': thyroidData.psych,
                  'TSH_measured': thyroidData.TSH_measured,
                  'TSH': thyroidData.TSH,
                  'T3_measured': thyroidData.T3_measured,
                  'T3': thyroidData.T3,
                  'TT4_measured': thyroidData.TT4_measured,
                  'TT4': thyroidData.TT4,
                  'T4U_measured': thyroidData.T4U_measured,
                  'T4U': thyroidData.T4U,
                  'FTI_measured': thyroidData.FTI_measured,
                  'FTI': thyroidData.FTI,
                  'TBG_measured': thyroidData.TBG_measured,
                  'TBG': thyroidData.TBG,
                  'diagnosis': thyroidData.diagnosis
                },                        
              ],
            },
        "GlobalParameters":  {
        }
      }, httpOptions).subscribe((res : {
        "Results": {
          "output1": [
              {
                  "Scored Labels": string
              }
          ]
      }
    }) => {
      if (res?.Results.output1.length === 1) {
        console.log(res);

        console.log("weight: ");
        
        console.log(res.Results.output1[0]['Scored Labels']);

        this.weight.next(res.Results.output1[0]['Scored Labels']);
      }
      else {
        console.log("Some error...");    
      }      
    });
  }
}
