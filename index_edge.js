/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bg',
                type: 'image',
                rect: ['-11px', '-103px','138px','775px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px']
            },
            {
                id: 'a1',
                type: 'image',
                rect: ['-127px', '312px','370px','490px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a1.svg",'0px','0px'],
                transform: [[],[],[],['0.25','0.25']]
            },
            {
                id: 'a2',
                type: 'image',
                rect: ['-151px', '308px','420px','490px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a2.svg",'0px','0px'],
                transform: [[],[],[],['0.25','0.25']]
            },
            {
                id: 'logo3',
                type: 'image',
                rect: ['-2px', '36px','119px','56px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
            },
            {
                id: 'addr',
                type: 'image',
                rect: ['-185px', '329px','490px','460px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"addr.svg",'0px','0px'],
                transform: [[],[],[],['0.23','0.25']]
            },
            {
                id: 'doc2',
                type: 'image',
                rect: ['-474', '312px','120px','179px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"doc.png",'0px','0px']
            },
            {
                id: 't2',
                type: 'image',
                rect: ['-166px', '612px','450px','80px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t2.svg",'0px','0px'],
                transform: [[],[],[],['0.25','0.25']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_a2}": [
                ["style", "top", '308px'],
                ["transform", "scaleY", '0.25'],
                ["transform", "scaleX", '0.25'],
                ["style", "opacity", '1'],
                ["style", "left", '-151px'],
                ["style", "clip", [0,420,-34,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_addr}": [
                ["style", "top", '329px'],
                ["transform", "scaleY", '0.25'],
                ["transform", "scaleX", '0.23'],
                ["style", "left", '-185px'],
                ["style", "clip", [0,490,-120,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_a1}": [
                ["style", "top", '312px'],
                ["transform", "scaleY", '0.25'],
                ["transform", "scaleX", '0.25'],
                ["style", "opacity", '1'],
                ["style", "left", '-127px'],
                ["style", "clip", [0,370,-146,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_bg}": [
                ["style", "top", '-103px'],
                ["style", "height", '775px'],
                ["style", "opacity", '0'],
                ["style", "left", '-11px'],
                ["style", "width", '138px']
            ],
            "${_logo3}": [
                ["style", "top", '36px'],
                ["style", "height", '56px'],
                ["style", "opacity", '0'],
                ["style", "left", '-2px'],
                ["style", "width", '119px']
            ],
            "${_doc2}": [
                ["style", "top", '312px'],
                ["style", "opacity", '0'],
                ["style", "left", '-200px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '670px'],
                ["style", "width", '120px']
            ],
            "${_t2}": [
                ["style", "top", '612px'],
                ["transform", "scaleY", '0.25'],
                ["transform", "scaleX", '0.25'],
                ["style", "opacity", '0'],
                ["style", "left", '-166px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 17000,
            autoPlay: true,
            timeline: [
                { id: "eid13", tween: [ "style", "${_a2}", "clip", [0,420,490,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,420,-34,0]}], position: 5591, duration: 2410, easing: "easeInCubic" },
                { id: "eid49", tween: [ "style", "${_a2}", "opacity", '0', { fromValue: '1'}], position: 10750, duration: 1250, easing: "easeInCubic" },
                { id: "eid17", tween: [ "style", "${_bg}", "opacity", '0.75', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInCubic" },
                { id: "eid11", tween: [ "style", "${_a1}", "clip", [0,370,490,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,370,-146,0]}], position: 500, duration: 2557, easing: "easeInCubic" },
                { id: "eid62", tween: [ "style", "${_doc2}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 1000, easing: "easeInCubic" },
                { id: "eid27", tween: [ "style", "${_addr}", "clip", [0,490,460,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,490,-120,0]}], position: 12000, duration: 2373, easing: "easeInCubic" },
                { id: "eid64", tween: [ "style", "${_a1}", "opacity", '0', { fromValue: '1'}], position: 5250, duration: 341, easing: "easeInCubic" },
                { id: "eid2", tween: [ "style", "${_logo3}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeInCubic" },
                { id: "eid65", tween: [ "style", "${_t2}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 500, easing: "easeInCubic" },
                { id: "eid61", tween: [ "style", "${_doc2}", "left", '1px', { fromValue: '-200px'}], position: 500, duration: 1186, easing: "easeInCubic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-3198467");
