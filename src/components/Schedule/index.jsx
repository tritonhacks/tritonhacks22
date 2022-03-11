import "./style.css";

const Schedule = () => {
    return(
        <div id="schedule">
            <h1 id="text">Schedule</h1>
            <div id="calendar">
                 <iframe title="calendar" id="calendar-iframe" src="https://calendar.google.com/calendar/embed?wkst=1&bgcolor=%23f3ecdc&ctz=America%2FLos_Angeles&mode=WEEK&src=Y19qcDlyM3J2dTJhOXRoYWE4am03a3Rodmdha0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23009688" 
                width="800" height="600" frameborder="0" scrolling="no"/> 
            </div>
        </div>
    );
}

export default Schedule;