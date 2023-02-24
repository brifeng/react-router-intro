import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import Choices from './Choices';


const VendingMachine = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Choices />} />
                <Route path='/soda' element={<Soda />} />
                <Route path='/chips' element={<Chips />} />
                <Route path='/sardines' element={<Sardines />} />
            </Routes>
        </BrowserRouter>
    )
}

export default VendingMachine;