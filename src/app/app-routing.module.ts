import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'my-space',
    loadChildren: ()=> import('./space/space.module').then(m=>m.SpaceModule)
  },
  {
    path: '',
    loadChildren: ()=> import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path: 'events',
    loadChildren: ()=> import('./events/events.module').then(m=>m.EventsModule)
  },
  {
    path: 'videos',
    loadChildren: ()=> import('./videos/videos.module').then(m=>m.VideosModule)
  },
  {
    path: 'live',
    loadChildren: ()=> import('./live/live.module').then(m=>m.LiveModule)
  },
  {
    path: 'register',
    loadChildren: ()=> import('./register/register.module').then(m=>m.RegisterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
