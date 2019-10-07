const getThrow = (computerThrow) => {
    if (computerThrow === 0) {
        return 'rock';
    } else if (computerThrow === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

export default getThrow;