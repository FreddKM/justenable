import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about-us',
    loadChildren: () =>
      import('./pages/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: 'automation',
    loadChildren: () =>
      import('./pages/automation/automation.module').then(
        (m) => m.AutomationModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'maintenance',
    loadChildren: () =>
      import('./pages/maintenance/maintenance.module').then(
        (m) => m.MaintenanceModule
      ),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./pages/services/services.module').then((m) => m.ServicesModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./pages/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products/products.module').then((m) => m.ProductsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
