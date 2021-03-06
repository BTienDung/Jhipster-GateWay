import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'car',
        loadChildren: () => import('./carsapp/car/car.module').then(m => m.CarsappCarModule),
      },
      {
        path: 'dealer',
        loadChildren: () => import('./dealer/dealer/dealer.module').then(m => m.DealerDealerModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class GatewayEntityModule {}
