import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NotFoundComponent} from './not-found/not-found.component';
import {LayoutComponent} from './layout/layout.component';
import {UsersComponent} from './users/users/users.component';
import {UserComponent} from './users/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'users/:id', component: UserComponent},
      {path: 'users', component: UsersComponent},
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
