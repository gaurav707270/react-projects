import React from 'react'

export default function TaskListNumber() {
    return (
        <>
            <div className=' w-100 d-flex justify-content-center'>
                <div className=' mt-3 w-50'>



                    <div className=' 50 d-flex '>
                        <div className=' bg-primary p-2 w-50 m-2 rounded rounded-3'>
                            <h2>0</h2>
                            <p>New Task</p>
                        </div>

                        <div className=' bg-info p-2 w-50 m-2 rounded rounded-3'>
                            <h2>3</h2>
                            <p>Completed</p>
                        </div>
                    </div>



                    <div className=' 50  d-flex'>
                        <div className=' bg-warning p-2 w-50 m-2 rounded rounded-3'>
                            <h2>0</h2>
                            <p>Accepted</p>
                        </div>

                        <div className=' bg-danger p-2 w-50 m-2 rounded rounded-3'>
                            <h2>1</h2>
                            <p>Failed</p>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}
