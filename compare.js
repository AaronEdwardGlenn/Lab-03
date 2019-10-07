const compare = (personG, compG) => {

    if (personG === compG) {
        
        return utie;
    } else if (personG === 'rock' && compG === 'paper') {
        return uLose;
    } else if ((personG === 'rock') && (compG === 'scissors')) {
        return uWin;
    } else if (personG === 'paper' && compG === 'rock') {
        return uWin;
    } else if (personG === 'paper' && compG === 'scissors') {
        return uLose;
    } else if (personG === 'scissors' && compG === 'paper') {
        return uWin;
    } else if (personG === 'scissors' && compG === 'rock')
        return uLose;
        
};    

const uWin = 'WIN!';
const uLose = 'LOSE!';
const utie = 'TIE!';
     
export default compare;