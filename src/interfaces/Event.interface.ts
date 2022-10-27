import { Types } from "mongoose";

export interface IEvent {
  name     ? : string
  dateEvent? :Date;
  mediaID  ? :Types.ObjectId;
  author   ? :Types.ObjectId;
  _id      ? :Types.ObjectId
}
