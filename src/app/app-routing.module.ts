import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { LoginPage } from "./pages/login/login.page";
import { PokedexPage } from "./pages/pokedex/pokedex.page";
import { TrainerPage } from "./pages/trainer/trainer.page"

const routes: Routes = [
    {
        path: '',
        component: LoginPage,
        pathMatch: 'full'
    },
    {
        path: 'pokedex',
        component: PokedexPage,
        canActivate: [AuthGuard]
    },
    {
        path: 'trainer',
        component: TrainerPage,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {}