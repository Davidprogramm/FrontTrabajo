import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ClientComponent } from './components/client/client.component';
import { HomeComponent } from './components/home/home.component'; 
import { VendedorComponent } from "./vendedor/vendedor.component";

const appRoutes: Routes=[

    {path:'home',component:HomeComponent},
    {path:'cliente',component:ClientComponent},
    {path:'vendedor',component:VendedorComponent},
    {path:'**',component:HomeComponent}

    
]

export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);
