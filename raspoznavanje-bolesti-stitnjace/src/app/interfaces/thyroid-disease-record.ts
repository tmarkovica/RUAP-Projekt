import { IterableChangeRecord } from "@angular/core";

export interface ThyroidDiseaseRecord {
    age: number;
    gender: string;
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
}
