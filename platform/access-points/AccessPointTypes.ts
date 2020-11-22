import { Alignment } from "../../models/ModelTypes";

export interface AccessPointProps {
    type:string;
    x: number;
    y: number;
    width: number;
    height: number;
    apAlign: Alignment;
    accessDirection: number;
}