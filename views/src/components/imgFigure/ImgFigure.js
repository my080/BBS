import 'core-js/fn/object/assign';
import React from 'react';

class ImageFigure {
    constructor();
    getElement(imgObj){
        var figure =
            (<figure>
                <img src="{imgObj.fileName}"/>
                <figcaption>
                    <h2>{imgObj.title}</h2>
                </figcaption>
            </figure>);
        return figure;
    }
}

// var ImageFigure = React.createClass({
//
//
//
//     render(imgObj){
//         var figure =
//             (<figure>
//                 <img src="{imgObj.fileName}"/>
//                 <figcaption>
//                     <h2>{imgObj.title}</h2>
//                 </figcaption>
//             </figure>);
//         return figure;
//     }
// });

module.exports = ImageFigure;