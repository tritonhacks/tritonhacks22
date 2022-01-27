import "./style.css";

const Schedule = () => {
    return(
        <div>
        <div id="schedule">
            <div id="text">
                <h1>Schedule</h1>
            </div>
            <div id="calendar">
                <iframe title="calendar" src="https://calendar.google.com/calendar/embed?wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&src=Y19qcDlyM3J2dTJhOXRoYWE4am03a3Rodmdha0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23009688" 
                 width="800" height="600" frameborder="0" scrolling="no"/>  
            </div>
        </div>
        </div>
    );
}

export default Schedule;