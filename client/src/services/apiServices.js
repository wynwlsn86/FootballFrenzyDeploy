import axios from 'axios'
const URL = 'https://footballfrenzyapi.herokuapp.com'
const proxyurl = "https://cors-anywhere.herokuapp.com/";
export const fetchAllUsers = async () => {
  try {
    const allUsers = await axios.get(`${proxyurl + URL}/leagues/1/team/1/users/1`)
    //change the last 1 to a refrence to the usr passed dow
    return allUsers.data
  }
  catch (e) {
    console.log(e.message)
  }
}
export const fetchLeagueTeams = async (league_id) => {
  const leagueTeams = await axios.get(`${proxyurl + URL}/teams/1/leagues/${league_id}`)
  return leagueTeams.data
}
export const login = async (params) => {
  try{
    const login = await axios.get(`${proxyurl + URL}/leagues/1/team/1/users`)
    let user = login.data.find(user => {
      return user.email == params.email})
    let userId = user.id
    const userData = await axios.get(`${proxyurl + URL}/leagues/1/team/1/users/${userId}`)
    return userData.data
  }
  catch(e){
  }
}

export const fetchAllTeams = async () => {
  try{
    const allTeams = await axios.get(`${proxyurl + URL}/players/1/teams`)
    return allTeams.data
  }
  catch(e){
    console.log(e.message)
  }
}

export const fetchTeam = async (team_id) => {
  try{
    const team = await axios.get(`${proxyurl + URL}/players/1/teams/${team_id}`)
    console.log('single team fetch')
    return team.data
  }
  catch(e){
    console.log(e.message)
  }
}

export const fetchAllPlayers = async () => {
  try {
    const allPlayers = await axios.get(`${proxyurl + URL}/players`)
    return allPlayers.data
  }
  catch(e){
    console.log(e.message)
  }
}
// export const createTeam = async  (user_id, params) => {
//   try{
//     const team = await axios.post(``, params)
//     console.log(team.data)
//     return team.data
//   }
//   catch(e){
//     console.log(e.message)
//   }
// }
export const updatePlayersTeam = async (player_id, params) => {
  try{
    const player = await axios.put(`${proxyurl + URL}/players/${player_id}`, params)
    console.log('player updated')
    return player.data
  }
  catch(e){
    console.log(e.message)
  }
}
export const updateTeam = async (team_id, params) => {
  try{
    const team = await axios.put(`${proxyurl + URL}/players/1/teams/${team_id}`, params)
    console.log('position updated')
    console.log('************************')
    return team.data
  }
  catch(e){
    console.log(e.message)
  }
}

export const deleteTeam = async (id) => {
  try{
    const deleting = await axios.delete(`${proxyurl + URL}/players/1/teams/${id}`)
    return deleting.data
  }
  catch(e){
    console.log(e.message)
  }
}


export const createTeam = async (params) => {
  try{
    const newTeam = await axios.post(`${proxyurl + URL}/players/1/teams/`, params)
    console.log('teamcreated')
    return newTeam.data
  }
  catch(e){
    console.log(e.message)
  }
}

export const fetchPlayer = async(player_id) => {
  try{
    const player = await axios.get(`${proxyurl + URL}/players/${player_id}`)
    console.log('sinple player fetch')
  }
  catch(e){
    console.log(e.message)
  }
}