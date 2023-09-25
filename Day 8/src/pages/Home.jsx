import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
  return (
    <>
    <div className='topbar'>
    <div className='homename'>Virtual job</div>
    
    <button className='logbt'>
    <Link to='/Login'>Login</Link>
    </button>
    <button className='sigbt'>
    <Link to='/Register'>Signup</Link>
    </button>
    
    </div>
    <div className='main-wrapper'>
                <div className='welcome-container'>
                   
                </div>
                </div>
                <div className='products1'><p>KALAINGAR CENTENARY JOB FAIR - September 2023</p>
                <div className='content1'>ERODE ARTS AND SCIENCE COLLEGE, RANGAMPALAYAM 
                ,ERODE ARTS AND SCIENCE COLLEGE, RANGAMPALAYAM
             <br/>Erode - NEAR RING ROAD JUNCTION
             30/09/2023 to 30/09/2023 |  08:00 AM to 04:00 PM
             <br/>ABOVE 10000 VACANCIES MORE THAN 200 EMPLOYERS FREE SKILL TRAINING 
             REGISTRATION FREE COACHING CLASS
             </div>
             </div>
             <div className='products2'><p>Mega Job Fair - 23.09.2023</p>
             <div className='content1'>GRT Institute of Engineering and Technology, Tiruttani ,
             <br/>Tiruvallur - Tiruttani to Chennai Highway
             23/09/2023 to 23/09/2023 |  08:00 AM to 05:00 PM
             <br/>District Employment and Career Guidance Centre, Thiruvallur, Date:13.09.2023
             </div>
             </div>
             <div className='products2'><p>Mega Job Fair - September 2023</p>
             <div className='content1'>A.K.T. MATRICULATION SCHOOL KALLAKURICHI ,
             <br/> Kallakurichi - KALLAKURICHI
             23/09/2023 to 23/09/2023 |  09:00 AM to 03:00 PM
             <br/>தொழிலாளர் நலன் மற்றும் திறன் மேம்பாட
             </div>
             </div>
             <div className='products2'><p>
             ACCOUNTS ASSISTANT MANAGER</p>
             <div className='content1'>Sales Executive | SHRI VENKATESWARA 
             HI TECH MACHINERIES PVT LTD
             <br/>Erode - NEAR RING ROAD JUNCTION
             Posted Date : 13-09-2023 | Open Until : 22-09-2023
             <br/>Accounts Executive (Recording, Reporting)
             </div>
             </div>
             <div className='products2'><p>KALAINGAR CENTENARY JOB FAIR - September 2023</p>
                <div className='content1'>ERODE ARTS AND SCIENCE COLLEGE, 
                RANGAMPALAYAM ,ERODE ARTS AND SCIENCE COLLEGE, RANGAMPALAYAM
             <br/>Erode - NEAR RING ROAD JUNCTION
             30/09/2023 to 30/09/2023 |  08:00 AM to 04:00 PM
             <br/>ABOVE 10000 VACANCIES MORE THAN 200 EMPLOYERS FREE SKILL TRAINING 
             REGISTRATION FREE COACHING CLASS
             </div>
             </div>
             <div className='products2'><p>Mega Job Fair - 23.09.2023</p>
             <div className='content1'>GRT Institute of Engineering and Technology, Tiruttani ,
             <br/>Tiruvallur - Tiruttani to Chennai Highway
             23/09/2023 to 23/09/2023 |  08:00 AM to 05:00 PM
             <br/>District Employment and Career Guidance Centre, Thiruvallur, Date:13.09.2023
             </div>
             </div>
             <div className='products2'>
             To View More Login Or Signup
             </div>
             
    </>
    )
  }
  
  export default Home