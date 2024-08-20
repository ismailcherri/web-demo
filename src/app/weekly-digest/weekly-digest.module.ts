import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '@app/shared';
import { WeeklyDigestComponent } from './weekly-digest.component';
import { WeeklyDigestRoutingModule } from './weekly-digest-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [WeeklyDigestComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    ToastModule,
    WeeklyDigestRoutingModule],
})
export class WeeklyDigestModule {}
