
const SelectPlayer = ({ select, remaining, totalCost }) => {
    let serial = 1;
    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl bg-blue-400 p-4 rounded-lg">Player Selected: {select.length} </h2>
                <p className="text-white text-2xl">Total Cost: $ {totalCost} million</p>
                <p className="text-white text-2xl">Remainning Money: $ {remaining} million</p>
            </div>
            <div className="text-center ">
                
                {
                    select.map(player => (
                        <p className="text-3xl text-white " key={player.id}> {serial ++}. {player.name}</p>
                    ))
                }
            </div>
        </div>
    );
};

export default SelectPlayer;