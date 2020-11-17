import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ReportOptions} from '../types/reports.types';
import {Report} from '../models/report';
import {dataReport, dataReports} from '../mock';

import {
    forEach as _forEach,
} from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class ReportsService {

    constructor() {
    }

    public getReportsList(): Observable<Report[]> {
        const data$: Observable<Report[]> = new Observable(observer => {
            setTimeout(() => {
                const reports: Report[] = [];

                // fake data
                const data = dataReports;

                _forEach(data, (report) => {
                    reports.push(new Report(report));
                });

                observer.next(reports);

            }, 1000);
        });
        return data$;
    }

    public getReportData(options: ReportOptions): Observable<any> {
        const data$ = new Observable(observer => {
            setTimeout(() => {
                let data: Report;

                // fake data
                if (options.id === 'key_1') {
                    data = new Report(dataReport);
                } else {
                    throw new Error('no available data');
                }
                observer.next(data);
            }, 1000);
        });
        return data$;
    }

}
