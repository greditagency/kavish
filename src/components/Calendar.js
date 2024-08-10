import React from "react";
import { InlineWidget } from "react-calendly";

const Calendar = () => {
    return (
        <>
            <div className="py-20 bg-black " id="Meet">
                <InlineWidget styles={{
                    height: '700px', minWidth: '320px'
                }} url="https://calendly.com/gredit-kavish/30min" />
            </div>

        </>
    );
};

export default Calendar;
