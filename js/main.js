var panelsToCreate = [];

window.onload = function () {
    // Panels are created and inserted in reverse order so that
    // the first ones that should be near the top animate because for some reason
    // Chart.js only animates the last 5 charts created....
    while (panelsToCreate.length) {
        var createFunction = panelsToCreate.pop();
        if (typeof createFunction === "function") {
            createFunction();
        }
    }
};

// Revenue
panelsToCreate.push(function () {
    Panels.create({
        title: "Revenue",
        value: "$238k",
        net: {
            type: "positive",
            label: "77% Previous Month"
        },
        bar: {
            label: "Parkhurst",
            value: "$283k",
            percentage: 77
        },
        graph: {
            labels: ["Jun 14", "Jul 14", "Aug 14", "Sep 14", "Oct 14", "Nov 14", "Dec 14"],
            values: [63000, 55000, 95000, 60000, 75000, 130000, 283000]
        }
    }, true);
});

// Sale Count
panelsToCreate.push(function () {
    Panels.create({
        title: "Sale Count",
        value: "603",
        net: {
            type: "positive",
            label: "74% Previous Month"
        },
        bar: {
            label: "Parkhurst",
            value: "3",
            percentage: 74
        },
        graph: {
            labels: ["Jun 14", "Jul 14", "Aug 14", "Sep 14", "Oct 14", "Nov 14", "Dec 14"],
            values: [210, 240, 290, 200, 220, 330, 603]
        }
    }, true);
});

// Customer Count
panelsToCreate.push(function () {
    Panels.create({
        title: "Customer Count",
        value: "3",
        net: {
            type: "positive",
            label: "50% Previous Month"
        },
        bar: {
            label: "Parkhurst",
            value: "3",
            percentage: 50
        },
        graph: {
            labels: ["Jun 14", "Jul 14", "Aug 14", "Sep 14", "Oct 14", "Nov 14", "Dec 14"],
            values: [0, 0, 2, 0, 0, 2, 3]
        }
    }, true);
});

// Gross Profit
panelsToCreate.push(function () {
    Panels.create({
        title: "Gross Profit",
        value: "$145k",
        net: {
            type: "positive",
            label: "74% Previous Month"
        },
        bar: {
            label: "Parkhurst",
            value: "$145k",
            percentage: 74
        },
        graph: {
            labels: ["Jun 14", "Jul 14", "Aug 14", "Sep 14", "Oct 14", "Nov 14", "Dec 14"],
            values: [70000, 62000, 75000, 67000, 72000, 90000, 145000]
        }
    }, true);
});

// Discount
panelsToCreate.push(function () {
    Panels.create({
        title: "Discount",
        value: "$6.25k",
        net: {
            type: "positive",
            label: "706% Previous Month"
        },
        bar: {
            label: "Parkhurst",
            value: "$6.25k",
            percentage: 706
        },
        graph: {
            labels: ["Jun 14", "Jul 14", "Aug 14", "Sep 14", "Oct 14", "Nov 14", "Dec 14"],
            values: [4100, 3300, 4900, 3100, 2100, 2500, 6260]
        }
    }, true);
});

// Discount %
panelsToCreate.push(function () {
    Panels.create({
        title: "Discount %",
        value: "2.07%",
        net: {
            type: "positive",
            label: "347% Previous Month"
        },
        bar: {
            label: "Parkhurst",
            value: "2.07%",
            percentage: 347
        },
        graph: {
            labels: ["Jun 14", "Jul 14", "Aug 14", "Sep 14", "Oct 14", "Nov 14", "Dec 14"],
            values: [0.0073, 0.009, 0.013, 0.015, 0.013, 0.0049, 0.0217]
        }
    }, true);
});

// Basket Value
panelsToCreate.push(function () {
    Panels.create({
        title: "Basket Value",
        value: "$469",
        net: {
            type: "positive",
            label: "2% Previous Month"
        },
        bar: {
            label: "Parkhurst",
            value: "$469",
            percentage: 2
        },
        graph: {
            labels: ["Jun 14", "Jul 14", "Aug 14", "Sep 14", "Oct 14", "Nov 14", "Dec 14"],
            values: [350, 400, 430, 445, 451, 460, 469]
        }
    }, true);
});

// Basket Size
panelsToCreate.push(function () {
    Panels.create({
        title: "Basket Size",
        value: "2.26",
        net: {
            type: "positive",
            label: "1% Previous Month"
        },
        bar: {
            label: "Parkhurst",
            value: "2.26",
            percentage: 1
        },
        graph: {
            labels: ["Jun 14", "Jul 14", "Aug 14", "Sep 14", "Oct 14", "Nov 14", "Dec 14"],
            values: [1.3, 1.8, 1.5, 2, 2.4, 2.21, 2.26]
        }
    }, true);
});



