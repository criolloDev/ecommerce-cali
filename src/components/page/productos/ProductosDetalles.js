import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from "../../../context/DataProvider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";

export const ProductosDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([])
  const [url, setUrl]= useState(0)
  const [images, setImages] = useState('')
  const params = useParams();
  let item = 0;

  useEffect(() =>{
    console.log('re render' , params.id)
    item=0;
    productos.map(producto =>{
      if(producto.id === parseInt(params.id)){
        setDetalle(producto)
        setUrl(0)
      }
    })
  },[params.id, detalle])

  console.log(url)

  useEffect(() =>{
    const values = `${detalle.img1}${url}${detalle.img2}`;
    setImages(values) 
  },[url, params.id])

  const handleInput = (e) =>{
  const number = e.target.value.toString().padStart(2,'01')
   setUrl(number)
  }

  if(detalle.length < 1) return null;

  return (
    <>
    {
        <div className="detalles">
          <h2>{detalle.title}</h2>
          <p className="price">${detalle.price}</p>
          <div className="grid">
          <p className="nuevo">Nuevo</p>
          <div className="tamano">
            <select placeholder="Tamaño" >
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
              <option value="1">6</option>
              <option value="1">7</option>
              <option value="1">8</option>
            </select>
            <p>Tamaño</p>
          </div>
          </div>
          <button onClick={() => addCarrito(detalle.id)}>
            Añadir al carrito
          </button>
          
          {
            url ? <img src={images} className="animate__animated animate__fadeInLeft" alt={detalle.title}/> : <img src={detalle.image} className="animate__animated animate__fadeInLeft" alt={detalle.title}/>
          }
          <input type="range" min="1" max="36" step="1" value={url} onChange={handleInput} />
          <div className="description">
          <p><b>Description: </b> El Nike Air Rubber Dunk, diseñado por el fundador de Off-White, 
            Virgil Abloh, aterrizó en 2020, presentando el primer calzado deportivo exclusivo del 
            diseñador con el gigante de la ropa deportiva. Este colorway UNC es uno de los tres del 
            paquete.
          </p>
          <br/>
          <p>La parte superior de las Nike Air Rubber Dunk UNC está compuesta de caucho, 
            pieles sintéticas y malla. Los bordes sin rematar se pueden encontrar en la lengüeta, 
            trayendo un elemento deconstruido que Virgil Abloh es conocido por agregar a sus 
            colaboraciones con Nike. Finalmente, la entresuela continúa con el tema de la goma, 
            ya que se colocan cubiertas de goma alrededor de la unidad Air Bubble.
          </p>
          </div>   
        </div>
   
    }
    <h2 className="relacionados">Productos relacionados</h2>
    <div className="productos">
      {
        productos.map((producto)=>{
          if((item < 6)&&(detalle.category === producto.category)){
            item++;
          return <ProductoItem 
          key={producto.id}
          title={producto.title}
          image={producto.image}
          category={producto.category}
          price={producto.price}
          id={producto.id}
          />
          }
          
        
        })
      }
     
    </div>
    </>
  )
}
