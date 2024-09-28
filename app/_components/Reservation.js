import { auth } from "../_lib/auth";
import LoginMessage from "./LoginMessage";

const {
    getSettings,
    getBookedDatesByCabinId,
} = require("../_lib/data-service");
const { default: DateSelector } = require("./DateSelector");
const { default: ReservationForm } = require("./ReservationForm");

async function Reservation({ cabin }) {
    const session = await auth();

    const [settings, bookedDates] = await Promise.all([
        getSettings(),
        getBookedDatesByCabinId(cabin.id),
    ]);

    return (
        <div className="grid grid-cols-[auto,1fr] border border-primary-800 min-h-[400px]">
            <DateSelector
                settings={settings}
                bookedDates={bookedDates}
                cabin={cabin}
            />
            {session?.user ? (
                <ReservationForm cabin={cabin} user={session.user} />
            ) : (
                <LoginMessage />
            )}
        </div>
    );
}

export default Reservation;
