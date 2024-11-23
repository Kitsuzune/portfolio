import React from 'react'
import './assets/index'
const GameBird = () => {
    return (
        <div className="flex justify-center items-center h-[105vh] py-[100px] flex-col">
            <p className='text-gray-400 mb-5 text-center'> 
                Refresh the page if the game is not loaded
            </p>
            <canvas id="gameCanvas"></canvas>
        </div>
    )
}

export default GameBird