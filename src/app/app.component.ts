import { getLocaleDateTimeFormat, getLocaleTimeFormat } from '@angular/common';
import { Component } from '@angular/core';


@Component({
    template: "<h1>{{func()}}</h1><br>{{title}}<br>",
    selector:"app-root"
})
export class AppComponent{

    title: string="Have a nice day";
    hour: number=new Date().getHours();
     func(){
        if (this.hour>6 && this.hour<=12)
            return "good morning";
            if (this.hour>13 && this.hour<=18)
            return "good afternoon";
            return "good night"; 
    }
}