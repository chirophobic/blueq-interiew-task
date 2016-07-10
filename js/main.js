var panelsToCreate = [];

window.onload = function () {
    // Reverse the array so that the first created panal appears first
    panelsToCreate.reverse();
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
    });
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
            value: "",
            percentage: 74
        },
        graph: {
            labels: ["Jun 14", "Jul 14", "Aug 14", "Sep 14", "Oct 14", "Nov 14", "Dec 14"],
            values: [63000, 55000, 95000, 60000, 75000, 130000, 283000]
        }
    });
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
            values: [63000, 55000, 95000, 60000, 75000, 130000, 283000]
        }
    });
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
            values: [63000, 55000, 95000, 60000, 75000, 130000, 283000]
        }
    });
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
            values: [63000, 55000, 95000, 60000, 75000, 130000, 283000]
        }
    });
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
            values: [63000, 55000, 95000, 60000, 75000, 130000, 283000]
        }
    });
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
            values: [63000, 55000, 95000, 60000, 75000, 130000, 283000]
        }
    });
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
            values: [63000, 55000, 95000, 60000, 75000, 130000, 283000]
        }
    });
});



