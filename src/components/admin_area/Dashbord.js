import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../admin_area/style.css";
import Sidebar from "../admin_area/Sidebar";
import BarChaaat from "./Chart/BarChaat";
import $ from "jquery";
import PieChart from "./Chart/PieChart";
import Json from "../products/Json";
import { AiOutlineSearch } from "react-icons/ai";
import { FaFilter } from "react-icons/fa"
const Dashbord = () => {
  const [search, setsearch] = useState('');
  const [dataTable, setdataTable] = useState(Json);
  const [data, setdata] = useState([]);
  const [cart, setcart] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const numPages = Math.ceil(dataTable.length / recordsPerPage);
  const [show, setShow] = useState(false);
  const [first, setfirst] = useState({});
  const  handleShow = (x) => {
    setShow(true);
  
    const addProduct=dataTable.filter((item)=>item.id === x);
    setcart(addProduct)
  
  }
  console.log(cart)
  const handleClose = () => setShow(false);
  const handleAdd = (x) => {
    const addProduct=dataTable.filter((item)=>item.id === x)
console.log(addProduct)
  };
  
  const handleUpdate = () => {
    // Your code to update a record
  };
  
  const handleDelete = () => {
    // Your code to delete a record
  };
  
  

  function crud() {
    $(".menu_drop_down").toggleClass("active");
  }

  // Get current records
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = dataTable.slice(indexOfFirstRecord, indexOfLastRecord);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const uniqueCategories = dataTable.reduce((acc, curr) => {
    acc[curr.category] = curr.category;
    return acc;
  }, {});

  const categories = Object.keys(uniqueCategories);
  const filterByCategory = (category) => {
    let categ = dataTable.filter(item => item.category === category);

    setdataTable(categ);

  }

  const filter = (x) => {
    const filters = data.filter((item) => item.category === x);
    if (filters.length === 0) {
      setfirst(data);
    } else {
      setfirst(filters)

    }
  }

  const filterall = () => {

  }
  return (
    <div>
      <div className="container">
        <div className="wrapper_content">
     
          <div className="row">
            <div className="col-sm-6">
              <div className="card_wrap">
                <div className="heading_chart">order details</div>
                <div className="chart">
                  <BarChaaat />
                </div>
              </div>
            </div>

            {/* graph */}
            <div className="col-sm-6">
              <div className="card_wrap">
                <div className="heading_chart">order details</div>
                <div className="chart">
                  <PieChart />
                </div>
              </div>
            </div>
          </div>
          <div className="card_wrap">
        <div className="row" id='row_reverse'>
          <div className="col-sm-2">

            <div className="">
              <div class="dropdown">
                <button class="btn btn_main dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FaFilter />  category 
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" onClick={() => filterall()}>All</a></li>
                  {categories.map((category, index) => (
                    <li key={index}><a class="dropdown-item" onClick={() => filterByCategory(category)}>{category}</a></li>
                  ))}
                </ul>




              </div>
            </div>
          </div>
          <div className="col-sm-10">
            <div className="search_filter">
              <div class="input-group ">
                <input type="text" onChange={(e) => setsearch(e.target.value)} class="form-control" id="filter_category" placeholder="Search Product" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn_main" type="button" id="button-addon2">search <AiOutlineSearch /></button>
              </div>

            </div>
          </div>
        </div>
        </div>
          <div className="card_wrap">
            <section className="dashbord_sec">
              <div className="table_heading">order detail page</div>

              <table class="table" id="dashbord">
                <thead>
                  <tr>
                    <th scope="col">order id</th>
                    <th scope="col">image</th>
                    <th scope="col">name</th>
                    <th scope="col">description</th>
                    <th scope="col">price</th>
                    <th scope="col">action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRecords &&
                    currentRecords.map((item) => {
                      return (
                        <>
                          <tr>
                            <th scope="row">{item.id}</th>
                            <td>
                              <img
                                src={item.image}
                                className="img-fluid img_table w-100"
                                alt=""
                              />
                </td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>
                             <div className="editting_btn">
                             <div class="dropdown">
  <a class="btn btn_main dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  actions
  </a>

  <ul class="dropdown-menu">
  <li><button className="dropdown-item"   onClick={()=>handleShow(item.id)}>add</button></li>
<li><button className="dropdown-item"  onClick={()=>handleShow(item.id)}>update</button></li>
<li><button className="dropdown-item"  onClick={()=>handleShow(item.id)}>delete</button></li>

  </ul>
</div>
                             </div>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
              </table>

                        {/* Pagination */}
          <nav aria-label="Page navigation example">
            <ul class="pagination">
            {Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
  <li
    key={page}
    className={
      currentPage === page
        ? "page-item active"
        : "page-item"
    }
  >
    <a
      className="page-link"
      onClick={() => paginate(page)}
    >
      {page}
    </a>
  </li>
))}
            </ul>
          </nav>


            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
       
        </Modal.Header>
        <Modal.Body>
        {
          cart &&  cart.map((item ,index)=>{
          return(
            <>
      <form action="">
      <div class="mb-3">

  <image src={item.image} class="img-fluid w-100 " />
</div>
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Image</label>
  <input type="file" class="form-control" id="exampleFormControlInput1" placeholder="Upload A Image" />
</div>
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">title</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name Of Product" value={item.title}/>
</div>
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">description</label>
  <textarea class="form-control" id="textarea" rows="3" value={item.description}
></textarea>
</div>
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">price</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Price Of Product" value={item.price}/>
</div>
<div className="main_btn">
<button className='btn btn_main' onClick={()=>handleAdd(item.id)}> add product</button>
<button className='btn btn_main' onClick={()=>handleUpdate(item.id)}> update product</button>
<button className='btn btn_main' onClick={()=>handleDelete(item.id)}> remove product</button>
</div>
      </form>
      </>
          )
        })
      }
        </Modal.Body>
        <Modal.Footer>
        
     <button className='btn btn_form btn_main' onClick={handleClose}>Close the Pop Up</button>
        </Modal.Footer>
      </Modal>
     
        </section>
      </div>
    </div>
  </div>
</div>
);
};

export default Dashbord;
