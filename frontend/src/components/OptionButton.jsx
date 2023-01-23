import React from 'react'

import Overlay from './Overlay'

function OptionButton({Icon, OptionContent, iconStyles}) {
  return (
    <div>
        <Icon className={"cursor-pointer" + " " + iconStyles} />
        <Overlay />
    </div>
  )
}

export default OptionButton