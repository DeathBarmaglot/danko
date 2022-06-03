/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='https://raw.githubusercontent.com/DeathBarmaglot/danko/child/images/';

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
                fill: ["rgba(0,0,0,0)",im+"b.jpg",'0px','0px']
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
                id: 'do',
                type: 'image',
                rect: ['-437px', '-377px','990px','1162px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"do.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
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
                fill: ["rgba(0,0,0,0)",im+"tt.jpg",'0px','0px']
            },
            {
                id: 'au',
                type: 'image',
                rect: ['1px', '276px','120px','183px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"au.png",'0px','0px','100%','100%'],
                transform: [[],[],[],['-1']]
            },
            {
                id: 'f2',
                type: 'image',
                rect: ['-451px', '-565px','1023px','1528px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f2.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'f1',
                type: 'image',
                rect: ['-394px', '-395px','908px','1199px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
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
            "${_f2}": [
                ["style", "top", '-565px'],
                ["style", "height", '1528px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-451px'],
                ["style", "width", '1023px']
            ],
            "${_b}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '1px']
            ],
            "${_do}": [
                ["style", "top", '-377px'],
                ["style", "height", '1162px'],
                ["style", "opacity", '0'],
                ["style", "left", '-437px'],
                ["style", "width", '990px']
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
            "${__0}": [
                ["style", "left", '-386px'],
                ["style", "top", '154px']
            ],
            "${_au}": [
                ["transform", "scaleX", '-1'],
                ["style", "opacity", '0'],
                ["style", "left", '1px'],
                ["style", "top", '276px']
            ],
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '110px'],
                ["style", "opacity", '0'],
                ["style", "left", '-44px'],
                ["style", "top", '349px']
            ],
            "${_f1}": [
                ["style", "top", '-395px'],
                ["style", "height", '1199px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-394px'],
                ["style", "width", '908px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '120px'],
                ["style", "height", '670px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle}": [
                ["style", "top", '23px'],
                ["style", "left", '-39px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_t2}": [
                ["style", "top", '479px'],
                ["transform", "scaleY", '0.25'],
                ["transform", "scaleX", '0.25'],
                ["style", "opacity", '0'],
                ["style", "left", '381px']
            ],
            "${_logo3}": [
                ["style", "top", '36px'],
                ["style", "height", '56px'],
                ["style", "opacity", '0'],
                ["style", "left", '-2px'],
                ["style", "width", '119px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 20000,
            autoPlay: true,
            timeline: [
                { id: "eid78", tween: [ "transform", "${_a2}", "scaleX", '0.33', { fromValue: '0'}], position: 7000, duration: 1000, easing: "easeInOutCubic" },
                { id: "eid68", tween: [ "style", "${_au}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeInOutCubic" },
                { id: "eid2", tween: [ "style", "${_logo3}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeInOutCubic" },
                { id: "eid91", tween: [ "style", "${_addr}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 1125, easing: "easeInOutCubic" },
                { id: "eid101", tween: [ "style", "${_addr}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 750, easing: "easeInOutCubic" },
                { id: "eid76", tween: [ "transform", "${_a1}", "scaleY", '0.33', { fromValue: '0'}], position: 750, duration: 750, easing: "easeInOutCubic" },
                { id: "eid103", tween: [ "style", "${_a2}", "opacity", '0', { fromValue: '1'}], position: 11250, duration: 500 },
                { id: "eid105", tween: [ "style", "${_do}", "opacity", '1', { fromValue: '0'}], position: 11639, duration: 500 },
                { id: "eid107", tween: [ "style", "${_do}", "opacity", '0', { fromValue: '1'}], position: 13750, duration: 617 },
                { id: "eid80", tween: [ "transform", "${_a2}", "scaleY", '0.33', { fromValue: '0'}], position: 7000, duration: 1000, easing: "easeInOutCubic" },
                { id: "eid70", tween: [ "style", "${_b}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1686, easing: "easeInOutCubic" },
                { id: "eid111", tween: [ "style", "${_f2}", "opacity", '1', { fromValue: '0.000000'}], position: 17383, duration: 617, easing: "easeInOutCubic" },
                { id: "eid108", tween: [ "style", "${_f1}", "opacity", '1', { fromValue: '0.000000'}], position: 14250, duration: 500, easing: "easeInOutCubic" },
                { id: "eid110", tween: [ "style", "${_f1}", "opacity", '0.000000', { fromValue: '1'}], position: 17000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid66", tween: [ "style", "${_tt}", "opacity", '1', { fromValue: '0'}], position: 2283, duration: 500, easing: "easeInOutCubic" },
                { id: "eid90", tween: [ "style", "${_tt}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 1125, easing: "easeInOutCubic" },
                { id: "eid100", tween: [ "style", "${_tt}", "opacity", '1', { fromValue: '0.000000'}], position: 8000, duration: 750, easing: "easeInOutCubic" },
                { id: "eid65", tween: [ "style", "${_t2}", "opacity", '1', { fromValue: '0'}], position: 1869, duration: 1000, easing: "easeInOutCubic" },
                { id: "eid27", tween: [ "style", "${_addr}", "clip", [0,490,460,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,490,-120,0]}], position: 750, duration: 1500, easing: "easeInOutCubic" },
                { id: "eid74", tween: [ "transform", "${_a1}", "scaleX", '0.33', { fromValue: '0'}], position: 750, duration: 750, easing: "easeInOutCubic" },
                { id: "eid102", tween: [ "style", "${_RectangleCopy}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeInOutCubic" },
                { id: "eid72", tween: [ "style", "${_a1}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 500, easing: "easeInOutCubic" }            ]
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
