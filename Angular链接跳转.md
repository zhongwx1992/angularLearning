# Angular Route link 跳转实现

参考资料：https://alligator.io/angular/query-parameters/

两种方式：

1. 在html中进行实现 routerLink

   * 前端code

   ```typescript
   [routerLink]="['/dashboard']" [queryParams]="{ id: data.id, name: data.name}" routerLinkActive="active"
   
   产生的url：http://localhost:4200/dashboard?id=`data.id`&name=`data.name`
   ```

   * ts code

   ```typescript
   import { Router, ActivatedRoute } from '@angular/router';
   
   export class DashboardComponent implements OnInit {
     constructor(
       private route: ActivatedRoute,
       private router: Router,
     ) { }
     
     dashboardName: string;
     dashboardId: string;
   
     /** 这里的route是为了在点击之后可以刷新页面 */
     ngOnInit() {
       this.route.queryParams.subscribe(params => {
         this.dashboardId = params.id;
         this.dashboardName = params.name;
         console.log('name: ', this.dashboardName, 'id: ', this.dashboardId);
       });
     }
     
   }
   
   ```

   

2. 在ts中实现 `router.navigate`

   ```typescript
   点击页面对应的code：
   this.router.navigate(['/dashboard'], { queryParams: { id: id, 'name': name } });
   
   产生的url：/dashboard?id=`id`&name=`name`
   
   接收页面参考上文，一样即可
   ```





# 参数获取方式



```typescript
  navigatorParams = this.route.snapshot.params;
  routerParams = this.route.snapshot.queryParams; 	
	
	get dashboardName() {
    return this.route.snapshot.params['name'];
  }
  get dashboardId() {
    return this.route.snapshot.params['id'];
  }
```

















