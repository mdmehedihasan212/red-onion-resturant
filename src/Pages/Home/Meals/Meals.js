import React from 'react';
import './Meals.css';
import useBreakFast from '../../Hooks/useBreakFast';

const Meals = () => {
    const [breakfast] = useBreakFast([]);
    return (
        <section className='meals-container g-2'>
            {
                breakfast.map(bf =>
                    <div className='meal-cart border border-primary mx-auto mt-4'>
                        <img src={bf.picture} alt="" />
                        <div className="meal-details mt-5">
                            <p>{bf.name}</p>
                            <p>{bf.about}</p>
                            <p>${bf.price}</p>
                        </div>
                    </div>
                )
            }
        </section>
    );
};

export default Meals;