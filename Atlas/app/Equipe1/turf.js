turfSource = map.getsource()
var maxDistance = 100;
var clustered = turf.clustersDbscan(turfSource, maxDistance);