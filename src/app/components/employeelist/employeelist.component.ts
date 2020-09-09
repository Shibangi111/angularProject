import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import {Event} from 'src/app/Model/event';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  events: Event[] = [];

  constructor(private eventService: EventService) {

   }


  ngOnInit(): void {
    this.events= this.eventService.getEvents();
  }

  deleteEventfromService(e:Event)
  {
    
    this.eventService.deleteEvent(e);
  }

  addEvent(eventName: string, desc: string, speaker: string) {
    this.eventService.addEvent(eventName, desc, speaker);
  }

}
