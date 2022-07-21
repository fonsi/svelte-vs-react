export const getDriverSeasonsByTeam = async (team: string): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            if (team === 'redbull') {
                reject(new Error('Wrong team'));
                return;
            }

            const response = await fetch(`https://ergast.com/api/f1/drivers/alonso/constructors/${team}/seasons.json`);
            const data = await response.json();

            // @ts-ignore
            resolve(data.MRData.SeasonTable.Seasons.map(season => season.season));
        }, 1000);
    });
}