/**
 * This JS file contains all the code for creating and managing panels
 */

/*
Basic structure of a panel:

<div class="summary-panel">
    <div class="wrapper">
        <div class="title">...</div>
        <div class="value">...</div>
        <div class="net-value positive">
            <!--
            This could also have 'negative' as a class which will style this as a
            negative value
            -->
            <span class="glyphicon glyphicon-triangle-top"></span>
            <!--
            If changing the outer class to 'negative', you should also change this class
            from 'glyphicon-triangle-top' to 'glyphicon-triangle-bottom' so that the icon
            makes sense
            ...
        </div>
        <div class="bar-chart" percentage="..." value="...">...</div>
    </div>
    <canvas></canvas>
</div>
 */


(function () {
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.maintainAspectRatio = false;

    /**
     * A collection of all the methods/functions that will generate different parts of
     * panels
     */
    var PanelElements = {
        /**
         * Create the panel title element. This is the text that is displayed at the
         * top of the panel
         * @param {String} text
         *  The title to set
         * @returns {Element}
         *  The created panel title element
         */
        createTitle: function (text) {
            var elem = document.createElement("div");
            elem.className = "title";
            elem.textContent = text;
            return elem;
        },
        /**
         * Create the panel value element. This is the enlarged/highlighted value that
         * appears second in the panel
         * @param {String} text
         *  The value to set
         * @returns {Element}
         *  The created value element
         */
        createValue: function (text) {
            var elem = document.createElement("div");
            elem.className = "value";
            elem.textContent = text;
            return elem;
        },
        /**
         * Create the net value element.
         * @param {String} text
         *  The label for the net value element
         * @param {String} [type]
         *  The default value is "neutral" which will display the element as blue. Other options
         *  include:
         *      "positive": This will make the text green and have an up-triangle
         *                  (representing an increase)
         *       negative: This makes the next red and have a down-triangle (representing
         *                  a decrease)
         *  If the parsed type isn't something that's expected it will default to "neutral".
         * @returns {Element}
         *  The created element
         */
        createNetValue: function (text, type) {
            type = type || ""; // Default to empty string

            var icon = document.createElement("span");
            icon.className = "glyphicon";

            var elem = document.createElement("div");
            elem.className = "net-value";

            // Add the correct class and icon based on the type
            // specified by type parameter
            if (type.toLowerCase() === "positive") {
                // This will make the net value look positive/good
                icon.className += " glyphicon-triangle-top";
                elem.className += " positive";
            } else if (type.toLowerCase() === "negative") {
                // This will make the net value look negative/bad
                icon.className += " glyphicon-triangle-bottom";
                elem.className += " negative";
            } else {
                // The parsed type wasn't valid. Set the icon element to null
                // so we know not to add it
                icon = null;
            }

            if (icon) {
                elem.appendChild(icon);
            }

            var textNode = document.createTextNode(" " + text);
            elem.appendChild(textNode);

            return elem;
        },
        /**
         * Create the bar chart element.
         * @param {String} label
         *  T
         * @param {String} value
         * @param {int} percentage
         * @returns {Element}
         */
        createBarChart: function (label, value, percentage) {
            // Ensure the percentage is between 0 and 100 (inclusive of both)
            if (percentage < 0) {
                percentage = 0;
            }

            if (percentage > 100) {
                percentage = 100;
            }

            var elem = document.createElement("div");
            elem.classList = "bar-chart";
            elem.setAttribute("percentage", "" + percentage);
            elem.setAttribute("value", value);
            elem.textContent = label;
            return elem;
        }
    };

    /**
     * Create a new panel and add it to the page
     * @param {{}} options
     *  The options to create the panel with
     * @return Panel
     *  A panel object that represents that panel that was added to the DOM
     */
    function createPanel(options) {
        var title = PanelElements.createTitle(options.title);
        var value = PanelElements.createValue(options.value);
        var netValue = PanelElements.createNetValue(
            options.net.label,
            options.net.type
        );
        var barChart = PanelElements.createBarChart(
            options.bar.label,
            options.bar.value,
            options.bar.percentage
        );
        var canvas = document.createElement("canvas");
        canvas.height = 300;

        var canvasWrapper = document.createElement("div");
        canvasWrapper.classList = "canvas-wrapper";
        canvasWrapper.appendChild(canvas);

        // The above elements all sit inside a wrapper so that that can have
        // padding
        var wrapper = document.createElement("div");
        wrapper.classList = "wrapper";
        wrapper.appendChild(title);
        wrapper.appendChild(value);
        wrapper.appendChild(netValue);
        wrapper.appendChild(barChart);

        // Create the panel that everything sits in
        var panel = document.createElement("div");
        panel.classList = "summary-panel";
        panel.appendChild(wrapper);
        panel.appendChild(canvasWrapper);

        // Add the panel to the DOM
        addPanelToDom(panel);
        initialiseChart(canvas, options.graph);
    }

    function initialiseChart(canvas, options) {
        // Find the minimum value and round it down to the nearest number
        // that is divisible by 10000
        var min = ArrayUtils.min(options.values);
        min = ((min / 10000) | 0) * 10000;

        // Initialize the chart
        var chart = new Chart(canvas, {
            type: 'line',
            data: {
                labels: options.labels,
                datasets: [{
                    lineTension: 0,
                    data: options.values,
                    backgroundColor: "#E1F0E1",
                    borderColor: "#009901",
                    borderWidth: 1,
                    pointRadius: 2,
                    pointBackgroundColor: "#009901"
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false,
                            min: min
                        }
                    }]
                }
            }
        });
    }

    /**
     * Add the created panel Element to the DOM. This method/function will handle
     * creating all rows and wrappers for the panel so that you don't have to
     * worry about it. All new panels will be added to the end of the existing
     * panels.
     * @param {Element} panel
     *  The panel element to add to the DOM
     */
    function addPanelToDom(panel) {
        // Get the wrapper that all panel rows are appended to
        var panelsLocation = document.getElementById("panel-wrapper");

        // The panel wrapper is used so that panels can be positioned correctly
        // across the page
        var panelWrapper = document.createElement("div");
        panelWrapper.classList = "col-xs-6 col-sm-4 col-md-4 col-lg-3";
        panelWrapper.appendChild(panel);

        panelsLocation.appendChild(panelWrapper);
    }

    window.Panels = {
        create: createPanel
    };
})();