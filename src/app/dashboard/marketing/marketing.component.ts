import { Component,OnInit, state,style,animate,transition, trigger, keyframes } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { ContactFormMessage } from './model/marketingMessages';
import 'rxjs/add/operator/toPromise';

import { MarketingService } from './service/marketing.service';

import {Jsonp} from '@angular/http';
@Component({
    moduleId: module.id,
    selector: 'marketing-cmp',
    styleUrls: ['marketing.component.css'],
    templateUrl: 'marketing.component.html',
    animations: [
        trigger('carduserprofile', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1
            })),
            transition('void => *', [
                style({opacity: 0,
                    '-ms-transform': 'translate3D(0px, 150px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                    '-moz-transform': 'translate3D(0px, 150px, 0px)',
                    '-o-transform':'translate3D(0px, 150px, 0px)',
                    transform:'translate3D(0px, 150px, 0px)',
                }),
                animate('0.3s 0s ease-out'),
            ])
        ]),
        trigger('cardprofile', [
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
                    animate('0.3s 0.25s ease-out')
                ])
            ])
        ]
    })

    export class MarketingComponent implements OnInit {
        

  constructor(private http: Http, private _jsonp: Jsonp, private marketingSVC: MarketingService) { }

  public messagesArray: ContactFormMessage[] = [];

  ngOnInit(){
    this.getMessages();
  }

  sendEmail() {

    let url = `https://us-central1-frontendbarber.cloudfunctions.net/httpEmail`
    // https://frontendbarber.firebaseapp.com/home
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

    params.set('to', 'user@example.com');
    params.set('from', 'you@yoursupercoolapp.com');
    params.set('subject', 'test-email');
    params.set('content', 'Hello World');

    return this.http.post(url, params, headers)
                    .toPromise()
                    .then( res => {
                      console.log(res)
                    })
                    .catch(err => {
                      console.log(err)
                    })


  }

getMessages(){
     var self = this;
         this.marketingSVC.grabUsersArray()
        .subscribe(message => {
            // self.arr = [];
            // console.log(service);
            // console.log(service.barbers);
            // self.setBarbersNames(service.barbers);
            console.log("DDDDDDDD")
            // service.barbers = self.arr;
            
            // console.log(service.barbers);
            // console.log(service.barbers);
            
            self.messagesArray.push(message);
            // service.barbers = [];

            
           

        },
        err => {
            console.error("unable to add bug -", err);
        });
        
}

}
