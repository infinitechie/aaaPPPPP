import {Component,Input, OnInit,AfterViewInit,trigger,state,style,transition,animate,keyframes,ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RosterService } from './service/roster.service';

import { RosterDates, hourShifts } from './model/rosterDates';

import {StaffService} from '../staff/service/staff.service';

import { Observable } from 'rxjs/Observable';

import { Staff } from '../staff/model/staff';

import {SelectItem} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';


@Component({
    moduleId: module.id,
    selector: 'roster-cmp',
    templateUrl: 'roster.component.html',
    styleUrls: ['roster.component.css'],
    animations: [
        trigger('cardnotifications', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1})),
                transition('void => *', [
                    style({opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform':'translate3D(0px, 150px, 0px)',
                        transform:'translate3D(0px, 150px, 0px)',
                    }),
                    animate('0.3s 0s ease-out')
                ])
        ])
    ]
})

export class RosterComponent implements OnInit {

    // service: string;

    // servicesArray: RosterDates[] = [];

    // filteredServicesSingle: RosterDates[] = [];

    cities: SelectItem[];

    selectedCities: string[];

     events: any[] = [];

     array: [any];
    
    header: any;
    
    event: any;
    
    dialogVisible: boolean = false;
    
    idGen: number = 100;

    public date = new Date().toDateString();
    

    constructor(private rosterService: RosterService, private cd: ChangeDetectorRef, private staffService: StaffService) { }

    ngOnInit() {

        // this.funcss();

        this.grabCustomers();
        this.getHours();

        // this.cities = [];
        // this.cities.push({label:'New York', value:'New York'});
        // this.cities.push({label:'Rome', value:'Rome'});
        // this.cities.push({label:'London', value:'London'});
        // this.cities.push({label:'Istanbul', value:'Istanbul'});
        // this.cities.push({label:'Paris', value:'Paris'});

        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.getElementById('title')

        var currentDate = new Date()
        var day = currentDate.getDate()
        var month = currentDate.getMonth() + 1
        var year = currentDate.getFullYear()
        this.date = year+ "-" + month + "-" + day;

        console.log(this.date);

        this.header = {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		};
        this.getUser();
        // this.getUser();
            // {
            //     "title": "All Day Event",
            //     "start": "2017-22-05"
            // },
            // {
            //     "title": "Paul Mercer",
            //     "start": "2017-05-24",
            //     "end": "2017-05-27"
            // },
            // {
            //     "title": "Repeating Event",
            //     "start": "2017-05-09T16:00:00"
            // },
            // {
            //     "title": "Repeating Event",
            //     "start": "2017-05-16T16:00:00"
            // },
            // {
            //     "title": "Conference",
            //     "start": "2017-05-11",
            //     "end": "2017-05-13"
            // }
       
    }

    

// @Input() public suggestions: SelectItem[];
// @Input() public reportCardYearItems: SelectItem[];
results: string[];

    country: string;
    
    countries: Staff[] = [];
        
    filteredCountriesSingle: Staff[] = [];

    staffArray: Staff[]=[];

     grabCustomers(){
         this.staffService.grabUsersArray()
            .subscribe(countries => {
            console.log(countries.name);
            this.countries.push(countries);
            console.log(this.countries);


        },
        err => {
            console.error("unable to add bug -", err);
        });

    }

     filterCountrySingle(event) {
        console.log(event);
        let query = event.query;  
        this.results = [];
        
        this.filteredCountriesSingle = this.filterCountry(query, this.countries);
        // this.onChange(event);

    }

  


     filterCountry(query, countries: any[]):any[] {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered : any[] = [];
        for(let i = 0; i < countries.length; i++) {
            let country = countries[i];
            if(country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country.name);
                // console.log(countries[i]);
                // this.onChange(countries[i]);
            }
            
            
        }
        return filtered;
        
    }


    getStaff(){
         this.staffArray = []
    this.staffService.grabUsersArray()
        .subscribe(staff => {
            console.log(staff);
            // this.grabImageUrl(staff);
            this.staffArray.push(staff);
            console.log(this.staffArray);
            

        },
        err => {
            console.error("unable to add bug -", err);
        });

    }


    hours: any[] = [];
    filteredNCountriesSingle: hourShifts[] = [];

    getHours(){
        this.rosterService.grabHoursArray()
         .subscribe(rosterDate => {
            console.log(rosterDate);
            
            this.hours.push(rosterDate);

            

        },
        err => {
            console.error("unable to add bug -", err);
        });
    }

      filterNCountrySingle(event) {
        console.log(event);
        let query = event.query;  
        this.results = [];
        
        this.filteredNCountriesSingle = this.filterNCountry(query, this.hours);
    }


     filterNCountry(query, countries: any[]):any[] {
        let filtered : any[] = [];
        for(let i = 0; i < countries.length; i++) {
            let country = countries[i];
            if(country.time.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country.time);
                // this.onNChange(countries[i]);
            }
        }
        return filtered;
    }

    getUser(){
    // this.events = null
    this.rosterService.grabUsersArray()
        .subscribe(rosterDate => {
            console.log(rosterDate);
            
            this.events.push(rosterDate);

            

        },
        err => {
            console.error("unable to add bug -", err);
        });
    }

      handleDayClick(event) {
        this.event = new RosterDates();
        this.event.start = event.date.format();
        // console.log(this.event.start);
        this.dialogVisible = true;
        
        //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
        this.cd.detectChanges();
    }
    
    handleEventClick(e) {
        this.event = new RosterDates();
        this.event.title = e.calEvent.title;
        this.event.hours = e.calEvent.hours;
        
        let start = e.calEvent.start;
        let end = e.calEvent.end;
        if(e.view.name === 'month') {
            start.stripTime();
        }
        
        if(end) {
            end.stripTime();
            this.event.end = end.format();
        }

        this.event.id = e.calEvent.id;
        this.event.start = start.format();
        
        this.event.allDay = e.calEvent.allDay;
        this.dialogVisible = true;
        console.log(this.event);
        // console.log(this.event.start);
        // console.log(this.event.allDay);
        
        // console.log(this.event.title);
        // console.log(end._i);
    }
    
    saveEvent() {
        console.log(this.event);
        //update
        if(this.event.id) {
            let index: number = this.findEventIndexById(this.event.id);
            
            console.log(this.event.id);

            //  this.rosterService.rosterDatesRef.child(this.event.id).update({
            //     title: this.event.title,
            //     start: this.event.start, 
            //     end: this.event.end,
            //     id: randomUid
            // })


            if(index >= 0) {
                this.events[index] = this.event;

                
            }
        }
        //new
        else {
            this.event.id = this.idGen++;
            // this.events.push(this.event);
            var self = this;
            var randomUid = Math.random().toString(36).substring(7);
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.rosterService.rosterDatesRef.child(randomUid).update({
                title: this.event.title,
                start: this.event.start, 
                end: this.event.end,
                id: randomUid,
                hours: this.event.hours,
                backgroundColor: "#" + randomColor
            })
            console.log(this.event);
            this.event = null;
        }
        
        this.dialogVisible = false;
    }
    
    deleteEvent() {
        let index: number = this.findEventIndexById(this.event.id);
        if(index >= 0) {
            this.events.splice(index, 1);
            this.rosterService.rosterDatesRef.child(this.event.id).remove();
        }
        this.dialogVisible = false;
    }
    
    findEventIndexById(id: number) {
        let index = -1;
        for(let i = 0; i < this.events.length; i++) {
            if(id == this.events[i].id) {
                index = i;
                break;
            }
        }
        
        return index;
    }
}

    








  

 
