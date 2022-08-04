import React from 'react';
import "../styles/_submit-btn.scss";

type SubmitButtonProps = {
    type: string,
    children: JSX.Element,
  };


function SubmitButton( { type, children }: SubmitButtonProps ) {

    return(
        <div className='submit-btn'>
            <button>{children}</button>
        </div>
    )
}

export default SubmitButton;