import ROUTES from "../routes/routes";

export interface NavigationItem {
    id: number;
    title: string;
    path: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
    {
        id: 1,
        title: "Home",
        path: ROUTES.HOME,
    },
    {
        id: 2,
        title: "About",
        path: ROUTES.ABOUT,
    },
    {
        id: 3,
        title: "Projects",
        path: ROUTES.PROJECTS,
    },
    {
        id: 4,
        title: "Resume",
        path: ROUTES.RESUME,
    },
    {
        id: 5,
        title: "Contact",
        path: ROUTES.CONTACT,
    },
];
