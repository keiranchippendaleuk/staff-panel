import {Provider} from "next-auth/client";
import {Grommet} from "grommet";

const myTheme = {
    "name": "Hololive Resistance staff panel",
    "rounding": 4,
    "spacing": 24,
    "defaultMode": "dark",
    "global": {
        "colors": {
            "brand": {
                "dark": "#2200dd",
                "light": "#0000ff"
            },
            "background": {
                "dark": "#111111",
                "light": "#FFFFFF"
            },
            "background-back": {
                "dark": "#111111",
                "light": "#EEEEEE"
            },
            "background-front": {
                "dark": "#222222",
                "light": "#FFFFFF"
            },
            "background-contrast": {
                "dark": "#FFFFFF11",
                "light": "#11111111"
            },
            "text": {
                "dark": "#EEEEEE",
                "light": "#333333"
            },
            "text-strong": {
                "dark": "#FFFFFF",
                "light": "#000000"
            },
            "text-weak": {
                "dark": "#CCCCCC",
                "light": "#444444"
            },
            "text-xweak": {
                "dark": "#999999",
                "light": "#666666"
            },
            "border": {
                "dark": "#444444",
                "light": "#CCCCCC"
            },
            "control": {
                "light": "brand",
                "dark": "brand"
            },
            "active-background": "background-contrast",
            "active-text": "text-strong",
            "selected-background": "brand",
            "selected-text": "text-strong",
            "status-critical": "#FF4040",
            "status-warning": "#FFAA15",
            "status-ok": "#00C781",
            "status-unknown": "#CCCCCC",
            "status-disabled": "#CCCCCC",
            "graph-0": "brand",
            "graph-1": "status-warning",
            "focus": {
                "light": "#33ccfd",
                "dark": "#33ccfd"
            }
        },
        "font": {
            "family": "Helvetica"
        },
        "active": {
            "background": "active-background",
            "color": "active-text"
        },
        "hover": {
            "background": "active-background",
            "color": "active-text"
        },
        "selected": {
            "background": "selected-background",
            "color": "selected-text"
        }
    },
    "chart": {},
    "diagram": {
        "line": {}
    },
    "meter": {},
    "layer": {
        "background": {
            "dark": "#111111",
            "light": "#FFFFFF"
        }
    }
}

export default function App({Component, pageProps}) {
    return (
        <Provider session={pageProps.session}>
            <Grommet theme={myTheme}>
                <Component {...pageProps} />
            </Grommet>
        </Provider>
    )
}