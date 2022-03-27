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
  "https://ussouthcentral.services.azureml.net/workspaces/d6c2b3b4e01449b6ac051ea57fb49600/services/fe86aaa3f42f4e72b2b69a9f574210c3/execute?api-version=2.0&format=swagger";

  private apiKey = 'bLIElRwOveer5+kiHHU7PsLPuGslCoL5H0njuQ4qJalVJmPa3FQpFynJv0TOWZSOqP1/9DuKfimSU3vl/P1MoQ==';

  diagnosis: BehaviorSubject<string> = new BehaviorSubject<string>(null);


  send(thyroidData: ThyroidDiseaseRecord) {
    console.log(`thyroidData:`);
    console.log(thyroidData);
    
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
        console.log("Result: " + res.Results.output1[0]['Scored Labels']);
        this.setDiagnosis(res.Results.output1[0]['Scored Labels']);
      }
      else {
        console.log("Some error...");    
      }      
    });
  }

  private setDiagnosis(label: string) {
    var description: string = "";

    //hyperthyroid conditions
    if (label.includes("A"))
      description += "Hyperthyroid, ";

    if (label.includes("B"))
      description += "T3 toxic, ";

    if (label.includes("C"))
      description += "Toxic goitre, ";

    if (label.includes("D"))
      description += "Secondary toxic, ";

    //hypothyroid conditions:
    if (label.includes("E"))
      description += "hypothyroid, ";

    if (label.includes("F"))
      description += "primary hypothyroid, ";

    if (label.includes("G"))
      description += "compensated hypothyroid, ";

    if (label.includes("H"))
      description += "secondary hypothyroid, ";

    //binding protein
    if (label.includes("I"))
      description += "increased binding protein, ";

    if (label.includes("J"))
      description += "decreased binding protein, ";

    //general health
    if (label.includes("K"))
      description += "concurrent non-thyroidal illness, ";

    //replacement therapy
    if (label.includes("L"))
      description += "consistent with replacement therapy, ";

    if (label.includes("M"))
      description += "underreplaced, ";

    if (label.includes("N"))
      description += "overreplaced, ";

    //antithyroid treatment
    if (label.includes("O"))
      description += "antithyroid drugs, ";

    if (label.includes("P"))
      description += "I131 treatment, ";

    if (label.includes("Q"))
      description += "surgery, ";

    //miscellaneous
    if (label.includes("R"))
      description += "discordant assay results, ";

    if (label.includes("S"))
      description += "elevated TBG, ";

    if (label.includes("T"))
      description += "elevated thyroid hormones, ";

    // NO CONDITION
    if (label.includes("-"))
      description += "Healthy, ";

    this.diagnosis.next(description);
  }
}
