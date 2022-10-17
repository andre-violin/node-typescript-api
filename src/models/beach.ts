import mongoose, { Document, Model, Schema } from 'mongoose';

export enum BeachPosition {
  S = 'S',
  E = 'E',
  W = 'W',
  N = 'N',
}

export interface Beach {
  _id?: string;
  name: string;
  position: BeachPosition;
  lat: number;
  lng: number;
  user: string;
}

const schema = new Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    toJSON: {
      transform: (_, ret): void => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export const Beach = mongoose.model<Beach, Model<Beach>>('Beach', schema);
