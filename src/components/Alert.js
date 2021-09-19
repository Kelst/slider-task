import React from 'react'
import Loader from './Loader'

export const Alert = ({ text }) => (
<div class="alert alert-danger text-center" role="alert">
 {text}
 <Loader/>
</div>
)