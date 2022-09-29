import { lazy } from "react";
const Main = lazy(() => import('./app/main'));
const Page404 = lazy(() => import('./app/pages/page404/Page404'));
const Booking = lazy(() => import('./app/pages/ticket_booking/TicketBooking'));
const SearchTrainDetails = lazy(() => import('./app/pages/ticket_booking/SearchDetails'))
const MyBooking = lazy(() => import('./app/pages/registration/MyBooking'));

const routes = [
    // { path: '/',  component: Main },
    { path: '/', component: Booking },
    { path: '/mybooking', component: MyBooking },
    { path: '/searchdetails', component: SearchTrainDetails },
    { path: '*', component: Page404 },
]

export default routes;