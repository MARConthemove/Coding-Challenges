let dirReduc = (route) => {
    let notPossibleMoves = {
        NORTH: "SOUTH",
        SOUTH: "NORTH",
        EAST: "WEST",
        WEST: "EAST",
    };

    return route.reduce(function(a, b){
        if (a[a.length - 1] === notPossibleMoves[b])
            a.pop();
        else
            a.push(b)
        return a
    }, []);
}
