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
                id: 'b',
                type: 'image',
                rect: ['1px', '0px','120px','670px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'dd/b.jpg','0px','0px']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['-39px', '23px','199px','76px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'RectangleCopy',
                type: 'rect',
                rect: ['-44px', '349px','199px','110px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'bg',
                type: 'image',
                rect: ['527px', '-105px','138px','775px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px']
            },
            {
                id: 'a1',
                type: 'image',
                rect: ['-124px', '-50px','370px','490px','auto', 'auto'],
                clip: ['rect(0px 370px 528.7477416992188px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"a1.svg",'0px','0px'],
                transform: [[],[],[],['0.33','0.33']]
            },
            {
                id: 'a2',
                type: 'image',
                rect: ['-148px', '-46px','420px','490px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a2.svg",'0px','0px'],
                transform: [[],[],[],['0.33','0.33']]
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
                rect: ['-183px', '322px','490px','460px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"addr.svg",'0px','0px'],
                transform: [[],[],[],['0.3','0.32608']]
            },
            {
                id: 'doc2',
                type: 'image',
                rect: ['-474', '210px','120px','179px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"doc.png",'0px','0px']
            },
            {
                id: 't2',
                type: 'image',
                rect: ['381px', '479px','450px','80px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t2.svg",'0px','0px'],
                transform: [[],[],[],['0.25','0.25']]
            },
            {
                id: 'tt',
                type: 'image',
                rect: ['1px', '637px','120px','20px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'dd/tt.jpg','0px','0px']
            },
            {
                id: 'au',
                type: 'image',
                rect: ['1px', '276px','120px','183px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'dd/au.png','0px','0px','100%','100%'],
                transform: [[],[],[],['-1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_a2}": [
                ["style", "top", '-46px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '-148px'],
                ["style", "clip", [0,420,535.6969604492188,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_tt}": [
                ["style", "top", '637px'],
                ["style", "opacity", '0'],
                ["style", "left", '1px']
            ],
            "${_logo3}": [
                ["style", "top", '36px'],
                ["style", "height", '56px'],
                ["style", "opacity", '0'],
                ["style", "left", '-2px'],
                ["style", "width", '119px']
            ],
            "${_addr}": [
                ["style", "top", '322px'],
                ["transform", "scaleY", '0.32608'],
                ["transform", "scaleX", '0.3'],
                ["style", "opacity", '1'],
                ["style", "left", '-183px'],
                ["style", "clip", [0,490,-120,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_a1}": [
                ["style", "top", '-50px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '-124px'],
                ["style", "clip", [0,370,528.7477416992188,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_bg}": [
                ["style", "top", '-105px'],
                ["style", "height", '775px'],
                ["style", "opacity", '0'],
                ["style", "left", '527px'],
                ["style", "width", '138px']
            ],
            "${_t2}": [
                ["style", "top", '479px'],
                ["transform", "scaleY", '0.25'],
                ["transform", "scaleX", '0.25'],
                ["style", "opacity", '0'],
                ["style", "left", '381px']
            ],
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '110px'],
                ["style", "opacity", '0'],
                ["style", "left", '-44px'],
                ["style", "top", '349px']
            ],
            "${_doc2}": [
                ["style", "top", '210px'],
                ["style", "opacity", '0'],
                ["style", "left", '-200px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '670px'],
                ["style", "width", '120px']
            ],
            "${_Rectangle}": [
                ["style", "top", '23px'],
                ["style", "left", '-39px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_au}": [
                ["transform", "scaleX", '-1'],
                ["style", "opacity", '0'],
                ["style", "left", '1px'],
                ["style", "top", '276px']
            ],
            "${_b}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13250,
            autoPlay: true,
            timeline: [
                { id: "eid102", tween: [ "style", "${_RectangleCopy}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeInOutCubic" },
                { id: "eid61", tween: [ "style", "${_doc2}", "left", '669px', { fromValue: '-200px'}], position: 500, duration: 1186, easing: "easeInOutCubic" },
                { id: "eid76", tween: [ "transform", "${_a1}", "scaleY", '0.33', { fromValue: '0'}], position: 750, duration: 750, easing: "easeInOutCubic" },
                { id: "eid62", tween: [ "style", "${_doc2}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 1000, easing: "easeInOutCubic" },
                { id: "eid17", tween: [ "style", "${_bg}", "opacity", '0.75', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutCubic" },
                { id: "eid65", tween: [ "style", "${_t2}", "opacity", '1', { fromValue: '0'}], position: 1869, duration: 1000, easing: "easeInOutCubic" },
                { id: "eid80", tween: [ "transform", "${_a2}", "scaleY", '0.33', { fromValue: '0'}], position: 7000, duration: 1000, easing: "easeInOutCubic" },
                { id: "eid27", tween: [ "style", "${_addr}", "clip", [0,490,460,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,490,-120,0]}], position: 750, duration: 1500, easing: "easeInOutCubic" },
                { id: "eid66", tween: [ "style", "${_tt}", "opacity", '1', { fromValue: '0'}], position: 2283, duration: 500, easing: "easeInOutCubic" },
                { id: "eid90", tween: [ "style", "${_tt}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 1125, easing: "easeInOutCubic" },
                { id: "eid100", tween: [ "style", "${_tt}", "opacity", '1', { fromValue: '0.000000'}], position: 8000, duration: 750, easing: "easeInOutCubic" },
                { id: "eid74", tween: [ "transform", "${_a1}", "scaleX", '0.33', { fromValue: '0'}], position: 750, duration: 750, easing: "easeInOutCubic" },
                { id: "eid72", tween: [ "style", "${_a1}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 500, easing: "easeInOutCubic" },
                { id: "eid68", tween: [ "style", "${_au}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeInOutCubic" },
                { id: "eid70", tween: [ "style", "${_b}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1686, easing: "easeInOutCubic" },
                { id: "eid2", tween: [ "style", "${_logo3}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeInOutCubic" },
                { id: "eid91", tween: [ "style", "${_addr}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 1125, easing: "easeInOutCubic" },
                { id: "eid101", tween: [ "style", "${_addr}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 750, easing: "easeInOutCubic" },
                { id: "eid78", tween: [ "transform", "${_a2}", "scaleX", '0.33', { fromValue: '0'}], position: 7000, duration: 1000, easing: "easeInOutCubic" }            ]
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
