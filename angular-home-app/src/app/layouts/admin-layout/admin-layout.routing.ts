import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { HyperledgerComponent } from '../../hyperledger/hyperledger.component';
import { EthereumComponent } from '../../ethereum/ethereum.component';
import { ArchitectureComponent } from '../../architecture/architecture.component';
import { WhitepapersComponent } from '../../whitepapers/whitepapers.component';
import { ReferencesComponent } from '../../references/references.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'hyperledger', component: HyperledgerComponent },
    { path: 'ethereum', component: EthereumComponent },
    { path: 'architecture', component: ArchitectureComponent },
    { path: 'whitepapers', component: WhitepapersComponent },
    { path: 'references', component: ReferencesComponent }
];
