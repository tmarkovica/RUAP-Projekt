import { IterableChangeRecord } from "@angular/core";

export interface ThyroidDiseaseRecord {
    age: number;
    gender: string;
    on_thyroxine: string;
    query_on_thyroxine: string;
    on_antithyroid_medication: string;
    sick: string;
    pregnant: string;
    thyroid_surgery: string;
    I131_treatment: string;
    query_hypothyroid: string;
    query_hyperthyroid: string;
    lithium: string;
    goitre: string;
    tumor: string;
    hypopituitary: string;
    psych: string;
    TSH_measured: string;
    TSH: number;
    T3_measured: string;
    T3: number;
    TT4_measured: string;
    TT4: number;
    T4U_measured: string;
    T4U: number;
    FTI_measured: string;
    FTI: number;
    TBG_measured: string;
    TBG: number;
    diagnosis: string;
}
