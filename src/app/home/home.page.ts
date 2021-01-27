import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
month: any = [];
year: any;
mnth:any;
data1: any =[];
data2: any;
income: any;
data3: any=[];
data6: any=[];
incom: any;
sal: any;
data7: any=[];
data8: any=[];
data9: any=[];
data10: any=[];
income1:any;
incomes: any;
data11: any=[];
Data: any = [];
data4: any =[];
data5: any = [];
datas: any =[];
  constructor() {
   
  }

  ngOnInit() {
    var data = [
      {"name":"John Doe","earning_amount":1250,"date":"01-01-2020"},
      {"name":"John Doe","earning_amount":1050,"date":"01-01-2020"},
      {"name":"John Doe", "earning_amount":10,"date":"01-01-2020"},
      {"name":"John Doe","earning_amount":9850,"date":"03-02-2020"},
      {"name":"John Doe","earning_amount":950,"date":"10-04-2020"},
      {"name":"John Doe","earning_amount":1450, "date":"21-04-2020"},
      {"name":"John Doe","earning_amount":2500,"date":"15-04-2020"},
      {"name":"John Doe","earning_amount":850,"date":"12-05-2020"},
      {"name":"John Doe", "earning_amount":750,"date":"23-06-2020"},
      {"name":"John Doe","earning_amount":750,"date":"23-06-2020"},
      {"name":"John Doe","earning_amount":750,"date":"23-06-2020"},
      {"name":"John Doe","earning_amount":650,"date":"21-07-2020"},
      { "name":"John Doe","earning_amount":900,"date":"12-08-2020"},
      {"name":"John Doe","earning_amount":850,"date":"02-09-2020"},
      {"name":"John Doe","earning_amount":750,"date":"15-10-2020"},
      {"name":"John Doe","earning_amount":900,"date":"21-10-2020"},
      {"name":"John Doe","earning_amount":400,"date":"12-11-2020"},
      {"name":"John Doe","earning_amount":450,"date":"17-12-2020"},
      {"name":"John Doe","earning_amount":450,"date":"17-12-2020"},
      {"name":"John Doe","earning_amount":560,"date":"28-12-2020"}
      ]
  for(let i = 0; i<data.length; i++){
    this.mnth = data[i]["date"].split('-')[1];
    if(this.mnth ==="01"){
      
      this.year = data[i]["date"].split('-')[2];
      this.data1.push(data[i]);
      this.data2 =[{"m":"January", "mnth":this.mnth,"data": this.data1}];
      
     
    }
  }
  this.Data.push(this.data2[0]);
  for(let i = 0; i<data.length; i++){
    this.mnth = data[i]["date"].split('-')[1];
    if(this.mnth ==="02"){
      
      this.year = data[i]["date"].split('-')[2];
      this.data3.push(data[i]);
      this.data2 =[{"m":"Feburary", "mnth":this.mnth,"data": this.datas}];
      
    }
    
  }  
  this.Data.push(this.data2[0]);
  for(let i = 0; i<data.length; i++){
    this.mnth = data[i]["date"].split('-')[1];
    if(this.mnth ==="04"){
   
      this.year = data[i]["date"].split('-')[2];
      this.data4.push(data[i]);
      this.data2 =[{"m":"April", "mnth":this.mnth,"data": this.datas}];
      
    }
    
  }  
  this.Data.push(this.data2[0]);
  for(let i = 0; i<data.length; i++){
    this.mnth = data[i]["date"].split('-')[1];
    if(this.mnth ==="05"){
      
      this.year = data[i]["date"].split('-')[2];
      this.datas.push(data[i]);
      this.data2 =[{"m":"May", "mnth":this.mnth,"data": this.datas}];
      
    }
    
  }  
  this.Data.push(this.data2[0]);
  for(let i = 0; i<data.length; i++){
    this.mnth = data[i]["date"].split('-')[1];
    if(this.mnth ==="06"){
      this.year = data[i]["date"].split('-')[2];
      this.data5.push(data[i]);
      this.data2 =[{"m":"June", "mnth":this.mnth,"data": this.datas}];
      
    }
    
  }  
  this.Data.push(this.data2[0]);
  
  for(let i = 0; i<data.length; i++){
    this.mnth = data[i]["date"].split('-')[1];
    if(this.mnth ==="07"){
      this.year = data[i]["date"].split('-')[2];
      this.data6.push(data[i]);
      this.data2 =[{"m":"July", "mnth":this.mnth,"data": this.datas}];
      
    }
    
  }  
  this.Data.push(this.data2[0]);
  
  for(let i = 0; i<data.length; i++){
    this.mnth = data[i]["date"].split('-')[1];
    if(this.mnth ==="08"){
      this.year = data[i]["date"].split('-')[2];
      this.data7.push(data[i]);
      this.data2 =[{"m":"August", "mnth":this.mnth,"data": this.datas}];
      
    }
    
  }  
  this.Data.push(this.data2[0]);
  
  for(let i = 0; i<data.length; i++){
    this.mnth = data[i]["date"].split('-')[1];
    if(this.mnth ==="09"){
      this.year = data[i]["date"].split('-')[2];
      this.data8.push(data[i]);
      this.data2 =[{"m":"September", "mnth":this.mnth,"data": this.datas}];
      
    }
    
  }  
  this.Data.push(this.data2[0]);
  
  for(let i = 0; i<data.length; i++){
    this.mnth = data[i]["date"].split('-')[1];
    if(this.mnth ==="10"){
      this.year = data[i]["date"].split('-')[2];
      this.data9.push(data[i]);
      this.data2 =[{"m":"October", "mnth":this.mnth,"data": this.datas}];
      
    }
    
  }  
  this.Data.push(this.data2[0]);
  for(let i = 0; i<data.length; i++){
    this.mnth = data[i]["date"].split('-')[1];
    if(this.mnth ==="11"){
      this.year = data[i]["date"].split('-')[2];
      this.data10.push(data[i]);
      this.data2 =[{"m":"November", "mnth":this.mnth,"data": this.datas}];
      
    }
    
  }  
  this.Data.push(this.data2[0]);
  for(let i = 0; i<data.length; i++){
    this.mnth = data[i]["date"].split('-')[1];
    if(this.mnth ==="12"){
      this.year = data[i]["date"].split('-')[2];
      this.data11.push(data[i]);
      this.data2 =[{"m":"December", "mnth":this.mnth,"data": this.datas}];
      
    }
    
  }  
  this.Data.push(this.data2[0]);
 for(let i =0; i<data.length;i++){
   this.income = data[i]["earning_amount"];
 }
    for(let j = 1; j<data.length; j++){
      if(this.income > data[j]["earning_amount"]){
        this.income1 =  data[j]["earning_amount"];
        if(this.income1 <data[j+1]["earning_amount"]){
          this.incomes = data[j]["earning_amount"];
        }
      }
      
    
  }
  for(let k = 2; k<data.length; k++){
    if(this.incomes > data[k]["earning_amount"]){
      this.incomes = data[k];
    }
  }
  for(let i =0; i<data.length;i++){
    this.income = data[i]["earning_amount"];
  }
     for(let j = 1; j<data.length; j++){
       if(this.income < data[j]["earning_amount"]){
         this.income1 =  data[j]["earning_amount"];
         if(this.income1 >data[j+1]["earning_amount"]){
           this.sal = data[j]["earning_amount"];
         }
       }
       
     
   }
   for(let k = 2; k<data.length; k++){
     if(this.sal < data[k]["earning_amount"]){
       this.sal = data[k];
     }
   }

  }
  
}
