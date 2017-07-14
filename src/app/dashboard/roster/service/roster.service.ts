import {Injectable} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { RosterDates, hourShifts } from '../model/rosterDates';


import { FirebaseConfigService } from '../../../core/services/firebase-config.service';



@Injectable()
export class RosterService {
    
    constructor(private fire: FirebaseConfigService) { }

    public rosterDatesRef = this.fire.database.ref().child('/rosterDates');
    public rosterHoursRef = this.fire.database.ref().child('/hourShifts');

  grabUsersArray():Observable<any> {
         
         return Observable.create(obs => {
            
                this.rosterDatesRef.on('child_added', rosterDate => {
                    
                        var dates = rosterDate.val() as RosterDates;
                        // dates.id = rosterDate.val().key
                            var arrayOfDicts = {"title": dates.title, "start": dates.start, "end": dates.end, "hours":dates.hours, "backgroundColor" : dates.backgroundColor,"id": dates.id};

                            
                            
                            obs.next(arrayOfDicts);
                            

                },
                err => {
                    obs.throw(err);
                }
            );
        });
    }


grabHoursArray():Observable<any> {
    
    return Observable.create(obs => {
    
               this.rosterHoursRef.on('child_added', transaction => {
                        const newTransaction = transaction.val() as hourShifts;
                        newTransaction.id = transaction.key;
                            obs.next(newTransaction);
                            console.log("juice");
                            
                },
                err => {
                    obs.throw(err);
                }
            );
        });
    }



  
}
