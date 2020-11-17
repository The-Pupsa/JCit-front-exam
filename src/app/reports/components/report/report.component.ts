import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ReportsService} from '../../services/reports.service';
import {ReportOptions} from '../../types/reports.types';
import {Report} from '../../models/report';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
    sub: Subscription;

    constructor(
        private reportsService: ReportsService,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            const options: ReportOptions = {
                id: params.id
            };

            this.sub = this.reportsService.getReportData(options).subscribe((data: Report) => {
                console.warn(data);
            });

        });
    }

}
