/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React, {useEffect, useRef, useState} from 'react';
import AuthConsumer from "../../auth/AuthProvider";
import { backgroundDefault, myComputer, window } from '../../static';
import { Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepBackward, faStepForward, faWindowMinimize, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faWindowMaximize, faForwardStep} from '@fortawesome/free-regular-svg-icons';
import Draggable, {DraggableCore} from 'react-draggable';
import { Uptoolbar } from '../components/general';
import { Link } from 'react-router-dom';
import DeathScreenWithReturn from '../components/deathScreen/deathScreenWithReturn';
import moment from 'moment';

const Desktop = () => {
  const [authed, dispatch] = AuthConsumer();
  const [activeDesktopButton, setActiveDesktopButton] = useState(0);
  const [oppenedOrder, setOppenedOrder] = useState([]);
  const [errorStart, setErrorStart] = useState(false);
  const [tabJob, setTabJob] = useState(0);
  const [applications, setApplications] = useState([{
    id: 1,
    name: "Profile Picture",
    active: false,
    maximizer: false,
    opened: false,
    minimized: false,
    clicked: false,
    type: "photoview", //its like a ddl name, for the open a correct component based
    icon: require("../../static/desktopIcons/imageFile.png")
  },{
    id: 2,
    name: "About Me",
    active: false,
    maximizer: false,
    opened: false,
    minimized: false,
    clicked: false,
    type: "notepad", //its like a ddl name, for the open a correct component based
    icon: require("../../static/desktopIcons/notepad.png")
  },{
    id: 3,
    name: "Experience",
    active: false,
    maximizer: false,
    opened: false,
    minimized: false,
    clicked: false,
    type: "dllView", //its like a ddl name, for the open a correct component based
    icon: require("../../static/desktopIcons/iniFile.png")
  },{
    id: 4,
    name: "Contact",
    active: false,
    maximizer: false,
    opened: false,
    minimized: false,
    clicked: false,
    type: "outlookCard", //its like a ddl name, for the open a correct component based
    icon: require("../../static/desktopIcons/outlook.png")
  },{
    id: 5,
    name: "Tools Expertise",
    active: false,
    maximizer: false,
    opened: false,
    minimized: false,
    clicked: false,
    type: "paint", //its like a ddl name, for the open a correct component based
    icon: require("../../static/desktopIcons/paint.webp")
  }]);

  const handleClickOpenApplication = (event, clicado) => {
    setActiveDesktopButton(clicado);
    
    if (event.detail === 1) {
      const help = applications;
      const helposo = help.map((app, index) => {
        if(app.id === clicado){
          if(app.opened) app.active = true;
          return app;
        }
        if(app.id !== clicado && app.opened) {
          app.active = false;
          return app;
        } 
      });
      setApplications(prevApplications => ([...help]));
    }

    if (event.detail === 2) {
      const help = applications;
      if(!oppenedOrder.includes(clicado)){
        setOppenedOrder(prevOppenedOrder => ([...prevOppenedOrder, clicado]));
      }

      const helposo = help.map((app, index) => {
        if(app.id === clicado) app.opened = true; app.active = true;
        if(app.id !== clicado && app.active) {
          app.active = false;
          return app;
        } 
      });
      setApplications(prevApplications => ([...help]));
    }
  };

  const handleClickBottomBar = (event, clicado) => {
    const help = applications.map((app, index) => {
      if(clicado === app.id){
        app.active = true;
        app.minimized = false;
        return app;
      }else{
        app.active = false;
        return app;
      }
    });
    setApplications(prevApplications => ([...help]));
  }

  const handleClickTopWindowPopup = (type, clicado) => {

    const help = applications.map((app, index) => {
      if(clicado === app.id){
        if(type === "close"){
          app.active = false;
          app.opened = false;
          setActiveDesktopButton(0);
          setOppenedOrder((prevApplications) => (
            [...prevApplications.filter((number) => number !== clicado)]
          ))
        }else if(type === "min"){
          app.minimized = true;
          app.maximizer = false;
          app.active = false;
          setActiveDesktopButton(0);
        }else if(type === "max"){
          app.minimized = false;
          app.maximizer = true;
          setActiveDesktopButton(0);
        }
      }
      return app;
    });
    setApplications(prevApplications => ([...help]));
  }

  const clicked = (data) => {
    setErrorStart(!data);
  }


  return (
    <div className='flex w-full h-full'>
      {errorStart ? <DeathScreenWithReturn className={``} clicked={clicked}/> : ``}
      <div style={{backgroundImage: `url(${backgroundDefault})`}}
        className='w-full min-h-screen bg-cover bg-no-repeat bg-center z-10'>
      </div>
      <Row className="flex flex-col z-20 absolute w-full py-4" gutter={[0, 40]}>
      {applications.map((application, index) => (
        <Col xs={10} sm={8} md={6} lg={4} xl={4} xxl={2} className={`flex flex-col items-center`}>
          <button className={`flex flex-col items-center p-1 min-w-[128px] 
          ${activeDesktopButton === application.id ? 'desktop-active -m-[2px]': ''}`} 
          onClick={(e) => {handleClickOpenApplication(e, application.id)}} >
            <img src={application.icon} className='w-12'/>
            <p className='text-base text-white drop-shadow-appTextDk'>{application.name}</p>
          </button>
        </Col>
        ))
      }
      </Row>
      {/* <button className='w-[160px] h-[40px] bg-red-500' onClick={() => {
        dispatch({type: 'logout'})
      }}>
        Loggout
      </button> */}
      <div className='flex flex-row min-w-full bg-bluePrimary h-12 bottom-0 z-20 absolute overflow-hidden shadow-[inset_2px_4px_4px_0_rgba(255,255,255,0.3)]'>
        <button onClick={() => setErrorStart(true)} className='-mt-2 flex mr-1 w-[140px] overflow-hidden 
        xs:w-[80px] sm:w-[80px] md:w-[75px] lg:w-[148px] xl:w-[154px] 2xl:w-[170px]
        h-16 bg-greenStart items-center pl-1.5 rounded-tr-3xl rounded-br-3xl shadow-[inset_2px_12px_6px_0_rgba(255,255,255,0.3)]'>
          <img src={window} className='w-8 h-8 mx-2'/>
          <p className='text-white font-medium text-2xl pb-1 md:hidden'>start</p>
        </button>
        
        <div className='w-full mr-1 flex flex-row gap-1'>
          {
            oppenedOrder.map((number) => (
              applications.map((application, index) => (
                application.id === number ? <button className={`my-1 rounded whitespace-nowrap 
                application-bottom-bar ${application.active ? ' active ' : ''}
                text-ellipsis overflow-hidden flex flex-row 
                max-w-[160px] px-2 items-center h-10
                left-0`} onClick={(e) => {handleClickBottomBar(e, application.id)}}>
                  <img src={application.icon} height={25} width={20} className='mr-2'/>
                  <p className='text-white text-ellipsis overflow-hidden'>{application.name}</p>
                </button> : <></>
                )
            ))
          /* {applications.map((application, index) => (
            application.opened ? <button className={`my-1 rounded whitespace-nowrap 
            application-bottom-bar ${application.active ? 'active' : ''}
            text-ellipsis overflow-hidden flex flex-row 
            max-w-[160px] px-2 items-center h-10
            left-0`} onClick={(e) => {handleClickBottomBar(e, index)}}>
              <img src={application.icon} height={25} width={20} className='mr-2'/>
              <p className='text-white text-ellipsis overflow-hidden'>{application.name}</p>
            </button> : <></>
            ) }*/
          )}
        </div>
        
        <div className='flex flex-row items-center justify-center w-32 xs:w-16 sm:w-16 md:w-16 lg:w-14 xl:w-36 2xl:w-40 
        bg-blueLight shadow-[inset_2px_4px_4px_0_rgba(255,255,255,0.3)]
        '>
          <p className='text-white'>{moment().format('h:mm A')}</p> 
        </div>
      </div>


      {
        applications.map((application, index) => (
          application.opened ? application.type === 'notepad' ? <Draggable>
          <div onClick={(e) => {handleClickOpenApplication(e, application.id)}}
          className={`${application.minimized ? ' hidden ' : ' absolute '} ${application.active ? 'z-[30]' : 'z-[20]'} basicwindow notepad rounded-10`}>
          <div className='appTop flex flex-row px-2'>
            <div className='leftGroup flex flex-row w-fit'>
              <img src={application.icon} height={25} width={20} className='mr-2'/>
              <p className='text-white font-bold'>{application.name}</p>
            </div>
            <div className='buttonGroup flex flex-row w-auto gap-1'>
              <button className='topButton minimize' 
              onClick={(e) => {handleClickTopWindowPopup("min", application.id)}}>
                <FontAwesomeIcon icon={faWindowMinimize} fontSize={18} color='white' style={{fontWeight: 'bolder'}} />
              </button>
              <button className='topButton maximize' 
              onClick={(e) => {handleClickTopWindowPopup("max", application.id)}}>
                <FontAwesomeIcon icon={faWindowMaximize} fontSize={24} color='white' style={{fontWeight: 'bolder'}} inverse/>
              </button>
              <button className='topButton close' 
              onClick={(e) => {handleClickTopWindowPopup("close", application.id)}}>
                <FontAwesomeIcon icon={faXmark} fontSize={28} color='white' style={{fontWeight: 'bolder'}}  />
              </button>
            </div>
          </div>
            {/* <Uptoolbar icon={application.icon} name={application.name} id={application.id} onClick={closeClick}/> */}
            <div className='flex flex-row appOptions py-1 gap-4 pl-4'>
              <button disabled>File</button>
              <button disabled>Edit</button>
              <button disabled>View</button>
              <button disabled>Favorite</button>
              <button disabled>Tools</button>
              <button disabled>Help</button>
            </div>
            <div className="text-areaNotepadDiv w-full my-1 px-1">
              <textarea rows="18" spellcheck="false" className='areaNotepad w-full px-2'>{
                ` I am a software developer passionate about HTML, CSS, styling and everything that involves the interface between the computer and the user, better known as Frontend.
Graduated in systems analysis and development.
                
In my 9 years of experience, I've worked on incredible projects and amazing companies. A significant portion of my work involved automation projects, where I honed my frontend skills, programming languages, project management and autonomy.
                
I Worked for 2 years as a trainee in public service with in the administrative assistant position in the bidding department of my city's hall, which contributed to soft skills such as resilience, communication and empathy.
                
I specialized in building software, mobile applications, dashboards, and internal tools.
Throughout these projects, I consistently held the responsibility of being the initial point of contact with users, enhancing my understanding of end clients and refining my UI/UX knowledge.
My experience is largely rooted in Startups, which provided valuable lessons on MVP and sharpened my problem-solving techniques—both problem-driven and solution-driven—making i really like to identify origins and devise effective solutions.`
              }</textarea>

            </div>
          </div> 
        </Draggable> : 
          application.type === 'photoview' ? 
          <Draggable>
          <div onClick={(e) => {handleClickOpenApplication(e, application.id)}}
          className={`${application.minimized ? ' hidden ' : ' absolute '} ${application.active ? 'z-[30]' : 'z-[20]'} basicwindow photoview rounded-10 w-fit`}>
          <div className='appTop flex flex-row px-2'>
            <div className='leftGroup flex flex-row w-fit'>
              <img src={application.icon} height={25} width={20} className='mr-2'/>
              <p className='text-white font-bold'>{application.name}</p>
            </div>
            <div className='buttonGroup flex flex-row w-auto gap-1'>
              <button className='topButton minimize' 
              onClick={(e) => {handleClickTopWindowPopup("min", application.id)}}>
                <FontAwesomeIcon icon={faWindowMinimize} fontSize={18} color='white' style={{fontWeight: 'bolder'}} />
              </button>
              <button className='topButton maximize' 
              onClick={(e) => {handleClickTopWindowPopup("max", application.id)}}>
                <FontAwesomeIcon icon={faWindowMaximize} fontSize={24} color='white' style={{fontWeight: 'bolder'}} inverse/>
              </button>
              <button className='topButton close' 
              onClick={(e) => {handleClickTopWindowPopup("close", application.id)}}>
                <FontAwesomeIcon icon={faXmark} fontSize={28} color='white' style={{fontWeight: 'bolder'}}  />
              </button>
            </div>
          </div>
            {/* <Uptoolbar icon={application.icon} name={application.name} id={application.id} onClick={closeClick}/> */}
            <div className="flex flex-col text-areaNotepadDiv w-full my-1 px-0.5 place-items-center">
              <div>
                <img src={require('../../static/images/perfil.webp')} className='h-[500px]'/>
              </div>
              {/* <div className='w-fit h-10 flex flex-row'>
                <div className='advances flex flex-row'>
                  <button className='bg-gradient-to-t from-blue-700 to-blue-400 buttonPhotoView'
                  onClick={() => {}}>  
                    <FontAwesomeIcon icon={faStepBackward} fontSize={18} color='white'/> 
                  </button>
                  <button className='bg-gradient-to-t from-blue-700 to-blue-400 buttonPhotoView'
                  onClick={() => {}}> 
                    <FontAwesomeIcon icon={faStepForward} fontSize={18} color='white'/>
                  </button>
                </div>
                <div className='appresentations flex flex-row'>
                  <button className='buttonPhotoView'
                  onClick={() => {}}>  <FontAwesomeIcon icon={faXmark} fontSize={28} color='white' style={{fontWeight: 'bolder'}}  /> </button>
                  <button className='buttonPhotoView'
                  onClick={() => {}}>  <FontAwesomeIcon icon={faXmark} fontSize={28} color='white' style={{fontWeight: 'bolder'}}  /> </button>
                  <button className='buttonPhotoView'
                  onClick={() => {}}>  <FontAwesomeIcon icon={faXmark} fontSize={28} color='white' style={{fontWeight: 'bolder'}}  /> </button>
                </div>
                <div className='zoom flex flex-row'>
                  <button className='buttonPhotoView'
                  onClick={() => {}}>  <FontAwesomeIcon icon={faXmark} fontSize={28} color='white' style={{fontWeight: 'bolder'}}  /> </button>
                  <button className='buttonPhotoView'
                  onClick={() => {}}>  <FontAwesomeIcon icon={faXmark} fontSize={28} color='white' style={{fontWeight: 'bolder'}}  /> </button>
                </div>
                <div className='impressions  flex flex-row'>
                  <button className='buttonPhotoView'
                  onClick={() => {}}>  <FontAwesomeIcon icon={faXmark} fontSize={28} color='white' style={{fontWeight: 'bolder'}}  /> </button>
                  <button className='buttonPhotoView'
                  onClick={() => {}}>  <FontAwesomeIcon icon={faXmark} fontSize={28} color='white' style={{fontWeight: 'bolder'}}  /> </button>
                  <button className='buttonPhotoView'
                  onClick={() => {}}>  <FontAwesomeIcon icon={faXmark} fontSize={28} color='white' style={{fontWeight: 'bolder'}}  /> </button>
                </div>
                <div className='help flex flex-row'>
                  <button className='buttonPhotoView'
                  onClick={() => {}}>  <FontAwesomeIcon icon={faXmark} fontSize={28} color='white' style={{fontWeight: 'bolder'}}  /> </button>
                </div>
              </div> */}
            </div>
          </div> 
        </Draggable> : application.type === 'dllView' ? <Draggable>
          <div onClick={(e) => {handleClickOpenApplication(e, application.id)}}
          className={`${application.minimized ? ' hidden ' : ' absolute '} ${application.active ? 'z-[30]' : 'z-[20]'} basicwindow notepad rounded-10`}>
          <div className='appTop flex flex-row px-2'>
            <div className='leftGroup flex flex-row w-fit'>
              <img src={application.icon} height={25} width={20} className='mr-2'/>
              <p className='text-white font-bold'>{application.name}</p>
            </div>
            <div className='buttonGroup flex flex-row w-auto gap-1'>
              <button className='topButton minimize' 
              onClick={(e) => {handleClickTopWindowPopup("min", application.id)}}>
                <FontAwesomeIcon icon={faWindowMinimize} fontSize={18} color='white' style={{fontWeight: 'bolder'}} />
              </button>
              <button className='topButton maximize' 
              onClick={(e) => {handleClickTopWindowPopup("max", application.id)}}>
                <FontAwesomeIcon icon={faWindowMaximize} fontSize={24} color='white' style={{fontWeight: 'bolder'}} inverse/>
              </button>
              <button className='topButton close' 
              onClick={(e) => {handleClickTopWindowPopup("close", application.id)}}>
                <FontAwesomeIcon icon={faXmark} fontSize={28} color='white' style={{fontWeight: 'bolder'}}  />
              </button>
            </div>
          </div>
            {/* <Uptoolbar icon={application.icon} name={application.name} id={application.id} onClick={closeClick}/> */}
            <div className='flex flex-row appOptions py-1 gap-4 pl-4'>
              <button disabled>File</button>
              <button disabled>Edit</button>
              <button disabled>View</button>
              <button disabled>Favorite</button>
              <button disabled>Tools</button>
              <button disabled>Help</button>
            </div>
            <div className='topDataHeader justify-around grid grid-cols-12 mb-3'>
              <button className='container col-span-3 topExpBtn'>Company</button>
              <button className='container col-span-3 topExpBtn'>Function</button>
              <button className='container col-span-3 topExpBtn'>In</button>
              <button className='container col-span-3 topExpBtn'>Out</button>
            </div>
            <div className='dataCompanyInfo flex flex-col bg-white mx-1 py-2'>
              <button className={`grid grid-cols-12 tabJobButton ${tabJob === 0 ? 'active' : ''} ` } onClick={() => setTabJob(0)}>
                <div className='container col-span-3 companyInfo text-left'> Kokar Automação Residencial</div>
                <div className='container col-span-3 companyInfo text-left'> Developer</div>
                <div className='container col-span-3 companyInfo text-center'> 06/2018</div>
                <div className='container col-span-3 companyInfo text-center'> 07/2023</div> 
              </button>

              <button className={`grid grid-cols-12 tabJobButton ${tabJob === 1 ? 'active' : ''} ` } onClick={() => setTabJob(1)}>
                <div className='container col-span-3 companyInfo text-left'> LBN Automação</div>
                <div className='container col-span-3 companyInfo text-left'> Developer</div>
                <div className='container col-span-3 companyInfo text-center'> 08/2016</div>
                <div className='container col-span-3 companyInfo text-center'> 03/2018</div> 
              </button>

              <button className={`grid grid-cols-12 tabJobButton ${tabJob === 2 ? 'active' : ''} ` } onClick={() => setTabJob(2)}>
                <div className='container col-span-3 companyInfo text-left'> SEDU</div>
                <div className='container col-span-3 companyInfo text-left'> Trainee Developer</div>
                <div className='container col-span-3 companyInfo text-center'> 02/2014</div>
                <div className='container col-span-3 companyInfo text-center'> 02/2016</div> 
              </button>
            </div>
            <div className="text-areaNotepadDiv w-full my-1 px-1">
              <textarea rows="12" spellcheck="false" className={`areaNotepad w-full p-2 min-h-full ${tabJob === 0 ? ' ' : ' hidden '}`}>{
                `- Responsible for Frontend development, coordination and decision making.
- Design, Code, Implementation, Maintenance of Mobile Application and internal tools such as dashboards and interfaces, using responsive development on top of technical UI and UX analyses.
- Agile project management, using SCRUM and MVP methodologies
                `
              }</textarea>

              <textarea rows="12" spellcheck="false" className={`areaNotepad w-full p-2 min-h-full ${tabJob === 1 ? ' ' : ' hidden '}`}>{
                `- Programmer Frontend/Mobile Developer Automation Software Application.
- Responsive Design
- Implementation/maintenance of solutions aimed at the company's mobile application.
- Update of software and application information in the respective stores (App Store & Play Store)
                `
              }</textarea>

              <textarea rows="12" spellcheck="false" className={`areaNotepad w-full p-2 min-h-full ${tabJob === 2 ? ' ' : ' hidden '}`}>{
                `- Providing technical support on software and hardware, maintenance on computer networks, backup copies, electronic mail configuration, keeping Operating Systems up to date.
- Assistance in data collection, study of use cases for development of new internal and external solutions.
- Assistance in the development and maintenance of the government website
- Implementation/Development of systems
                `
              }</textarea>
            </div>
          </div> 
        </Draggable> : application.type === 'dllView' ? <Draggable>
          <div onClick={(e) => {handleClickOpenApplication(e, application.id)}}
          className={`${application.minimized ? ' hidden ' : ' absolute '} ${application.active ? 'z-[30]' : 'z-[20]'} basicwindow notepad rounded-10`}>
          <div className='appTop flex flex-row px-2'>
            <div className='leftGroup flex flex-row w-fit'>
              <img src={application.icon} height={25} width={20} className='mr-2'/>
              <p className='text-white font-bold'>{application.name}</p>
            </div>
            <div className='buttonGroup flex flex-row w-auto gap-1'>
              <button className='topButton minimize' 
              onClick={(e) => {handleClickTopWindowPopup("min", application.id)}}>
                <FontAwesomeIcon icon={faWindowMinimize} fontSize={18} color='white' style={{fontWeight: 'bolder'}} />
              </button>
              <button className='topButton maximize' 
              onClick={(e) => {handleClickTopWindowPopup("max", application.id)}}>
                <FontAwesomeIcon icon={faWindowMaximize} fontSize={24} color='white' style={{fontWeight: 'bolder'}} inverse/>
              </button>
              <button className='topButton close' 
              onClick={(e) => {handleClickTopWindowPopup("close", application.id)}}>
                <FontAwesomeIcon icon={faXmark} fontSize={28} color='white' style={{fontWeight: 'bolder'}}  />
              </button>
            </div>
          </div>
            {/* <Uptoolbar icon={application.icon} name={application.name} id={application.id} onClick={closeClick}/> */}
            <div className='flex flex-row appOptions py-1 gap-4 pl-4'>
              <button disabled>File</button>
              <button disabled>Edit</button>
              <button disabled>View</button>
              <button disabled>Favorite</button>
              <button disabled>Tools</button>
              <button disabled>Help</button>
            </div>
            <div className="text-areaNotepadDiv w-full my-1 px-1">
              <textarea rows="14" spellcheck="false" className='areaNotepad w-full px-2'>{
                ` I am a software developer passionate about HTML, CSS, styling and everything that involves the interface between the computer and the user, better known as Frontend.
  Graduated in systems analysis and development, my best quality is finding, working around or solving problems (problem-driven, solution-driven).
  I really like places that are open to suggestions, I believe that we professionals study and live within the area, looking for better solutions to real problems, to improve processes and solutions.`
              }</textarea>
            </div>
          </div> 
        </Draggable> : application.type === 'outlookCard' ?
          <Draggable>
          <div onClick={(e) => {handleClickOpenApplication(e, application.id)}}
          className={`${application.minimized ? ' hidden ' : ' absolute '} ${application.active ? 'z-[30]' : 'z-[20]'} basicwindow notepad rounded-10`}>
          <div className='appTop flex flex-row px-2'>
            <div className='leftGroup flex flex-row w-fit'>
              <img src={application.icon} height={25} width={20} className='mr-2'/>
              <p className='text-white font-bold'>{application.name}</p>
            </div>
            <div className='buttonGroup flex flex-row w-auto gap-1'>
              <button className='topButton minimize' 
              onClick={(e) => {handleClickTopWindowPopup("min", application.id)}}>
                <FontAwesomeIcon icon={faWindowMinimize} fontSize={18} color='white' style={{fontWeight: 'bolder'}} />
              </button>
              <button className='topButton maximize' 
              onClick={(e) => {handleClickTopWindowPopup("max", application.id)}}>
                <FontAwesomeIcon icon={faWindowMaximize} fontSize={24} color='white' style={{fontWeight: 'bolder'}} inverse/>
              </button>
              <button className='topButton close' 
              onClick={(e) => {handleClickTopWindowPopup("close", application.id)}}>
                <FontAwesomeIcon icon={faXmark} fontSize={28} color='white' style={{fontWeight: 'bolder'}}  />
              </button>
            </div>
          </div>
            {/* <Uptoolbar icon={application.icon} name={application.name} id={application.id} onClick={closeClick}/> */}
           <div className='px-3 mb-3'>
              <div className='tabs flex flex-row mt-2'>
                <button className={`tabButton summary active`}>Summary</button>
                <button className={`tabButton name `}>Name</button>
                <button className={`tabButton home `}>Home</button>
                <button className={`tabButton business `}>Business</button>
                <button className={`tabButton personal `}>Personal</button>
                <button className={`tabButton other `}>Other</button>
                <button className={`tabButton netmeeting `}>NetMeeting</button>
                <button className={`tabButton digitalids `}>Digital IDs</button>
              </div>
              <div className='fields bg-[#efefef]'>
                <div className='header'>

                </div>
                <div className='fieldsValues container mt-4'>
                  <div className='grid grid-cols-12 gap-2 lineGrid'>
                    <div className='container col-span-4 text-right'>Name:</div>
                    <div className='container col-span-8'>Edson Filho</div>
                  </div>
                  <div className='grid grid-cols-12 gap-2 lineGrid'>
                    <div className='container col-span-4 text-right'>Email Address:</div>
                    <div className='container col-span-8'>edsonfilho10@gmail.com</div>
                  </div>
                  <div className='grid grid-cols-12 gap-2 lineGrid'>
                    <div className='container col-span-4 text-right'>Home Phone:</div>
                    <div className='container col-span-8'></div>
                  </div>
                  <div className='grid grid-cols-12 gap-2 lineGrid'>
                    <div className='container col-span-4 text-right'>Pager:</div>
                    <div className='container col-span-8'></div>
                  </div>
                  <div className='grid grid-cols-12 gap-2 lineGrid'>
                    <div className='container col-span-4 text-right'>Mobile:</div>
                    <div className='container col-span-8'>+351 933 019 954</div>
                  </div>
                  <div className='grid grid-cols-12 gap-2 lineGrid'>
                    <div className='container col-span-4 text-right'>Personal Web Page:</div>
                    <div className='container col-span-8'><a href='https://www.github.com/eddskt' target='_blank' rel="noreferrer">Github</a></div>
                  </div>
                  <div className='grid grid-cols-12 gap-2 lineGrid'>
                    <div className='container col-span-4 text-right'>Business Phone:</div>
                    <div className='container col-span-8'></div>
                  </div>
                  <div className='grid grid-cols-12 gap-2 lineGrid'>
                    <div className='container col-span-4 text-right'>Business Fax:</div>
                    <div className='container col-span-8'></div>
                  </div>
                  <div className='grid grid-cols-12 gap-2 lineGrid'>
                    <div className='container col-span-4 text-right'>Job Title:</div>
                    <div className='container col-span-8'>Developer</div>
                  </div>
                  <div className='grid grid-cols-12 gap-2 lineGrid'>
                    <div className='container col-span-4 text-right'>Department:</div>
                    <div className='container col-span-8'>Frontend</div>
                  </div>
                  <div className='grid grid-cols-12 gap-2 lineGrid'>
                    <div className='container col-span-4 text-right'>Office:</div>
                    <div className='container col-span-8'></div>
                  </div>
                  <div className='grid grid-cols-12 gap-2 lineGrid'>
                    <div className='container col-span-4 text-right'>Company Name:</div>
                    <div className='container col-span-8'></div>
                  </div>
                  <div className='grid grid-cols-12 gap-2 lineGrid mb-4'>
                    <div className='container col-span-4 text-right'>Business Web Page:</div>
                    <div className='container col-span-8'></div>
                  </div>
                </div>
              </div>
           </div>
          </div> 
        </Draggable> : 
          application.type === 'paint' ?
          <Draggable>
          <div onClick={(e) => {handleClickOpenApplication(e, application.id)}}
          className={`${application.minimized ? ' hidden ' : ' absolute '} ${application.active ? 'z-[30]' : 'z-[20]'} basicwindow notepad rounded-10`}>
          <div className='appTop flex flex-row px-2'>
            <div className='leftGroup flex flex-row w-fit'>
              <img src={application.icon} height={25} width={20} className='mr-2'/>
              <p className='text-white font-bold'>{application.name}</p>
            </div>
            <div className='buttonGroup flex flex-row w-auto gap-1'>
              <button className='topButton minimize' 
              onClick={(e) => {handleClickTopWindowPopup("min", application.id)}}>
                <FontAwesomeIcon icon={faWindowMinimize} fontSize={18} color='white' style={{fontWeight: 'bolder'}} />
              </button>
              <button className='topButton maximize' 
              onClick={(e) => {handleClickTopWindowPopup("max", application.id)}}>
                <FontAwesomeIcon icon={faWindowMaximize} fontSize={24} color='white' style={{fontWeight: 'bolder'}} inverse/>
              </button>
              <button className='topButton close' 
              onClick={(e) => {handleClickTopWindowPopup("close", application.id)}}>
                <FontAwesomeIcon icon={faXmark} fontSize={28} color='white' style={{fontWeight: 'bolder'}}  />
              </button>
            </div>
          </div>
            {/* <Uptoolbar icon={application.icon} name={application.name} id={application.id} onClick={closeClick}/> */}
            <div className='flex flex-row appOptions py-1 gap-4 pl-4'>
              <button disabled>File</button>
              <button disabled>Edit</button>    
              <button disabled>View</button>
              <button disabled>Favorite</button>
              <button disabled>Tools</button>
              <button disabled>Help</button>
            </div>
            <div className="text-areaNotepadDiv w-full my-1 px-1">
              <textarea rows="14" spellcheck="false" className='areaNotepad w-full px-2'>{
                ` `
              }</textarea>
            </div>
          </div> 
        </Draggable> :
          <></> : 
          <></>
        ))
      }
    </div>
  )
}

export default Desktop