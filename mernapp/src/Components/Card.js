import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';
export default function Card(props) {

    const priceRef = useRef();
    let dispatch = useDispatchCart();
    let data = useCart();
    let options = props.options;
    let priceOptions = Object.keys(options);

    const [Qty,setQty] = useState(1)
    const [size,setSize] = useState("")

    const handleAddToCart = async ()=>{

        let food=[]
        for(const item of data){
            if(item.id===props.foodItem._id){
                food=item

                break;
            }
        }

        if(food!==[]){
            if(food.size===size){
                await dispatch({type:"UPDATE",id:props.foodItem._id,price:finalPrice,qty:Qty})
                return
            }
            else if(food.size!==size){
                await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:Qty,size:size})
                return
        //await console.log(data); 
        }
        return
        }
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:Qty,size:size}) 
    }
    let finalPrice = Qty*parseInt(options[size]);
    useEffect(()=>{
        setSize(priceRef.current.value)
    },[])
    return (
        <div>
            <div className="card mt-3" style={{ "width": "16rem", "maxHeight": "360px" }}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." style = {{height:"120px", objectFit :"fill"}}></img>
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <div className='container w-10'>
                        <select className='m-2 h-100 bg-success' onChange={(e)=>{setQty(e.target.value)}}>
                            {Array.from(Array(10), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-success' ref={priceRef} onChange={(e)=>{setSize(e.target.value)}}>
                            {priceOptions.map((data)=>{
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>

                        <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div></div>
                        <hr></hr>
                        <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
