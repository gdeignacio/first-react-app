import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Mimodel extends Entity {
  @property({
    type: 'string',
  })
  name?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Mimodel>) {
    super(data);
  }
}

export interface MimodelRelations {
  // describe navigational properties here
}

export type MimodelWithRelations = Mimodel & MimodelRelations;
