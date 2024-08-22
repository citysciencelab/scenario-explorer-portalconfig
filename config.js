const Config = {
    wfsImgPath: "./resources/img/",
    namedProjections: [
        [
            "EPSG:25832",
            "+title=ETRS89/UTM 32N +proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        ],
    ],
    footer: {
        urls: [
            {
                bezeichnung: "common:modules.footer.designation",
                url: "https://geoinfo.hamburg.de/",
                alias: "Landesbetrieb Geoinformation und Vermessung",
                alias_mobil: "LGV",
            },
        ],
        showVersion: true,
    },
    quickHelp: {
        imgPath: "./resources/img/",
    },
    layerConf: "./resources/services-internet.json",
    restConf: "./resources/rest-services-internet.json",
    styleConf: "./resources/style_v3.json",
    scaleLine: true,
    mouseHover: {
        numFeaturesToShow: 2,
        infoText: "(weitere Objekte. Bitte zoomen.)",
    },
    addons: ["simulationTool", "login"],
    simulationApiUrl: "http://localhost/api",
    login: {
        oidcAuthorizationEndpoint: "http://localhost/auth/realms/UrbanModelPlatform/protocol/openid-connect/auth",
        oidcTokenEndpoint: "http://localhost/auth/realms/UrbanModelPlatform/protocol/openid-connect/token",
        oidcClientId: "ump-client",
        oidcRedirectUri: "http://localhost/portal/simulation/",
        oidcScope: "openid",
        interceptorUrlRegex: "https?://localhost.*" // add authorization to all URLs that match the given regex
    }
};

// conditional export to make config readable by e2e tests
if (typeof module !== "undefined") {
    module.exports = Config;
}
