import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ContactFormMessage } from '../model/marketingMessages';
import { Bookings } from '../../bookings/model/bookings/bookings';
import { ServiceCost } from '../../bookings/model/bookings/bookings';


import { FirebaseConfigService } from '../../../core/services/firebase-config.service';


@Injectable()
export class MarketingService { 

// user: Observable<firebase.User>;
    email: string;
    password:string;
    errorMessage: string;

    constructor(private fire: FirebaseConfigService /*, public afAuth: AngularFireAuth*/) { 
        // this.user = afAuth.authState;
     
    }

    public servicesDbRef = this.fire.database.ref().child('/services');
    public customersDbRef = this.fire.database.ref().child('/users');
    public barbersDBRef = this.fire.database.ref().child('/barbers').child('/barbers');
    public messagesRef = this.fire.database.ref().child('/messages');
    public auth = this.fire._firebaseAuthRef;

   grabUsersArray():Observable<any> {
         return Observable.create(obs => {
            
                this.messagesRef.on('child_added', staff => {
                        const newStaff = staff.val() as ContactFormMessage;
                        newStaff.id = Number(staff.key);
                            obs.next(newStaff);
                            console.log("juice");
                            
                },
                err => {
                    obs.throw(err);
                }
            );
        });
    }

   changedListener(): Observable<any> {
        return Observable.create(obs => {
            this.messagesRef.on('child_changed', upDatedStaff => {
                const updatedStaffDetails = upDatedStaff.val() as ContactFormMessage;
                updatedStaffDetails.id = Number(upDatedStaff.key);
                obs.next(updatedStaffDetails);
            },
            err => {
                obs.throw(err);
            });
        });
    }

    //   addBooking(customer: Staff) {
    //     const newBugRef = this.staffRef.push();
    //     newBugRef.set({
                
    //     })
    //     .catch(err => console.error("Unable to add bug to Firebase - ", err));
    // }


 newMessage() {
        // const bookingRef = this.staffRef.child(staffMember).child("dates").child(date).child("times").child(time);
        // console.log(user.id);
        // user.id = null;
        // bookingRef.set({
            // booked: paid,
            // customer: customerName,
            // service: serviceSelected,
            // id: customerEmail,
            // time: "10:30am"
        // });
    }

// getServiceCost():Observable<any> {

//     return Observable.create(obs => {
//         this.servicesDbRef.on('child_added', serviceCost => {
//             const newService = serviceCost.val() as ServiceCost;
//             newService.name = serviceCost.key;
//                 obs.next(newService);
//                 // console.log(newService);
//         })
//     })
// }



// getBookings(user: Staff, date: string){
//     // var bookingsRef = this.customersRef.child(user.id).child("bookingsMissed")

//      return Observable.create(obs => {
            
//                 this.staffRef.child(user.id).child("dates").child(date).child("times").on('child_added', customer => {
//                         const newBooking = customer.val() as Bookings;
//                         newBooking.key = customer.key;
//                             obs.next(newBooking);
                           
                            
//                 },
                
//                 err => {
//                     obs.throw(err);
//                 }
//             );
//         });

// }

}