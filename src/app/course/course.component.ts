import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataShare } from '../DataShare/DataShare';  // at first import DataShare
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public courselist: any = [];
  constructor(private route: Router) { } // step 4 here add dependency injetion for send data course to student

  ngOnInit(): void {
    this.courselist = DataShare.studentInfo.map((item: any) => {
      return item['course']
    });
    console.log(this.courselist); // step 2: this portion for showing course details in course.html page
  }
  send(std_id: any) {   //step 3 this is for send data course to student component
  
    console.log("course student id" + std_id);
    this.route.navigate(['student', std_id]); // step 5 here add navigate function for send data one comp to another comp.
    // step 5)i) 1st write component name where we send our data( here i send data to student compoinent thats why we write student)
    // step 5)ii) then we write std_id because we send std_id into student component

  }
}
