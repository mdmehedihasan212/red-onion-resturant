import React from 'react';
import useBreakFast from '../../Hooks/useBreakFast';
import './Meals.css';

const Meals = () => {
    const [breakfast] = useBreakFast([]);

    const handleToDetails = (bf) => {
        console.log('clicked', bf);
    }

    return (
        <div>
            <section className='meal-btn text-center mt-5'>
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </section>
            <section className='meals-container g-2'>
                {
                    breakfast.map(bf =>
                        <div onClick={() => handleToDetails(bf)} className='meal-cart mx-auto mt-4'>
                            <img src={bf.picture} alt="" />
                            <div className="meal-details mt-5">
                                <p className='fw-bold'>{bf.name}</p>
                                <p>{bf.about}</p>
                                <p className='fw-bold'>${bf.price}</p>
                            </div>
                        </div>
                    )
                }
            </section>
        </div>
    );
};

export default Meals;