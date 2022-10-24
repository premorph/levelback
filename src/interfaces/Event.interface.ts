import { Types } from "mongoose";
import { ITable } from "./table.interface";

export interface IEvent {
  name: string
  dateEvent:Date;
  image:string;
  tables:ITable[],
  author:Types.ObjectId;
}
