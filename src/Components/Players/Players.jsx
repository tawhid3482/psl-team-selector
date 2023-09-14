import { useState } from "react";
import Player from "../Player/Player";
import { useEffect } from "react";
import SelectPlayer from "../SelectedPlayer/SelectPlayer";

const Players = () => {
    const [players, setPlayers] = useState([])
    const [select, setSelect] = useState([])
    const [remaining, setRemaining] = useState(0)
    const [totalCost, setTotalCost] = useState(0)

    useEffect(() => {
        fetch('Ipl.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    const handlePlayer = players => {
        const isEixts = select.find(item => item.id === players.id)
        let count = players.price
        const bujet = 15
        if (isEixts) {
            return alert('already selected')
        } else {
            select.forEach(item => {
                count = count + item.price
            })
            const PriceRemaining = bujet - count
            if (count > 15) {
                alert('your money is finish')
            } else {
                setTotalCost(count)
                setRemaining(PriceRemaining)
            }
            const newSelect = [...select, players]
            setSelect(newSelect)
        }
    }


    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-white"> Total Player:{players.length}</h1>

            <div className="flex justify-between  gap-6">

                <div className="grid grid-cols-2 gap-8 md:w-2/3 mx-auto">
                    {
                        players.map(players => <Player key={players.id} handlePlayer={handlePlayer} players={players}></Player>)
                    }
                </div>
                <div className="md:1/3">
                    <SelectPlayer select={select} remaining={remaining} totalCost={totalCost} ></SelectPlayer>
                </div>
            </div>
        </div>
    );
};

export default Players;