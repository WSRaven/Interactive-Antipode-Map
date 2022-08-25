(function () {
    var globe = Earth();
    //
    globe.loadPlugin(autorotate(10));
    //adds JSON files for detail
    globe.loadPlugin({
        topojson:   {file:    },
        oceans:     {fill: '#PICKCOLOR'},
        land:       {fill: '#PICKCOLOR'},
        borders:    {stroke: '#PICKCOLOR'}
    }));

})