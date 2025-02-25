function removeEntries(obj, targets) {
    return Object.fromEntries(
        Object.entries(obj).filter(([name, item]) => !targets.includes(name))
    );
}

console.log(removeEntries({ piano: 300, tv: 100, skate: 50, laptop: 1200 }, ["skate", "tv"]));

console.log(removeEntries({ mirror: 500, painting: 1, vase: 200 }, ["vase"]));

