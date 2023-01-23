import {useState} from 'react'

import Overlay from './Overlay'

function OptionButton({Icon, OptionContent, iconStyles}) {

  const [overlayOpen, setOverlayOpen] = useState(false);

  const toggleOverlay = (event) => {
    if(!event.target.closest("#content-container")) setOverlayOpen(!overlayOpen);
  }

  return (
    <div>
        <Icon className={"cursor-pointer" + " " + iconStyles} onClick={toggleOverlay} />
        <Overlay toggleOverlay={toggleOverlay} open={overlayOpen} Content={OptionContent} />
    </div>
  )
}

export default OptionButton