import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportComponent} from './components/report/report.component';
import {ReportsComponent} from './components/reports/reports.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material-module';

@NgModule({
    declarations: [
        ReportComponent,
        ReportsComponent],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule.forChild([
            {
                path: '', component: ReportsComponent, children: [
                    {path: ':id', component: ReportComponent}
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class ReportsModule {
}
