/*
Can you write a robot that finishes the delivery task faster than goalOrientedRobot
? If you observe that robot’s behavior, what obviously stupid things does it
do? How could those be improved?
If you solved the previous exercise, you might want to use your compareRobots
function to verify whether you improved the robot.
*/


/*
ANSWER
One idea for the robot improvement is to observe which of the places is the best
 to start, instead of go to the first place.
*/


//Meadowfield
const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
    ];

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
        return graph;
    }
const roadGraph = buildGraph(roads);


//The Task
class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
            if (p.place != this.place) return p;
            return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}


//Simulation
function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
//            console.log(`Done in ${turn} turns`);
//            break;
            return turn; //added for the exercise
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
//        console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

VillageState.random = function(parcelCount = 12) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
                place = randomPick(Object.keys(roadGraph));
            } while (place == address);
            parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};


function findRoute(graph, from, to) {
        let work = [{at: from, route: []}];
        for (let i = 0; i < work.length; i++) {
            let {at, route} = work[i];
            for (let place of graph[at]) {
                if (place == to) return route.concat(place);
                if (!work.some(w => w.at == place)) {
                    work.push({at: place, route: route.concat(place)});
                }
            }
    }
}


function goalOrientedRobot({place, parcels}, route) {
        if (route.length == 0) {
            let parcel = parcels[0];
            if (parcel.place != place) {
                route = findRoute(roadGraph, place, parcel.place);
            } else {
                route = findRoute(roadGraph, place, parcel.address);
            }
        }
    return {direction: route[0], memory: route.slice(1)};
}

runRobot(VillageState.random(), goalOrientedRobot,[]);



function compareRobots(robot1,robot2){
    let turnsArray1 = [];
    let turnsArray2 = [];
    for(i=0;i<100;i++){
        let state = VillageState.random();
        turnsArray1.push(runRobot(VillageState.random(), robot1,[]));
        turnsArray2.push(runRobot(VillageState.random(), robot2,[]));
        console.log(`test number ${i} of 100`);
    }
    
    turnAverage1 = turnsArray1.reduce((a,b)=>a+b,0)/turnsArray1.length;
    turnAverage2 = turnsArray2.reduce((a,b)=>a+b,0)/turnsArray2.length;
    console.log(`robot 1 has an average turn of ${turnAverage1} and robot 2 has an average turns of ${turnAverage2}`);
}


function findBestParcelIndex(place, parcels){
    let minimunIndex = null;
    let minimumSteps = 100;
    for(j=0;j<parcels.length;j++) {
        route = findRoute(roadGraph, place, parcels[j].place);
        if(route.length<minimumSteps){
            minimunIndex = j;
            minimumSteps=route.length;
        }
    }
    return minimunIndex;
}

function goalOrientedRobotOptimized({place, parcels}, route) {
    if (route.length == 0) {
        let parcel_index = findBestParcelIndex(place,parcels);
        //let parcel = parcels[0];//this must be modified
        let parcel = parcels[parcel_index];
        //console.log(parcel_index);
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
return {direction: route[0], memory: route.slice(1)};
}

compareRobots(goalOrientedRobot,goalOrientedRobotOptimized);
//robot 1 has an average turn of 18.18 and robot 2 has an average turns of 15.62
