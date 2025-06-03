// https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes

function maxCandies(status, candies, keys, containedBoxes, initialBoxes) {
    let grabbedCandies = 0;
    const visited = new Set();
    const queue = new Set();

    function DFS(currLebel) {
        if (visited.has(currLebel)) return;

        visited.add(currLebel);
        grabbedCandies += candies[currLebel];

        for (let i = 0; i < keys[currLebel].length; i++) {
            const key = keys[currLebel][i];
            status[key] = 1;
            if (queue.has(key)) {
                queue.delete(key);
                DFS(key);
            }
        };

        for (let i = 0; i < containedBoxes[currLebel].length; i++) {
            const box = containedBoxes[currLebel][i];
            if (!status[box]) {
                queue.add(box);
                continue;
            };
            DFS(box);
        }
    }

    for (let i = 0; i < initialBoxes.length; i++) {
        const label = initialBoxes[i];
        if (!status[label]) {
            queue.add(label);
            continue;
        };
        DFS(label);
    }

    return grabbedCandies;
};