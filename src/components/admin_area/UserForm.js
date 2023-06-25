import React from 'react'

const UserForm = () => {
    return (
        <div>


            <div className="container">
                <div className="wrapper_content">
                    <div className="card_wrap">
                        <section className='dashbord_sec'>
                            <div className="table_heading">
                                user detail page
                            </div>

                            <table class="table" id='dashbord'>
                                <thead>
                                    <tr>
                                        <th scope="col">order id</th>
                                        <th scope="col">name</th>
                                        <th scope="col">description</th>
                                        <th scope="col">price</th>
                                        <th scope="col">action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>
                                            <div className="actions">
                                                <div className="dropdown">
                                                    <button className='btn btn_main' >actions</button>
                                                    <div className="menu_drop_down" >
                                                        <ul className='orderlist'>
                                                            <li>
                                                                <a href="#">
                                                                    add a product
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    update a product
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    delete a product
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </section>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserForm;