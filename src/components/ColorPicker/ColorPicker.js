import React from 'react';
import { colorHandler,colorKeyPressHandler } from 'utils/helpers';

const ColorPicker = ({colors}) => {
  return (
     <div className="product-item__colors-wrapper">
          <ul className="color-list">
            {colors.map(color =>(
              <li className="color__item" key={color} >
                <span 
                onClick={colors.length > 1 ? e=>colorHandler(color, e) : undefined}
                onKeyPress={colors.length > 1 ? e=>colorKeyPressHandler(color, e) : undefined}
                disabled = {colors.length === 1}
                className="color__item-tab" 
                tabIndex="0" 
                style={{ backgroundColor: `${ color }` }} />
              </li>
            ))}
          </ul>
      </div>
  )
}

export default ColorPicker
