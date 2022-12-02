import React from 'react'

const Sizes = (props) =>  {
    const { 
        setSize
    } = props;

    const sizingList = ['S', 'M', 'L', 'Accessory'];

    return (
        <div>
            <h4>Filter By Size (S, M, L) </h4>
            <h4>Filter By Accessory</h4>
            <div>
                {
                    sizingList.map((s, i) => {
                        return (
                            <button 
                                key={i}
                                className='size'
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
