import { PainModel } from './pain.model';

export interface BouffeModel {
  id: number;
  name: string;
  description: string;
  pains: Array<PainModel>;
  }

