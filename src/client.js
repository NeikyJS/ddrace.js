const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

class DDNet {
    async searchplayer(name) {
        this.name = name;
        let baseURL = `https://ddnet.org/players/?json2=${name}`
        let res = await fetch(`${baseURL}`)
        let resJSON = await res.json();
        if(!resJSON.player) throw new Error(`[ERROR] Cannot find user ${this.name}`);
        let lastFinish = resJSON.last_finishes[0];
        return {
            user: {
                username: this.name,
                favoritePartners: resJSON.favorite_partners,
            },
            points: {
                total: resJSON.points.total,
                rank: resJSON.points.rank,
            },
            teamRank: resJSON.team_rank,
            rank: resJSON.rank,
            pointsLastMonth: {
            points: resJSON.points_last_month.points,
            rank: resJSON.points_last_month.rank,
        },
        pointsLastWeek: {
            rank: resJSON.points_last_week,
        },
        firstMapFinish: {
            timestamp: resJSON.first_finish.timestamp,
            map: resJSON.first_finish.map,
            time: resJSON.first_finish.time,
        },
        lastFinish: {
            timestamp: lastFinish.timestamp,
            map: lastFinish.map,
            time: lastFinish.time,
            country: lastFinish.country,
            type: lastFinish.type,
        },
        typesOfMaps: {
            Novice: {
                points: resJSON.types.Novice.points,
                teamRank: resJSON.types.Novice.team_rank,
                rank: resJSON.types.Novice.rank,
                map: resJSON.types.Novice.map
            },
            Moderate: {
                points: resJSON.types.Moderate.points,
                teamRank: resJSON.types.Moderate.team_rank,
                rank: resJSON.types.Moderate.rank,
                map: resJSON.types.Moderate.map
            },
            Brutal: {
                points: resJSON.types.Brutal.points,
                teamRank: resJSON.types.Brutal.team_rank,
                rank: resJSON.types.Brutal.rank,
                map: resJSON.types.Brutal.map
            },
            Insane: {
                points: resJSON.types.Insane.points,
                teamRank: resJSON.types.Insane.team_rank,
                rank: resJSON.types.Insane.rank,
                map: resJSON.types.Insane.map
            },
            Dummy: {
                points: resJSON.types.Dummy.points,
                teamRank: resJSON.types.Dummy.team_rank,
                rank: resJSON.types.Dummy.rank,
                map: resJSON.types.Dummy.map
            },
            Oldschool: {
                points: resJSON.types.Oldschool.points,
                teamRank: resJSON.types.Oldschool.team_rank,
                rank: resJSON.types.Oldschool.rank,
                map: resJSON.types.Oldschool.map
            },
            Solo: {
                points: resJSON.types.Solo.points,
                teamRank: resJSON.types.Solo.team_rank,
                rank: resJSON.types.Solo.rank,
                map: resJSON.types.Solo.map
            },
            Race: {
                points: resJSON.types.Race.points,
                teamRank: resJSON.types.Race.team_rank,
                rank: resJSON.types.Race.rank,
                map: resJSON.types.Race.map
            },
            Fun: {
                points: resJSON.types.Fun.points,
                teamRank: resJSON.types.Fun.team_rank,
                rank: resJSON.types.Fun.rank,
                map: resJSON.types.Fun.map
            },
        },
        hoursPlayedThisYear: resJSON.hours_played_past_365_days,
        allFinsih: resJSON.last_finishes,
        activity: resJSON.activity,
        };
    };
};

module.exports = { DDNet };