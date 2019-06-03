import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ArtifactsRoutes: RouteInfo[] = [
    { path: '/architecture', title: 'Architecture', icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'DevOps', icon: 'person', class: '' },
    { path: '/whitepapers', title: 'Whitepapers', icon: 'person', class: '' },
];
export const DemosRoutes: RouteInfo[] = [
    { path: '/hyperledger', title: 'Hyperledger', icon: 'dashboard', class: '' },
    { path: '/ethereum', title: 'Ethereum', icon: 'person', class: '' },
    { path: '/user-profile', title: 'Multichain', icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'R3Corda', icon: 'person', class: '' },
];
export const ReferencesRoutes: RouteInfo[] = [
    { path: '/references', title: 'References', icon: 'dashboard', class: '' },
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    artifacts: any[];
    demos: any[];
    references: any[];
    panelOpenState = false;
    constructor() { }

    ngOnInit() {
        this.artifacts = ArtifactsRoutes.filter(menuItem => menuItem);
        this.demos = DemosRoutes.filter(menuItem => menuItem);
        this.references = ReferencesRoutes.filter(menuItem => menuItem);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
