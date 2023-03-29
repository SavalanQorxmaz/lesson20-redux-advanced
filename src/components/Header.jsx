import React from 'react'
import { connect } from 'react-redux'

const Header = (props) => {
  return (
    <div className='header-back'>

        <div className='header'>
            <div className='selected-count'>
                <span>{props.selectedCount}</span>
                <i className="fa-solid fa-basket-shopping"></i>
            </div>
        </div>
    
    </div>
  )
}


const mapStateToProps = (state)=>{
return {
  selectedCount: state.selectedCount
}
}

export default connect(mapStateToProps)(Header)