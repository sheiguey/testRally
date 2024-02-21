import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountComponent {

}
