import {Column, IIndexing} from '../types/reports.types';

import {
    assign as _assign,
    forEach as _forEach,
    isArray as _isArray,
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

    public createDataSet(): any[] {
        const dataSet = [];
        const columns = this.getColumnsList();

        if (!_isArray(this.data)) return dataSet;

        _forEach(this.data, dataRow => {
            const row = _assign({}, ...columns.map((keyName, index) => {
                return {[keyName]: dataRow[index]};
            }));
            dataSet.push(row);
        })

        return dataSet;
    }

    public getColumnsList(): string[] {
        return this.meta.columns.map((item: Column) => item.title);
    }

}
