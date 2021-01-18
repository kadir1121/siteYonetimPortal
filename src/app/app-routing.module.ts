import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './companents/home/home.component';
import { ABeyazBahceComponent } from './components/a-beyaz-bahce/a-beyaz-bahce.component';
import { AElmaliComponent } from './components/a-elmali/a-elmali.component';
import { AGreenComponent } from './components/a-green/a-green.component';
import { AOnurkentComponent } from './components/a-onurkent/a-onurkent.component';
import { AidatComponent } from './components/aidat/aidat.component';
import { BeyazBahceComponent } from './components/beyaz-bahce/beyaz-bahce.component';
import { ElmaliComponent } from './components/elmali/elmali.component';
import { GreenComponent } from './components/green/green.component';
import { OnurkentComponent } from './components/onurkent/onurkent.component';
import { SitelerComponent } from './components/siteler/siteler.component';
import { YoneticiComponent } from './components/yonetici/yonetici.component';
import { YsBeyazBahceComponent } from './components/ys-beyaz-bahce/ys-beyaz-bahce.component';
import { YsElmaliComponent } from './components/ys-elmali/ys-elmali.component';
import { YsGreenComponent } from './components/ys-green/ys-green.component';
import { YsOnurkentComponent } from './components/ys-onurkent/ys-onurkent.component';

const routes: Routes = [
  {path:"home",
  component: HomeComponent 

},
{path:"aidat",
  component: AidatComponent 

},
{path:"siteler",
  component: SitelerComponent 

},
{path:"yonetici",
  component: YoneticiComponent 

},
{path:"green",
  component: GreenComponent 

},
{path:"onurkent",
  component: OnurkentComponent 

}
,
{path:"elmali",
  component: ElmaliComponent 

},
{path:"beyazBahce",
  component: BeyazBahceComponent 

},
{path:"ysElmali",
  component: YsElmaliComponent 

},
{path:"ysGreen",
  component: YsGreenComponent 

},
{path:"ysOnurkent",
  component: YsOnurkentComponent

},
{path:"ysBeyazBahce",
  component: YsBeyazBahceComponent 

},
{path:"aBeyazBahce",
  component: ABeyazBahceComponent 

},
{path:"aOnurkent",
  component: AOnurkentComponent 

},
{path:"aGreen",
  component: AGreenComponent

},
{path:"aElmali",
  component: AElmaliComponent 

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
