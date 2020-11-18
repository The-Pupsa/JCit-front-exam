import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {ReportsService} from '../../services/reports.service';
import {ReportOptions, IIndexing} from '../../types/reports.types';
import {Report} from '../../models/report';
import {ActivatedRoute, Params} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
    sub: Subscription;
    displayedColumns: string[] = [];
    columnsToDisplay: string[] = [];
    data: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator: MatPaginator;

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
                this.displayedColumns = this.columnsToDisplay = data.getColumnsList();
                this.data = new MatTableDataSource<any>(data.createDataSet());
                this.data.paginator = this.paginator;

            });
        });
    }
}
