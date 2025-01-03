import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonthlyTaskComponentComponent } from './monthly-task-component/monthly-task-component.component';
import { LoremContentComponent } from './lorem-content/lorem-content.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MonthlyTaskComponentComponent,
    LoremContentComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-project';
  taskList = [
    {
      id: 1,
      name: 'November',
      tasks: [
        {
          id: 1,
          date: '15-11-2024',
          topicLearned: 'Started Angular',
          taskAssigned: 'Create New Project',
          remarks: 'Learn with interest',
        },
        {
          id: 2,
          date: '18-11-2024',
          topicLearned: 'to be announced',
          taskAssigned: 'to be assigned',
          remarks: 'to be announced',
        },
        {
          id: 2,
          date: '19-11-2024',
          topicLearned: 'to be announced',
          taskAssigned: 'to be assigned',
          remarks: 'to be announced',
        },
        {
          id: 2,
          date: '20-11-2024',
          topicLearned: 'to be announced',
          taskAssigned: 'to be assigned',
          remarks: 'to be announced',
        },
      ],
    },
    {
      id: 2,
      name: 'December',
      tasks: [
        {
          id: 1,
          date: 'to be announced',
          topicLearned: 'to be announced',
          taskAssigned: 'to be announced',
          remarks: 'to be announced',
        },
        {
          id: 2,
          date: 'to be announced',
          topicLearned: 'to be announced',
          taskAssigned: 'to be assigned',
          remarks: 'to be announced',
        },
        {
          id: 2,
          date: 'to be announced',
          topicLearned: 'to be announced',
          taskAssigned: 'to be assigned',
          remarks: 'to be announced',
        },
        {
          id: 2,
          date: 'to be announced',
          topicLearned: 'to be announced',
          taskAssigned: 'to be assigned',
          remarks: 'to be announced',
        },
      ],
    },
  ];
}
