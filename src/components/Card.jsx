import React, { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'

const Card = (props) => {
    // console.log(props)
    const {category, title, image, price, description} = props.data

    const [isSelected, setIsSelected] = useState(false)

    const [iconStyle, setIconStyle] = useState({
        color: 'black',
        fontSize: '20px'
    })

    useEffect(()=>{
        if(isSelected){
            setIconStyle({
                color: 'green',
                fontSize: '30px'
            })
        }
        else{
            setIconStyle({
                color: 'black',
                fontSize: '20px'
            })
        }
    }, [isSelected])

  return (
    <div className='card'>
        <img src={image} alt="" />
        <h4>{category}</h4>
        <h3>{title.slice(0,20)}...</h3>
        <p>{description.slice(0,50)}...</p>
        <h2>{price}$</h2>
        <div className='card-advanced'>
        <i onClick={()=>{
            setIsSelected(!isSelected);
            props.dispatch({type: 'SELECT',
            isSelect: !isSelected
        })
            }} style={iconStyle} className="fa-solid fa-basket-shopping"></i>
        </div>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return {
        sendMessage: state.sendMessage
}
    }

export default connect(mapStateToProps) (Card)