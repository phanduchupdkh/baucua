export default function fakeLvxoc(x, y, lvXocs) {
    let fakeRan

    x > 50 && x < 90 && y > 110 && y < 150 ? fakeRan = 0 : ''
    x > 90 && x < 130 && y > 110 && y < 150 ? fakeRan = 1 : ''
    x > 140 && x < 180 && y > 50 && y < 90 ? fakeRan = 2 : ''
    x > 180 && x < 220 && y > 50 && y < 90 ? fakeRan = 3 : ''
    x > 140 && x < 180 && y > 170 && y < 210 ? fakeRan = 4 : ''
    x > 180 && x < 220 && y > 170 && y < 210 ? fakeRan = 5 : ''

    let filterRan = parseInt(Math.random() * 5)
    x > 50 && x < 90 && y > 150 && y < 190 ? lvXocs = lvXocs.map(item => item === 0 ? (filterRan === item ? 1 : filterRan) : item) : ''
    x > 90 && x < 130 && y > 150 && y < 190 ? lvXocs = lvXocs.map(item => item === 1 ? (filterRan === item ? 2 : filterRan) : item) : ''
    x > 140 && x < 180 && y > 90 && y < 140 ? lvXocs = lvXocs.map(item => item === 2 ? (filterRan === item ? 3 : filterRan) : item) : ''
    x > 180 && x < 220 && y > 90 && y < 140 ? lvXocs = lvXocs.map(item => item === 3 ? (filterRan === item ? 4 : filterRan) : item) : ''
    x > 140 && x < 180 && y > 210 && y < 250 ? lvXocs = lvXocs.map(item => item === 4 ? (filterRan === item ? 5 : filterRan) : item) : ''
    x > 180 && x < 220 && y > 210 && y < 250 ? lvXocs = lvXocs.map(item => item === 5 ? (filterRan === item ? 0 : filterRan) : item) : ''

    if (fakeRan !== undefined) {
        lvXocs[parseInt(Math.random() * 3)] = fakeRan
    }
    return lvXocs
}

