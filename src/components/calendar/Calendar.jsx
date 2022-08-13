// import React from 'react';
// import './calendar.css'

// import {Helmet} from "react-helmet";
// // const Demo = props => (
// // <div className="application">
// //             <Helmet>
// //               <script src="C:/Users/vinee/Desktop/sitara-sparks/src/components/calendar/cal.js" type="text/javascript" />
// //             </Helmet>
// //         </div>
  
// // );
// // Demo();
// // import {Helmet} from 'react-helmet'
// // import './cal.js'

// // Link to Reference for Interactive Calendar:
// // https://www.youtube.com/watch?v=o1yMqPyYeAo

// // const ComponentDidMount() => {
// //     const script = document.createElement("script");
// //     script.src = "./cal.js";
// //     script.async = true;
// //     document.body.appendChild(script);
// // }

// const Calendar = () => {
//     const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     const dayslist = [];
//     for(let day of days){
//         dayslist.push(<div>{day}</div>); 
//     }

//     // const dates = [];
//     // for(let i=1; i<=31; i++){
//     //     dates.push(i); 
//     // }
//     // const dateslist = [];
//     //     for(let date of dates){
//     //         dateslist.push(<div className="py-3">{date}</div>)
//     //     }
    

//     return (
//         <>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

//         <section id="calendar" className="mt-4">

//             <div className="container d-flex flex-column justify-content-center align-items-center ">
//                 <div className="calendar bg-light">

//                     <div className="month d-flex justify-content-between align-items-center py-2 px-5">
//                         <i className="fas fa-angle-left prev"></i>
//                         <div className="date">
//                             <h1 className="p-0 m-0">May</h1>
//                             <p className="p-0 m-0">Sun May 01, 2022</p>
//                         </div>
//                         <i className="fas fa-angle-right next"></i>
                        
//                     </div>

//                     <div className="weekdays d-flex py-3">{dayslist}</div>

//                     <div className="dates d-flex flex-wrap"></div>

//                 </div>
//             </div>

//         </section>

//         <Helmet>
//             <script src="./script.js" />
//         </Helmet>

        
//         </>        
//     )
// }

// export default Calendar;