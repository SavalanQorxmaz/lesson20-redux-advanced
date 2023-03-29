import React from 'react'
import { connect } from 'react-redux'

const Component1 = (props) => {
  return (
    <div>
        <button onClick={()=>{
            props.dispatch({type: 'SAY_HELLO'})
        }}> click me</button>
    </div>
  )
}

function mapStateToProp(state){
    return{
        sayHello: state.sayHello
    }
}

export default connect(mapStateToProp)( Component1)