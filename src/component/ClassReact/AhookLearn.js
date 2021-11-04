import React from 'react'
import { useToggle } from 'ahooks'
import { Button } from 'antd'


export default function AhookLearn() {
  const [state, { toggle }] = useToggle();
  return (
    <React.StrictMode>
      <h3> ahook </h3>
      <div>
        <span>Current Boolean: { String(state) }</span>
        <Button 
          type="primary"
          onClick={() => {
            toggle()
          }}
        >
          Toggle
        </Button>
      </div>
        
    </React.StrictMode>
  )
}
