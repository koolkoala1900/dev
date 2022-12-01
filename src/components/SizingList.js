import React from 'react'

const Sizes = (props) =>  {
    const { 
        setSize
    } = props;

    const sizingList = ['S', 'M', 'L', '1Size'];

    return (
        <div>
            <h4>Filter By Size: (Reclick Filter to Remove)</h4>
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
