import React from 'react'
import TarjetaColor from '../TarjetaColor/TarjetaColor'
import './Tarjeta.css'

const Tarjeta = (props) => {
  return (
    <div className='tarjeta-container' >
        {props.tarjetaColor.map((colorTarjeta) => {
                return (
                    <TarjetaColor
                        key={colorTarjeta.id}
                        colores={colorTarjeta.colors}
                        meGusta={colorTarjeta.likes}
                        date={colorTarjeta.fecha}
                        
                    />
                )
            })
        }
    </div>
  )
}

export default Tarjeta