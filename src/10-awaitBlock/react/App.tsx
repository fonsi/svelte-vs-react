import React, { CSSProperties, ReactElement, useState} from 'react';
import { getDriverSeasonsByTeam } from "../common/getDriverSeasonsByTeam";

const listStyles: CSSProperties = {
    listStyleType: 'none',
}

export const App = (): ReactElement => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [seasons, setSeasons] = useState<string[]>([]);

    const teamChangeHandler = async (team: string): Promise<void> => {
        try {
            setError('');
            setSeasons([]);
            setIsLoading(true);

            setSeasons(await getDriverSeasonsByTeam(team));
        } catch (e) {
            setError((e as Error).message);
        } finally {
            setIsLoading(false);
        }
    }

    return <div>
        <p>Seasons Alonso has driven for each team</p>
        <div>
            <button onClick={() => { teamChangeHandler('renault') }}>Renault</button>
            <button onClick={() => { teamChangeHandler('mclaren') }}>McLaren</button>
            <button onClick={() => { teamChangeHandler('ferrari') }}>Ferrari</button>
            <button onClick={() => { teamChangeHandler('redbull') }}>Red Bull</button>
        </div>
        <br />
        {
            isLoading ?
                <span><small>...loading</small></span> :
                <ul style={listStyles}>
                    {
                        seasons.map((season) => <li key={season}>{season}</li>)
                    }
                </ul>
        }
        {
            error ? <span>{error}</span> : null
        }
    </div>;
}
