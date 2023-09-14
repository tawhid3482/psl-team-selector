import SelectPlayer from "../SelectedPlayer/SelectPlayer";

const Player = ({ players, handlePlayer }) => {
    return (
        <div className="">
            <div className="">
                <div className="card w-96  bg-transparent text-white border-2 border-gray-400 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img  src={players.player_img} alt="Shoes" className="rounded-xl w-20 " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl">{players.name}</h2>


                        <div className=" gap-4 text-2xl ">
                            <p className="font-medium">Price:$ {players.price} million</p>
                            <p>Player Style: {players.playing_style}</p>
                        </div>
                        <h2 className="text-xl">Country: {players.country_player}</h2>
                        <div className="card-actions">
                            <button onClick={() => handlePlayer(players)} className="btn btn-primary">Select</button>
                            
                        </div>
                    </div>
                </div>
                
            </div>

            
        </div>
    );
};

export default Player;