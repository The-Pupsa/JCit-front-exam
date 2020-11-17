import {Column} from '../types/reports.types';

import {
    assign as _assign,
} from 'lodash';

export class Report {
    public id: string;
    public title: string;
    public description?: string;

    private data: any[];
    private meta: {
        columns: Column[],
        total: {
            [key: string]: number
        }
    };

    constructor(data) {
        _assign(this, data);
    }
}
