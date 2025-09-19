import React from 'react'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../../utils/spinner'

const HomePage = () => {
  const {isLoading } = useSelector((state)=>state.auth)
  return (<>
    
    {isLoading ? <LoadingSpinner></LoadingSpinner> : <div>HomePage</div>}
    </>
    
    
  )
}

export default HomePage