import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searches: any[];
  firstNamesRef: any[];
  lastNamesRef: any[];
  fullNamesRef: any[];
  constructor(private dashboardService: DashboardService) {
    this.searches = [];
  }

  searchHistory() {
    this.dashboardService.getSearchHistory().subscribe( (history: any) => {
      this.searches = history;
    });
  }

  ngOnInit() {
  }
  getData(){
    
    this.dashboardService.getFirstNames().subscribe((firstNames: any) =>{
    this.firstNamesRef=firstNames;
      console.log(" this is the firstNames");
      //console.log(firstNames);
      console.log(" this is the firstNames");
    }
    );
  }

  getLastNameData(){
    
    this.dashboardService.getLastNames().subscribe((lastNames: any) =>{
    this.lastNamesRef=lastNames;
      console.log(" this is the lastNames");
      //console.log(lastNames);
      console.log(" this is the lastNames");
    }
    );
    }


  getFullNameData(){
    
    console.log(" this is the Full Names");
    console.log(this.getData()+this.getLastNameData());
    }

}
