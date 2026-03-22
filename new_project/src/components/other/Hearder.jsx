import React from 'react'

export default function Hearder() {
    return (
        <>
        
            <div className=' d-flex  justify-content-between p-4 bg-secondary '>
                <div>
                    <h3>
                        Hellow <br /> Gaurav 👋
                    </h3>
                </div>
                <div className=' d-flex align-items-center '>
                    <button style={{ width: 100 }} className=' rounded rounded-3 btn btn-danger p-2 '> Log Out</button>
                </div>

            </div >

        </>
    )
}
