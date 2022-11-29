import React from 'react'

const Sizes = ({selectedSizes, setSize}) =>  {

    const sizingList = ['S', 'M', 'L', '1Size'];

    return (
        <div>
            <h3>Sizes</h3>
            <div>
                {
                    sizingList.map((s, i) => {
                        return (
                            <button 
                                key={i}
                                className={ "size" + (selectedSizes.includes(s) ? " selected-size" : "")}
                                onClick={() => setSize(s)}
                            >
                                {s}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sizes;
