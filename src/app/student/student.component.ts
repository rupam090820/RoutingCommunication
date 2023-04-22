import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import dataShre
import { DataShare } from '../DataShare/DataShare';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public student_id2: any = [];
  public CourseData: any = [];
  public SInfo: any = [];
  public ALLDATA: any = [];
  constructor(private actRoute: ActivatedRoute) { } // step1 at first we create dependecy injection for recived data from course component

  ngOnInit(): void {

    this.student_id2 = this.actRoute.snapshot.paramMap.get('id'); // step 2 here we set recived data to CourseData
    console.log("student compo" + this.student_id2);

    if (this.student_id2 != '' && this.student_id2 != null) {
      this.CourseData = DataShare.studentInfo.find((item: any) => {   // step 3 we check same data recived or not
        return this.student_id2 == item.std_id;
      });
      console.log(this.CourseData);
      // this.SInfo=DataShare.studentInfo.map((item: any) => {
      //   return item.course
      // });
    }
    else {
      let All = DataShare.studentInfo;
      this.ALLDATA = All;
    }
  }


}
// step 4 go to app-routing.module.ts file
// video date 16/01/2023