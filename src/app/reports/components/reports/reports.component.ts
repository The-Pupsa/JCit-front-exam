import {Component, OnInit} from '@angular/core';
import {ReportsService} from '../../services/reports.service';
import {Subscription} from 'rxjs';
import {Report} from '../../models/report';

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

    sub: Subscription;
    reports: Report[];

    constructor(
        private reportsService: ReportsService,
    ) {
        this.sub = reportsService.getReportsList().subscribe(data => {
            this.reports = data;
        });
    }

    ngOnInit() {
    }

}
