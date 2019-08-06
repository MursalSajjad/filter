import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
    export class AppComponent implements OnInit{
    public search:any = '';
    locked: any[] = [];

    constructor(){}

    ngOnInit(){
        this.locked = [
            {
                name: 'Shahid',
                ClassRoom: '4',
                urdu : "urdu",
                umarks : 55,
                english : "english",
                emarks : 10
               }, {
                name: 'Ramazan',
                ClassRoom: '3',
                urdu : "urdu",
                umarks : 50,
                english : "english",
                emarks : 90
               },
               {
                name: 'Shahid',
                ClassRoom: '4',
                urdu : "urdu",
                umarks : 45,
                english : "english",
                emarks : 50
               }, {
                name: 'Saad',
                ClassRoom: '5',
                urdu : "urdu",
                umarks : 20,
                english : "english",
                emarks : 80
               },
               {
                name: 'Ramazan',
                ClassRoom: '3',
                urdu : "urdu",
                umarks : 89
               }, {
                name: 'shabeer',
                ClassRoom: '4',
                urdu : "urdu",
                umarks : 35,
                english : "english",
                emarks : 30
               },
               {
                name: 'aqib',
                ClassRoom: '5',
                urdu : "urdu",
                umarks : 75,
                english : "english",
                emarks : 70
               }, {
                name: 'ubaid',
                ClassRoom: '3',
                urdu : "urdu",
                umarks : 95,
                english : "english",
                emarks : 40
               },
               {
                name: 'faheem',
                ClassRoom: '4',
                urdu : "urdu",
                umarks : 25,
                english : "english",
                emarks : 39
               }, {
                name: 'ubaid',
                ClassRoom: '3',
                urdu : "urdu",
                umarks : 15,
                english : "english",
                emarks : 36
               },
               {
                name: 'waseem',
                ClassRoom: '4',
                urdu : "urdu",
                umarks : 5,
                english : "english",
                emarks : 36
               }, 
               {
                name: 'javid',
                ClassRoom: '4',
                urdu : "urdu",
                umarks : 55,
                english: "english",
                emarks: 66
               },
            
        ]
    }
}