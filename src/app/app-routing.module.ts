import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./pages/about-us/about-us.module').then(
        (m) => m.AboutUsPageModule
      ),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./pages/services/services.module').then(
        (m) => m.ServicesPageModule
      ),
  },
  {
    path: 'work',
    loadChildren: () =>
      import('./pages/work/work.module').then((m) => m.WorkPageModule),
  },
  {
    path: 'maintenance',
    loadChildren: () =>
      import('./pages/maintenance/maintenance.module').then(
        (m) => m.MaintenancePageModule
      ),
  },
  {
    path: 'automation',
    loadChildren: () =>
      import('./pages/automation/automation.module').then(
        (m) => m.AutomationPageModule
      ),
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
