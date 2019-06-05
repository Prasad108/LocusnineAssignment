import { SaleDetails } from './SaleDetails';

export class SaleDetailsWrapper {
    constructor(
        public Items: SaleDetails[],
        public Count: number,
        public ScannedCount: number
    ) {}
}
