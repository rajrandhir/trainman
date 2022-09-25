import { lazy } from "react";

const Main = lazy(() => import('./app/main'));
const Page404 = lazy(() => import('./app/pages/page404/Page404'));
const Booking = lazy(() => import('./app/pages/ticket_booking/TicketBooking'));

const routes = [
    // { path: '/',  component: Main },
    { path: '/booking', component: Booking },
    { path: '*', component: Page404 },
]

export default routes;