import React from 'react';
import Img from '../Media/Paysage.jpeg';

function Card() {
    return (
        <div class="flex items-center justify-center h-screen">
            <div className="container w-72 bg-white rounded-md">
                <div className="container"><img className="mx-auto w-96 rounded-t-md" src={Img} alt="paysage"/></div>
                <div className="container p-3">Sainte-Maxime est une commune française située
                                            dans le département du Var, en Provence-Alpes-Côte d'Azur. Avec 13 968 habitants
                                            en 2017, il s'agit de la ville la plus importante du golfe de Saint-Tropez.
                                            Ses habitants sont appelés les Maximois.
                </div>
                <button className="container bg-indigo-700 rounded p-1 w-max mb-3 text-gray-200
                                transition duration-500 transform hover:-translate-y-1 hover:scale-110 ">
                    Je voyage !
                </button>
        </div>
        </div>
    )
}

export default Card
