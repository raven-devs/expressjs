import { EntryBase } from '../../entry/entry-base';

export interface Product extends EntryBase {
  name: string;
  serialNumber: string;
}
