import React, { useState, useCallback,useEffect } from 'react';
import AuthConsumer from '../../auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Input, Form } from "antd";
import { duckProfile, whiteLogo } from '../../static';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faQuestion, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import loginSound from "../../assets/winxp.mp3"
//import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Login = () => {
  const [authed, dispatch] = AuthConsumer();
  const [form] = Form.useForm();

  let navigate = useNavigate();

  const handleSubmit = useCallback(
    // (values) => {
    //  //dispatch(login(values, () => navigate('/')));
    // },
    // [history, dispatch],
  );

  const turnOff = () => {
    window.close()
  }


  function goToDesktop(){
    const audio = new Audio(loginSound);
    audio.addEventListener('ended', () => {
      dispatch({type: 'login'});
      navigate('/', {replace: true})
    });
    audio.play();
  }
  console.log(authed);

  return (
    <div className='flex flex-col h-screen w-screen bg-blueDark overflow-hidden'>
      <div className='h-32 w-screen bg-blue-dark'></div>
      <div className='h-full'>
        <Row className='bg-blueLight h-full' gutter={8}>
          <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12} className='
           flex min-md:justify-end sm:justify-center items-center
          '>
            <div className='flex flex-col min-sm:mr-8 sm:items-center items-end gap-8'>
              <img src={whiteLogo} className='h-[128px] object-contain'/>
              <p className='w-4/5 font-normal text-2xl sm:text-center min-sm:text-right text-white'>Para começar, clique no seu nome de usuário</p>
            </div>
            <div className='w-[1px] h-4/5 bg-white bg-gradient-to-b from-blueLight via-white to-blueLight'>
            </div>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12} className='sm:h-1/2 min-md:h-full flex items-center w-fit'>
            <div className='pl-6 w-auto'>
              <div className='flex flex-row h-[98px] p-[1px] rounded-6 bg-gradient-to-r from-white to-blueLight shadow-sm'>
                <div className='flex flex-row p-2 rounded-6 whiteBorder bg-gradient-to-r from-blueDark to-blueLight w-full h-full'>

                  <div className='yellowInnerBorder rounded-6 h-fit'>
                    <img src={duckProfile} className='h-20 w-20 object-cover rounded-4 p-[3px]'/>
                  </div>
                  <div className='pl-4'>
                    <p className='text-xl text-white'>Edson Filho</p>
                    <div className='flex flex-row login  w-full items-center'>
                    <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">
                      <Form.Item
                        name="userName"
                        rules={[{ message: 'Por favor, insira sua senha!' }]}
                        initialValue=""
                        label="Digite sua senha"
                        className="[&>div>div>label]:text-sm [&>div>div>label]:text-white [&>div>div>label]:font-medium mt-4
                        [&>div>div.ant-form-item-label]:p-0 [&>div>div.ant-form-item-label>label]:text-white [&>div>div.ant-form-item-label>label]:font-light"
                      >
                        <Input placeholder="" style={{height: 38, padding: 2}} />
                      </Form.Item>
                    </Form>
                    <button className='ml-2 shadow-md' onClick={() => goToDesktop()}>
                      <div className='flex bg-gradient-to-b from-green-500 to-green-600 h-10 w-10 rounded-6 justify-center items-center p-1 border-1 border-grayPrimary 
                        shadow-[inset_2px_4px_3px_1px_rgba(255,255,255,0.4)]'>
                        
                        <FontAwesomeIcon icon={faArrowRight} fontSize={30} color='white' style={{fontWeight: 'bolder'}}/>
                      </div>
                    </button>
                    <button className='ml-2 shadow-md'>
                      <div className='flex bg-gradient-to-b from-blueLight to-blueDark h-10 w-10 rounded-6 justify-center items-center p-1 border-1 border-grayPrimary 
                        shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.4)]'>
                        <FontAwesomeIcon icon={faQuestion} fontSize={30} color='white' style={{fontWeight: 'bolder'}} />
                      </div>
                    </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className='h-32 w-screen bg-blue-dark bottom-0'>
        <Row className='h-full'>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <button className='flex h-full items-center pl-4' onClick={() => turnOff}>
              <div className='ml-2 shadow-md'>
                <div className='flex bg-gradient-to-b from-orange-600 to-red-600 h-10 w-10 rounded-6 justify-center items-center p-1 border-1 border-grayPrimary 
                  shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.4)] border-b-1 '>
                  <FontAwesomeIcon icon={faPowerOff} fontSize={28} color='white' style={{fontWeight: 'bolder'}} />
                </div>
              </div>
              <p className='pl-3 text-2xl text-white'>Desligar o computador</p>
            </button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Login

{/* <div className='w-screen h-screen max-h-sreen overflow-hidden'>
  <div className='h-24 min-w-full bg-blueDark top-0'></div>
  <div className='bg-blueLight min-h-screen w-full pb-24'>
    <Row className='bg-red-500 h-screen' gutter={8}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className='sm:h-1/2 min-md:h-full flex min-md:justify-end sm:justify-center items-center'>
        <img src={whiteLogo} className='h-32'/>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className='sm:h-1/2 min-md:h-full flex'>
        <div>
          <p>Nome</p>
        </div>
      </Col>
    </Row>
  </div>
  <div className='h-24 min-w-full bg-blueDark bottom-0 z-20 absolute'></div>
  <button className='w-[160px] h-[40px] bg-green-500' onClick={(e) => {
    dispatch({type: 'login'});
    navigate('/', {replace: true})
  }}>
    Login
  </button>
</div> */}