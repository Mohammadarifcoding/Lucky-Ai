import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[1580px] mx-auto lg:px-10 md:px-8 sm:px-5 px-2'>
            {children}
        </div>
    );
};

export default Container;