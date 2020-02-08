import {Component, ViewChild} from '@angular/core';
import {STConfig, STColumn, STChange, STComponent} from '@delon/abc';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

// import {
//   Component,
//   OnInit,
//   ChangeDetectorRef,
//   AfterViewInit,
//   ViewChildren,
//   QueryList,
//   ViewChild,
//   OnDestroy
// } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {

  @ViewChild('st', {static: false}) st: STComponent;

  users: any[] = Array(10)
    .fill({})
    .map((item: any, idx: number) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
        // 是否显示展开按钮
        showExpand: idx !== 0,
        description: `${idx + 1}. My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.`,
      };
    });
  columns: STColumn[] = [
    {title: '编号', index: 'id'},
    {title: '姓名', index: 'name'},
    {title: '年龄', index: 'age'},
    {
      buttons: [
        {
          text: 'Button',
        },
      ],
    },
  ];
}
