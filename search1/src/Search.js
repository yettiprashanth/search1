import React,{useState} from 'react'
import DATA from './Data'


function Search() {
  const[searchTearm,setSearchTearm]=useState('');
  return (
    <>
    
    <div className="container py-3">
    <h3 className='text-center'>SEARCH YOUR FOVORITE COTEGERY</h3><br />
    <hr />
    <div className="searchInput_container d-flex justify-content-center">
    
    <input id='searchInput' type="text" placeholder='Search Here Womens Headphones Shoes Mobile etc...' className='form-control me-2 inp' onChange={(event)=>{
      setSearchTearm(event.target.value);
    }}/>
    </div>
    <div className="container py-3">
      <h5 className='text-center mb-3'>search t-shart,womens,juwellary,mobile,headphones,shoes.etc</h5>
    <div className="row">
    {
      DATA.filter((val)=>{
        if(searchTearm===""){
          return val;
        }else if(val.category.toLowerCase().includes(searchTearm.toLowerCase())){
          return val;
        }
      }).map((val)=>{
        return (  
          <div className='col-md-3 col-sm-6 col-12 text-center mb-3'>       
 {/* <img src={val.image} className="card-img-top" alt="..."/>
 <div className="card-body mt-2">
   <h5 className="card-title">{val.title}</h5>
   <p className='card-price'>Rs:{val.price}</p>
   <p className="card-text mb-2">{val.description}</p>
  
 </div> */}
    <div className="card">
    <img src={val.image} className="card-img-top" alt="..."/>
 <div className="card-body mt-2">
   <h5 className="card-title">{val.title}</h5>
   <p className='card-price'>Rs:{val.price}</p>
   <p className="card-text mb-2">{val.description}</p>
  
 </div>
    </div>
 </div>     
        )
      })
    }
    </div>
    </div>
    
    </div>
    </>
  )
}

export default Search