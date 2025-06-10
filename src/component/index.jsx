import React from 'react'
import Header from './header/Header';
import Hero from './hero/Hero';
import Product from './product/Product';
import InputValue from './inputValue/InputValue';
import CascaderKey from './cascader/Cascader';
import FormAt from './FormAt/FormAt';
import ModalAt from './Modal/ModalAt';
import DeletApp from './deletApp/DeletApp';
import NotFound from './not-fount/NotFound';
import Main from './main/Main';
import Btn from './btn/Btn';

const MainIndex = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: "30px" }}>
    <Header/>
    <Hero/>
    <Btn/>
    <Product/>
    <InputValue/>
    <CascaderKey/>
    <FormAt/>
    <ModalAt/>
    <DeletApp/>
    <NotFound/>
    <Main/>
    </div>
  )
}

export default MainIndex