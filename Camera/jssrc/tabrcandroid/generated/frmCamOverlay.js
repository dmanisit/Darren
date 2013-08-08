//Form JS File
function frmCamOverlay_cameraOverlay_onCapture_seq0(eventobject) {
    onCaptureFrmOverLay.call(this, eventobject);
};

function addWidgetsfrmCamOverlay() {
    var cameraOverlay = new kony.ui.Camera({
        "id": "cameraOverlay",
        "isVisible": true,
        "text": "Camera",
        "skin": "sknCameraNormal",
        "focusSkin": "sknCameraFocus",
        "onCapture": frmCamOverlay_cameraOverlay_onCapture_seq0,
        "scaleFactor": 0,
        "maxSideOfTheImage": 0,
        "compressionLevel": 0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [4, 10, 4, 2],
        "padding": [1, 4, 1, 4],
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": true,
        "overlayConfig": {
            "overlayForm": frmCamOverlaid,
            "tapAnywhere": false
        }
    });
    var imgCapturedOverlay = new kony.ui.Image2({
        "id": "imgCapturedOverlay",
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [4, 2, 4, 2],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 180,
        "referenceHeight": 240,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var lblFrmOverlay = new kony.ui.Label({
        "id": "lblFrmOverlay",
        "isVisible": true,
        "text": null,
        "skin": "sknlblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "padding": [6, 10, 6, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    frmCamOverlay.add(
    cameraOverlay, imgCapturedOverlay, lblFrmOverlay);
};

function frmCamOverlayGlobals() {
    var MenuId = [];
    frmCamOverlay = new kony.ui.Form2({
        "id": "frmCamOverlay",
        "title": "Camera overlay",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmCamOverlay
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};