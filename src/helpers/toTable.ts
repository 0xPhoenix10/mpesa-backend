
export function pdf2table(data) {
    // console.log('data:', data)


    // PDF's contain pages and each page contains Texts. These texts have an x and y value.
    // So finding Texts with equal y values seems like the solution.
    // However, some y values are off by 0.010 pixels/points so let's first find what the smallest y value could be.

    // Let's find Texts with the same x value and look for the smallest y distance of these Texts (on the same page of course)
    // Then use those smallest y values (per page) to find Texts that seem to be on the same row
    // If no smallest y value (per page) can be found, use 0 as smallest distance.


    // Let's get started:


    // find smallest y value between 2 texts with equal x values:
    var smallestYValueForPage = [];


    for (var p = 0; p < data.Pages.length; p++) {
        var page = data.Pages[p];

        var smallestYValue = null; // per page

        var textsWithSameXvalues = {};

        for (var t = 0; t < page.Texts.length; t++) {
            var text = page.Texts[t];

            if (!textsWithSameXvalues[text.x]) {
                textsWithSameXvalues[text.x] = [];
            }
            textsWithSameXvalues[text.x].push(text);
        }

        // find smallest y distance:
        for (var x in textsWithSameXvalues) {
            var texts = textsWithSameXvalues[x];

            for (var i = 0; i < texts.length; i++) {
                var firstYvalue = texts[i].y;

                for (var j = 0; j < texts.length; j++) {
                    if (texts[i] !== texts[j]) {

                        var distance = Math.abs(texts[j].y - texts[i].y);
                        if (smallestYValue === null || distance < smallestYValue) {
                            smallestYValue = distance;
                        }
                    }
                };
            };
        }

        if (smallestYValue === null) smallestYValue = 0;
        smallestYValueForPage.push(smallestYValue);
    }


    // now lets find Texts with 'the same' y-values, Actually y-values in the range of y-smallestYValue and y+smallestYValue:
    var myPages = [];

    for (var p = 0; p < data.Pages.length; p++) {
        var page = data.Pages[p];

        var rows = []; // store Texts and their x positions in rows

        for (var t = 0; t < page.Texts.length; t++) {
            var text = page.Texts[t];

            var foundRow = false;
            for (var r = rows.length - 1; r >= 0; r--) {

                // y value of Text falls within the y-value range, add text to row:
                var maxYdifference = smallestYValueForPage[p];
                if (rows[r].y - maxYdifference < text.y && text.y < rows[r].y + maxYdifference) {

                    // only add value of T to data (which is the actual text):
                    for (var i = 0; i < text.R.length; i++) {
                        rows[r].data.push({
                            text: decodeURIComponent(text.R[i].T),
                            x: text.x
                        });
                    };
                    foundRow = true;
                }
            };
            if (!foundRow) {
                // create new row:
                var row = {
                    y: text.y,
                    data: []
                } as any

                // add text to row:
                for (var i = 0; i < text.R.length; i++) {
                    row.data.push({
                        text: decodeURIComponent(text.R[i].T),
                        x: text.x
                    });
                };

                // add row to rows:
                rows.push(row);
            }

        };

        // sort each extracted row
        for (var i = 0; i < rows.length; i++) {
            rows[i].data.sort(comparer)
        }

        // add rows to pages:
        myPages.push(rows);
    };

    console.log('myPages:', myPages)
    // flatten pages into rows:
    var rows = [];

    for (var p = 0; p < myPages.length; p++) {
        for (var r = 0; r < myPages[p].length; r++) {
            // now that each row is made of objects
            // we need to extract the 'text' property from the object
            var rowEntries = []
            var row = myPages[p][r].data
            for (var i = 0; i < row.length; i++) {
                rowEntries.push(row[i].text)
            }
            // now append the extracted and ordered text into the return rows.
            rows.push(rowEntries);
        };
    };

    // return callback:
    // callback(null, rows, myPages);
    // console.log(rows)
    return { rows, metaData: data.Meta }
}

var comparer = function (a, b) {
    /*
        Compares two objects by their 'x' properties.
    */
    if (a.x > b.x) {
        return 1;
    }
    if (a.x < b.x) {
        return -1;
    }
    // a must be equal to b
    return 0;
}

// exports.parse = parse;
