import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MonthlyTaskComponentComponent } from './monthly-task-component/monthly-task-component.component';
import { LoremContentComponent } from './lorem-content/lorem-content.component';

export const routes: Routes = [
  { path: 'tasks', component: MonthlyTaskComponentComponent },
  { path: 'lorem', component: LoremContentComponent },
];
