import { Component } from '@angular/core';
import { DebugService } from '../expense-entry-list/debug.service';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent {
  constructor(private debugService: DebugService) { } 
   ngOnInit() { 
      this.debugService.info("Debug component gets service from Parent"); 
   } 

}
