import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-monthly-task-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monthly-task-component.component.html',
  styleUrl: './monthly-task-component.component.css',
})
export class MonthlyTaskComponentComponent {
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
